import React, { Component } from "react";
import { observer } from "mobx-react";
import { IElementProps } from "../type";
import { AnyUniSchemaStore } from "@/uniform/common/stores/UniSchemaStore";

@observer
export default class BaseSchemaComponent<
  IProps extends IElementProps,
  IState
> extends Component<IProps, IState> {
  schemaStore:AnyUniSchemaStore
  constructor(props: IElementProps) {
    super((props as any))
    this.schemaStore = props.schemaStore
  }

  getEventTrigger=(eventName)=>{
    const { containerStore, schemaStore } = this.props;
    return (...args)=>{
      containerStore.triggerEvent(`${schemaStore.path}:${eventName}`, {
        schemaStore,
        eventName, 
        eventArgs:args
      });
    }
  }
  onClick = this.getEventTrigger('onClick')
  onChange = this.getEventTrigger('onChange')
 

}
