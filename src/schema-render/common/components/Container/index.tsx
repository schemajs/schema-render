import React from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

import Element from "../Element";
import { ContainerStore } from "../../stores/ContainerStore";
import Component, { BaseComponentPropsType } from "../BaseComponent";

interface PageStateProps extends BaseComponentPropsType {
  containerStore: ContainerStore;
}

@observer
class Container extends Component<PageStateProps, any> {
  render() {
    const { containerStore } = this.props;
    const properties = containerStore.rootSchemaStore.properties;
    return (
      <View className="Container">
        {/* fields */}
        {properties &&
          Object.keys(properties).map(subKey => {
            const elePath = `${containerStore.containerId}.${subKey}`;
            return (
              <Element
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></Element>
            );
          })}
      </View>
    );
  }
}

export default Container;
