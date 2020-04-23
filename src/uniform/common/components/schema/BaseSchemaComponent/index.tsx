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
    return (eventParams)=>{
      containerStore.triggerEvent(`${store.path}:${eventName}`, {
        store,
        eventName, 
        eventParams
      });
    }
  }
  onClick = this.getEventTrigger('onClick')
}
