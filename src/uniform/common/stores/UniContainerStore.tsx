import { action, computed, observable } from "mobx";
// type
import { IValidMessage, ISchema, ISchemaProperties } from "@/uniform/types";
// comp
import { UniElementStore } from "./UniElementStore";
import { pathPrefix } from "../const";
import { isArray } from "../utils/validators";

type ElementStoreInfo = {
  [key:string]:UniElementStore
}

export class UniContainerStore {

  @observable
  schemaData:ISchema={}

  elementStores: ElementStoreInfo = {
  };

  constructor(schema:ISchema){
    this.schemaData = schema
    this.reset();
  }

  @action.bound
  reset(){
    this.elementStores ={};
    this.parseBySchemaNode(this.schemaData,pathPrefix)
  }

  @action.bound
  parseBySchemaArray(
    parentPath: string,
    schemaArray:ISchema[]
  ) {
    schemaArray.map(schema => {
      const path = `${parentPath}.${schema.key}`;
      schema.path = path;
      const eleStore: UniElementStore = new UniElementStore(schema);
      this.putElementStore(path, eleStore);
      return this.parseBySchemaNode(schema, path);
    })
   
  }

  getArrayFromProperties(properties:ISchemaProperties){
    return Object.entries(properties).map((entry) => {
      const item = entry[1]
      item.key = entry[0]
      return item
    });
  }

  @action.bound
  parseBySchemaNode(
    schema: ISchema,
    parentPath: string
  ) {
    const { properties,items } = schema;
    if (!properties) {
      return null;
    }
    if(properties){
      const arr = this.getArrayFromProperties(properties)
      this.parseBySchemaArray(parentPath,arr)
    }
    
    if(items){
      if(isArray(items)){
        this.parseBySchemaArray(parentPath,items)
      }else{
        const itemsProperties =items.properties 
        if(itemsProperties){
          const arr = this.getArrayFromProperties(itemsProperties)
          this.parseBySchemaArray(parentPath,arr)
        }
      }
    }
  }

  get properties(){
    if(!this.schemaData){
      return null
    }
    return this.schemaData.properties
  }

  getElementStore(path:string){
    return this.elementStores[path]
  }

  @action.bound
  putElementStore(path:string,store: UniElementStore) {
    this.elementStores[path] = store;
  }

  @action.bound
  deleteElementStore(path:string) {
    delete this.elementStores[path];
  }

  @action.bound
  isValid(): IValidMessage {
    let err = {
      isValid: false,
      showError: false,
      errMessage: "",
      name: "",
    };
    Object.values(this.elementStores).map((store) => {
      let { isValid, showError, errMessage, name } = store;
      if (showError) {
        err.name = name;
        err.isValid = isValid;
        err.showError = showError;
        err.errMessage = errMessage;
        return err;
      }
    });
    return err;
  }
}

