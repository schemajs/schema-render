import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { IElementProps,IValidator } from "../../../types";
import BaseSchemaComponent from "../BaseSchemaComponent";
import {
  AtInputNumber
} from "taro-ui";
import { checkIsNotZeroValue } from "../../utils/validators";
import LeapUIElementStore from "./LeapUIElementStore";

@observer
export default class LeapUICompnents extends BaseSchemaComponent<
  IElementProps,
  any
> {
  elementStore: LeapUIElementStore

  constructor(props: IElementProps) {
    super(props);
    this.initStore(props);
  }

  initStore(props: IElementProps) {
    const { schemaStore } = props;
    console.log("LeapUICompnents initStore",schemaStore)
    if(!schemaStore){
      return null;
    }
    // 构建 store
    const store = new LeapUIElementStore(schemaStore)
    this.elementStore = store
    // schemaStore
    const schema = store.schemaStore.schema;

    // stateStore
    store.stateStore.setStateByKey("foo",{
      test_a:2
    })

    // validators
    // const validators: IValidator[] = [];
    // if (schema.required) {
    //   validators.push(checkIsNotZeroValue);
    // }
    // store.formItemStore.setValidators(validators);
    if (schema.required) {
        store.formItemStore.pushValidator(checkIsNotZeroValue)
    }
    
  }
   // events
  onBlur = this.getEventTrigger("onBlur");
  onErrorClick = this.getEventTrigger("onErrorClick");
  onErrorInput = this.getEventTrigger("onErrorInput");
  onCancel = this.getEventTrigger("onCancel");
  onConfirm = this.getEventTrigger("onConfirm");
  onChangeWithSetValue = (...args) => {
    const store = this.elementStore
    console.log(`onChange args:`, args);
    store.formItemStore.setValue(args[0]);
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
      case "LeapInputNumber":
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
