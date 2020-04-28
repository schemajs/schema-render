import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { IElementProps,IValidator } from "../../../types";
import BaseSchemaComponent from "../BaseSchemaComponent";
import {
  AtInputNumber
} from "taro-ui";
import { TaroUIComponentNames } from "../../const";
import { checkIsNotZeroValue } from "../../utils/validators";
import { AnyFormItemStore, FormItemStore } from "../../stores/FormItemStore";

@observer
export default class TaroUIComponents extends BaseSchemaComponent<
  IElementProps,
  any
> {
  elementStore: AnyFormItemStore
  constructor(props: IElementProps) {
    super(props);
    this.initStore(props);
  }
  initStore(props: IElementProps) {
    const { schemaStore } = props;
    console.log("TaroUIComponents initStore",schemaStore)
    if(!schemaStore){
      return null;
    }
    const store = new FormItemStore(schemaStore)
    this.elementStore = store
    const { schema } = store;
    const validators: IValidator[] = [];
    if (schema.required) {
      validators.push(checkIsNotZeroValue);
    }
    // maxLength
    store.setValidators(validators);
  }
  onBlur = this.getEventTrigger("onBlur");
  onErrorClick = this.getEventTrigger("onErrorClick");
  onErrorInput = this.getEventTrigger("onErrorInput");
  onCancel = this.getEventTrigger("onCancel");
  onConfirm = this.getEventTrigger("onConfirm");
  onChangeWithSetValue = (...args) => {
    const store = this.elementStore
    console.log(`onChange args:`, args);
    store.setValue(args[0]);
    this.onChange(args);
  };
  render() {
    const { schemaStore ,children } = this.props;
    // schemaStore
    const { component, componentProps: componentPropsObj, schema } = schemaStore;
    const componentProps = toJS(componentPropsObj);
    // elementStore
    const { value:storeValue,showError } = this.elementStore;
    const value = toJS(storeValue)
    switch (component) {
      case TaroUIComponentNames.AtInputNumber:
        return (
          <AtInputNumber
            {...componentProps}
            value={value}
            onChange={this.onChangeWithSetValue}
            onBlur={this.onBlur}
            onErrorInput={this.onErrorInput}
          >
            {children}
          </AtInputNumber>
        );
      default:
        return null;
    }
  }
}
