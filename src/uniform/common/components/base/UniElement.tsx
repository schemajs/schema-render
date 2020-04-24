import React from "react";
import { View, Text, Block } from "@tarojs/components";
import { observer } from "mobx-react";
import Component, { BaseComponentPropsType } from "./BaseComponent";
import SchemaTaroUI from "../schema/SchemaTaroUI";
import SchemaTaro from "../schema/SchemaTaro";
import { UniElementStore } from "../../stores/UniElementStore";
import { isTaroUI, isTaro } from "../../const";

interface PageStateProps extends BaseComponentPropsType {
  path: string;
  containerStore: any;
}

@observer
class UniElement extends Component<PageStateProps, any> {
  elementStore: UniElementStore<PageStateProps, any>;
  constructor(props) {
    super(props);
    const { containerStore, path } = props;
    this.elementStore = containerStore.getElementStore(path);
  }
  renderElement(subKey) {
    const { containerStore, path } = this.props;
    const subElementPath = `${path}.${subKey}`;
    return (
      <UniElement
        key={subElementPath}
        path={subElementPath}
        containerStore={containerStore}
      ></UniElement>
    );
  }
  renderChildren() {
    const properties = this.elementStore.properties;
    const items = this.elementStore.items;
    const itemProps = items ? items.properties : null;
    return (
      <View>
        {properties &&
          Object.keys(properties).map(subKey => this.renderElement(subKey))}
        {itemProps &&
          Object.keys(itemProps).map(subKey => this.renderElement(subKey))}
      </View>
    );
  }
  renderContent() {
    const { containerStore } = this.props;
    const { component } = this.elementStore;
    if (isTaroUI(component)) {
      return (
        <SchemaTaroUI containerStore={containerStore} store={this.elementStore}>
          {this.renderChildren()}
        </SchemaTaroUI>
      );
    } else if (isTaro(component)) {
      return (
        <SchemaTaro containerStore={containerStore} store={this.elementStore}>
          {this.renderChildren()}
        </SchemaTaro>
      );
    }
    console.error(`Error: UnSupport Component: ${component}`)
    return null;
  }
  render() {
    const { path } = this.props;
    if (!path) {
      console.error("no path!")
      return null;
    }
    if (!this.elementStore) {
      console.error(`no elementStore! path: ${path}`)
      return null;
    }
    return this.renderContent();
  }
}

export default UniElement;
