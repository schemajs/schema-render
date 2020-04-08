import { action } from "mobx";
// type
import { IValidMessage, ISchema } from "@/uniform/types";
// comp
import { UniElementStore } from "./UniElementStore";

type ElementStoreInfo = {
  [key:string]:UniElementStore
}

export class UniContainerStore {

  constructor(schema:ISchema){
    this.schemaData = schema
  }

  schemaData:ISchema={}

  get path(){
    return ""
  }

  get properties(){
    if(!this.schemaData){
      return null
    }
    return this.schemaData.properties
  }

  elementStores: ElementStoreInfo = {
  };

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
  valid(): IValidMessage {
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

