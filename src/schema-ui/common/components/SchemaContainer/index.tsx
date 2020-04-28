import React from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

import SchemaElement from "../SchemaElement";
import { SchemaContainerStore } from "../../stores/SchemaContainerStore";
import Component, { BaseComponentPropsType } from "../BaseComponent";

interface PageStateProps extends BaseComponentPropsType {
  containerStore: SchemaContainerStore;
}

@observer
class SchemaContainer extends Component<PageStateProps, any> {
  render() {
    const { containerStore } = this.props;
    const properties = containerStore.rootSchemaStore.properties;
    return (
      <View className="SchemaContainer">
        {/* fields */}
        {properties &&
          Object.keys(properties).map(subKey => {
            const elePath = `${containerStore.containerId}.${subKey}`;
            return (
              <SchemaElement
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></SchemaElement>
            );
          })}
      </View>
    );
  }
}

export default SchemaContainer;
