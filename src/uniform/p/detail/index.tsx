import React, { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import Taro from "@tarojs/taro";

import "./index.scss";
import UniForm from "../../common/components/base/UniForm";

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
      type: "string",
      "x-component":"Input",
      "x-component-props":{
        name:'value',
        title:'标准五个字',
        type:'text',
        placeholder:'标准五个字'
      }
    },
    ke12: {
      "x-component":"InputNumber",
      "x-component-props":{
        min:0,
        max:10,
        step:1
      }
    },
    ke13: {
      "x-component":"Radio",
      "x-component-props":{
        options:[
          { label: '单选项一', value: 'option1', desc: '单选项描述' },
          { label: '单选项二', value: 'option2' },
          { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
        ]
      }
    },
    ke14: {
      "x-component":"Checkbox",
      "x-component-props":{
        options : [{
          value: 'list1',
          label: 'iPhone X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
        },{
          value: 'list2',
          label: 'HUAWEI P20'
        },{
          value: 'list3',
          label: 'OPPO Find X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true
        },{
          value: 'list4',
          label: 'vivo NEX',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true
      }]
    }
    },
    ke15: {
      "x-component":"Rate",
      "x-component-props":{
        max:10,
      }
    },
    ke16: {
      "x-component":"Switch",
      "x-component-props":{
      }
    },
    ke17: {
      "x-component":"Textarea",
      "x-component-props":{
        maxLength:200,
        placeholder:'你的问题是...'
      }
    },
    ke18: {
      "x-component":"SearchBar",
      "x-component-props":{
      }
    },
    ke19: {
      "x-component":"Slider",
      "x-component-props":{
      }
    },
    ke20: {
      "x-component":"Range",
      "x-component-props":{
      }
    },
    key118: {
      type: "object",
      title:"key12",
      description:"comp key12",
      "x-component":"list",
      properties: {
        key21: {
          type: "object",
          title:"key21",
          "x-component":"listItem",
          description:"comp key21",
          "x-component-props":{
            title:"x-component-props key21",
            note:"note",
            extraText:"extraText",
            isSwitch:true,
            hasBorder:false
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
