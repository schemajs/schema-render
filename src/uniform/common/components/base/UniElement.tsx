import React from "react";
import { View, Text, Block } from "@tarojs/components";
import { observer } from "mobx-react";
import Component, { BaseComponentPropsType } from "./BaseComponent";
import SchemaTaroUI from "../schema/SchemaTaroUI";
import SchemaTaro from "../schema/SchemaTaro";
import { UniSchemaStore } from "../../stores/UniSchemaStore";
import { isTaroUI, isTaro } from "../../const";
import { ISchema } from "../../types";

interface PageStateProps extends BaseComponentPropsType {
  path: string;
  containerStore: any;
}

@observer
class UniElement extends Component<PageStateProps, any> {
  schemaStore: UniSchemaStore<PageStateProps>;
  constructor(props) {
    super(props);
    const { containerStore, path } = props;
    this.schemaStore = containerStore.getSchemaStore(path);
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
    const properties = this.schemaStore.properties;
    const items = this.schemaStore.items;
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
    const { component } = this.schemaStore;
    if (isTaroUI(component)) {
      return (
        <SchemaTaroUI
          containerStore={containerStore}
          schemaStore={this.schemaStore}
        >
          {this.renderChildren()}
        </SchemaTaroUI>
      );
    } else if (isTaro(component)) {
      return (
        <SchemaTaro
          containerStore={containerStore}
          schemaStore={this.schemaStore}
        >
          {this.renderChildren()}
        </SchemaTaro>
      );
    }
    console.error(`Error: UnSupport Component: ${component}`);
    return null;
  }
  render() {
    const { path } = this.props;
    if (!path) {
      console.error("no path!");
      return null;
    }
    if (!this.schemaStore) {
      console.error(`no schemaStore! path: ${path}`);
      return null;
    }
    return this.renderContent();
  }
}

export default UniElement;
