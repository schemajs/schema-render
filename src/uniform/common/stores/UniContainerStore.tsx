import { action } from "mobx";
// type
import { IValidMessage } from "@/uniform/types";
// comp
import { UniElementStore } from "./UniElementStore";

type ElementStoreInfo = {
  [key:string]:UniElementStore
}

export class UniContainerStore {

  schemaData:any

  elementStores: ElementStoreInfo = {
  };

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
