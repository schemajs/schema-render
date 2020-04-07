import { action } from "mobx";
// type
import { IValidMessage } from "@/uniform/common/components/type";
// comp
import { UniElementStore } from "./UniElementStore";

export class FormStore {
  elementStores: Array<UniElementStore> = [];

  @action.bound
  addElementStore(store: UniElementStore) {
    this.elementStores.push(store);
  }

  @action.bound
  deleteElementStore(store: UniElementStore) {
    this.elementStores = this.elementStores.filter((storeItem) => {
      return store !== storeItem;
    });
  }

  @action.bound
  valid(): IValidMessage {
    let err = {
      isValid: false,
      showError: false,
      errMessage: "",
      name: "",
    };
    this.elementStores.forEach((store) => {
      let { isValid, showError, errMessage, name } = store;
      if (!err.showError) {
        err.name = name;
        err.isValid = isValid;
        err.showError = showError;
        err.errMessage = errMessage;
      }
    });
    return err;
  }
}
