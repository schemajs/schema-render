import { action } from "mobx";
// type
import { IValidMessage } from "@/uniform/common/components";
// comp
import { FormItemStore } from "./UniFormItemStore";

export class FormStore {
  formItemStores: Array<FormItemStore> = [];

  @action.bound
  addStore(store: FormItemStore) {
    this.formItemStores.push(store);
  }

  @action.bound
  deleteStore(store: FormItemStore) {
    this.formItemStores = this.formItemStores.filter((storeItem) => {
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
    this.formItemStores.forEach((store) => {
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
