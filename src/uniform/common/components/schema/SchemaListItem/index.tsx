import React from "react";
import { observer } from "mobx-react";
// import ListItem from "../../stateless/ListItem";
import { AtListItem } from "taro-ui";
import { IElementProps } from "../type";
import BaseSchemaComponent from '../BaseSchemaComponent'

@observer
export default class SchemaListItem extends BaseSchemaComponent<IElementProps, any> {
  render() {
    const { store } = this.props;
    const { schemaData,componentProps } = store;
    const { title,note ,...rest} = componentProps
    const _title = title || schemaData.title
    const _note = note || schemaData.description
    return (
      <AtListItem
        title={_title}
        note={_note}
        {...rest}
        onClick={this.onClick}
      ></AtListItem>
    );
  }
}
