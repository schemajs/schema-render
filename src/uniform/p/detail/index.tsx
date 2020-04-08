import React, { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import Taro from "@tarojs/taro";
import {
  AtForm,
  AtInput,
  AtButton,
  AtInputNumber,
  AtRadio,
  AtSwitch,
} from "taro-ui";
import UniContainer from '../../common/components/UniContainer/UniContainer'

import "./index.scss";
import { UniContainerStore } from "@/uniform/common/stores/UniContainerStore";
import {getContainerStore} from '../../../uniform/common/stores/factory'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

const schema ={
  "type": "object",
  "properties": {
    "ke11": {
      "type": "string"
    },
    "key12": {
      "type": "object",
      "properties": {
        "key21": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "key31": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
}

@observer
class Index extends Component {
  containerStore:UniContainerStore
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      switchValue: false,
    };
    this.containerStore = getContainerStore(schema)
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }
  onSubmit(event) {
    console.log(event);
  }
  onReset(event) {
    console.log(event);
  }
  goToDetail = () => {
    Taro.navigateTo({
      url: "/uniform/p/detail/index",
    });
  };
  handleChangeSwitch = (value) => {
    this.setState({ switchValue: value });
  };
  componentDidMount(){

  }
  render() {
    return (
      <View className="index">
          <UniContainer containerStore={this.containerStore}></UniContainer>
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
          <AtButton formType="reset">重置</AtButton>
      </View>
    );
  }
}

export default Index;
