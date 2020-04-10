import React,{Component} from "react";
import { observer } from "mobx-react";
import { IElementProps } from "../type";
import { AtList } from "taro-ui";

@observer
export default class SchemaList extends Component<IElementProps,any> {
  onClick(){
    const {containerStore, store } = this.props;
    store.setValue(true)
    containerStore.triggerEvent("abc",{})
  }
  render() {
    const { store } = this.props;
    const { schemaData,componentProps } = store;
    const { title,...rest} = componentProps
    const _title = title || schemaData.title
    return (
        <AtList
          title={_title}
        {...rest}
        ></AtList>
    );
  }
}
