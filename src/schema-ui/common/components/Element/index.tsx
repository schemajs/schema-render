import React from "react";
import { View, Text, Block } from "@tarojs/components";
import { observer } from "mobx-react";
import Component, { BaseComponentPropsType } from "../BaseComponent";
import TaroUIComponents from "../TaroUIComponents";
import TaroComponents from "../TaroComponents";
import { SchemaStore } from "../../stores/SchemaStore";
import { isTaroUI, isTaro } from "../../const";
import { ISchema } from "../../types";
import { ContainerStore } from "../../stores/ContainerStore";

interface PageStateProps extends BaseComponentPropsType {
  path: string;
  containerStore: ContainerStore;
}

@observer
class Element extends Component<PageStateProps, any> {
  schemaStore: SchemaStore<PageStateProps>;
  constructor(props) {
    super(props);
    const { containerStore, path } = props;
    this.schemaStore = containerStore.schemaStoreRegistry.getItem(path);
  }
  renderElement(subKey) {
    const { containerStore, path } = this.props;
    const subElementPath = `${path}.${subKey}`;
    return (
      <Element
        key={subElementPath}
        path={subElementPath}
        containerStore={containerStore}
      ></Element>
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
        <TaroUIComponents
          containerStore={containerStore}
          schemaStore={this.schemaStore}
        >
          {this.renderChildren()}
        </TaroUIComponents>
      );
    } else if (isTaro(component)) {
      return (
        <TaroComponents
          containerStore={containerStore}
          schemaStore={this.schemaStore}
        >
          {this.renderChildren()}
        </TaroComponents>
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

export default Element;
