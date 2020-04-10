import React, { Component } from "react";
import { observer } from "mobx-react";
// import ListItem from "../../stateless/ListItem";
import { IElementProps } from "../type";

@observer
export default class SchemaListItem extends Component<IElementProps, any> {
  constructor(props){
    super(props)
  }
  onClick(event) {
    const { containerStore, store } = this.props;
    store.setValue(true);
    const eventName = ``
    containerStore.triggerEvent(eventName, {
      event
    });
  }
  render() {
    const { store } = this.props;
    const { schemaData,componentProps } = store;
    const { title,note ,...rest} = componentProps
    const _title = title || schemaData.title
    const _note = note || schemaData.description
    return null
    // return (
    //   <ListItem
    //     title={_title}
    //     note={_note}
    //     {...rest}
    //     onClick={this.onClick}
    //            // isSwitch={schemaData.isSwitch}
    //     // switchIsCheck={schemaData.switchIsCheck}
    //     // onSwitchChange={schemaData.onSwitchChange}
    //   ></ListItem>
    // );
  }
}
