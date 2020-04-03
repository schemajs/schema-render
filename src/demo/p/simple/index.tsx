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
    return (
      <View className="index">
        <AtButton
          type="primary"
          className="detail-btn"
          onClick={this.goToDetail}
        >
          Go To Detail
        </AtButton>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
          <AtInput
            name="value"
            title="文本"
            type="text"
            placeholder="单行文本"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <AtInputNumber min={0} max={10} step={1} value={3} />
          <AtSwitch
            title="开启中"
            checked={this.state.switchValue}
            onChange={this.handleChangeSwitch}
          />
          <AtSwitch
            title="已禁止"
            disabled
            onChange={this.handleChangeSwitch}
          />
          <AtSwitch border={false} title="已关闭" />
          <AtRadio
            options={[
              { label: "单选项一", value: "option1", desc: "单选项描述" },
              { label: "单选项二", value: "option2" },
              {
                label: "单选项三禁用",
                value: "option3",
                desc: "单选项描述",
                disabled: true,
              },
            ]}
            value={this.state.value}
            onClick={this.handleChange.bind(this)}
          />
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
          <AtButton formType="reset">重置</AtButton>
        </AtForm>
      </View>
    );
  }
}

export default Index;
