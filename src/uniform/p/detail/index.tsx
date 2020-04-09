import React, { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import Taro from "@tarojs/taro";

import "./index.scss";
import UniForm from "../../common/components/UniForm/UniForm";

type PageStateProps = {
 
};

interface Index {
  props: PageStateProps;
}

const schema = {
  type: "object",
  properties: {
    ke11: {
      title:"ke11",
      description:"comp key11",
      type: "string"
    },
    key12: {
      type: "object",
      title:"key12",
      description:"comp key12",
      properties: {
        key21: {
          type: "array",
          title:"key21",
          description:"comp key21",
          items: {
            type: "object",
            properties: {
              key31: {
                type: "string",
                title:"key31",
                description:"comp key31",
              }
            }
          }
        }
      }
    }
  }
};

@observer
class Index extends Component {

  onSubmit(event) {
    console.log(event);
  }
 
  goToDetail = () => {
    Taro.navigateTo({
      url: "/uniform/p/detail/index"
    });
  };

  componentDidMount() {}

  render() {
    return (
      <View className="index">
        <UniForm
          schema={schema}
          onSubmit={this.onSubmit}
        ></UniForm>
      </View>
    );
  }
}

export default Index;
