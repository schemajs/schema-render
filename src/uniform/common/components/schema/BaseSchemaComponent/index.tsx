import React, { Component } from "react";
import { observer } from "mobx-react";
import { IElementProps } from "../type";

@observer
export default class BaseSchemaComponent<
  IProps extends IElementProps,
  IState
> extends Component<IProps, IState> {
  onClick = event => {
    const { containerStore, store } = this.props;
    const key = `${store.path}:onClick`;
    containerStore.triggerEvent(key, {
      event
    });
  };
}
