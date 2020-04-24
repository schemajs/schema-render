import React, { Component } from "react";
import { observer } from "mobx-react";
import { IElementProps } from "../type";

@observer
export default class BaseSchemaComponent<
  IProps extends IElementProps,
  IState
> extends Component<IProps, IState> {
  getEventTrigger=(eventName)=>{
    const { containerStore, store } = this.props;
    return (...args)=>{
      containerStore.triggerEvent(`${store.path}:${eventName}`, {
        store,
        eventName, 
        eventArgs:args
      });
    }
  }
  onClick = this.getEventTrigger('onClick')
  onChange = this.getEventTrigger('onChange')
  onChangeWithSetValue = (...args) => {
    const { store } = this.props;
    console.log(`onChange args:`, args);
    store.setValue(args[0]);
    this.onChange(args);
  };

}
