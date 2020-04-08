import { action, computed, observable } from "mobx";
// type
import { IValidMessage, ISchema } from "@/uniform/types";
// comp
import { UniElementStore } from "./UniElementStore";

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
    this.parseBySchemaNode(this.schemaData,"")
  }

  @action.bound
  parseBySchemaNode(
    schema: ISchema,
    parentPath: string
  ) {
    const { properties } = schema;
    if (!properties) {
      return null;
    }
    Object.entries(properties).map(([id, item]) => {
      const path = `${parentPath}.${id}`;
      item.path = path;
      const eleStore: UniElementStore = new UniElementStore(item);
      this.putElementStore(path, eleStore);
      return this.parseBySchemaNode(item, path);
    });
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

