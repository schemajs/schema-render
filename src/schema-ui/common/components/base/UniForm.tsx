import React from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import classNames from "classnames";

import {
  AtForm,
  AtInput,
  AtButton,
  AtInputNumber,
  AtRadio,
  AtSwitch,
} from "taro-ui";
// var
import { IFormSubmit, ICustomStyles, IValidMessage, ISchema } from "../../types";
import { UniContainerStore } from "../../stores/UniContainerStore";
import { getContainerStore } from "../../stores/factory";
import UniContainer from "./UniContainer";
import Component,{BaseComponentPropsType} from './BaseComponent'

interface PageStateProps extends BaseComponentPropsType {
  schema:ISchema
  onSubmit?: IFormSubmit;
  renderFooter?: JSX.Element;
  footerClassName?: string | string[] | { [key: string]: boolean };
};

@observer
class UniForm extends Component<PageStateProps,any> {
  containerStore: UniContainerStore;
  constructor(props) {
    super(props);
    this.containerStore = getContainerStore(props.schema);
  }
  // form提交事件
  _onSubmit = () => {
    let {onSubmit } = this.props;
    const containerStore = this.containerStore
    if (containerStore) {
      let err: IValidMessage = containerStore.isValid();
      onSubmit && onSubmit(err);
      return;
    }
    onSubmit && onSubmit();
  };
  onReset =(event) => {
    this.containerStore.reset()
  }
  render() {
    return (
      <View>
          <UniContainer
            containerStore={this.containerStore}
          ></UniContainer>
         {this.props.children}
          <View onClick={this._onSubmit}>
             <AtButton type="primary" formType="submit">
            提交
          </AtButton>
          <AtButton formType="reset" onClick={this.onReset}>重置</AtButton>
          </View>
      </View>
    );
  }
}

export default UniForm;
