import React from "react";
import { View, Text, Block } from "@tarojs/components";
import { observer } from "mobx-react";
import Component, { BaseComponentPropsType } from "../BaseComponent";
import SchemaListItem from "../schema/SchemaListItem";
import { UniElementStore } from "../../stores/UniElementStore";
import SchemaList from "../schema/SchemaList";

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
    return (
      <View>
        {properties &&
          Object.keys(properties).map(subKey => this.renderElement(subKey))}
        {items &&
          Object.keys(items.properties).map(subKey =>
            this.renderElement(subKey)
          )}
      </View>
    );
  }
  renderContent() {
    const { containerStore } = this.props;
    const { schemaData,component } = this.elementStore
    if(component=="list"){
      return (
        <SchemaList containerStore={containerStore} store={this.elementStore}>
          {this.renderChildren()}
        </SchemaList>
      );
    }
    if(component=="listItem"){
      return (
        <SchemaListItem containerStore={containerStore} store={this.elementStore}>
          {this.renderChildren()}
        </SchemaListItem>
      );
    }
    return (
      <View>
        <Text>Error: UnSupport Component!</Text>
      </View>
    );
  }
  render() {
    const { path } = this.props;
    if (!path) {
      return (
        <View>
          <Text>Error: No path!</Text>
        </View>
      );
    }
    if (!this.elementStore) {
      return (
        <View>
          <Text>{`>error: ${path}`}</Text>
        </View>
      );
    }
    console.log(`path:${path}`);
    return this.renderContent();
  }
}

export default UniElement;
