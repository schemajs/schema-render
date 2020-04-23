import React from "react";
import { View, Text, Block } from "@tarojs/components";
import { observer } from "mobx-react";
import Component, { BaseComponentPropsType } from "./BaseComponent";
import SchemaTaroUI from "../schema/SchemaTaroUI";
import { UniElementStore } from "../../stores/UniElementStore";
import { isTaroUI } from '../../const'

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
    const { component } = this.elementStore
    if(isTaroUI(component)){
      return <SchemaTaroUI containerStore={containerStore} store={this.elementStore}>
      </SchemaTaroUI>
    }
    // if(component=="listItem"){
    //   return (
    //     <SchemaListItem containerStore={containerStore} store={this.elementStore}>
    //       {this.renderChildren()}
    //     </SchemaListItem>
    //   );
    // }
    return (
      <View>
        <Text>{`Error: UnSupport ${component}`}</Text>
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
