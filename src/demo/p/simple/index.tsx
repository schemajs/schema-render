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

import "./index.scss";

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

@inject("store")
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      switchValue: false,
    };
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
  render() {
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
    return (
      <View className="index">
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
          <AtButton formType="reset">重置</AtButton>
      </View>
    );
  }
}

export default Index;
