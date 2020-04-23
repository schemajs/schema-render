import React from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import UniElement from "./UniElement";
import { UniContainerStore } from "../../stores/UniContainerStore";
import { pathPrefix } from "../../const";
import Component, { BaseComponentPropsType } from "./BaseComponent";
import { AtList } from "taro-ui";

interface PageStateProps extends BaseComponentPropsType {
  containerStore: UniContainerStore;
}

@observer
class UniContainer extends Component<PageStateProps, any> {
  render() {
    const { containerStore } = this.props;
    const properties = containerStore.properties;
    return (
      <View className="UniContainer">
        {/* fields */}
        {properties &&
          Object.keys(properties).map(subKey => {
            const elePath = `${pathPrefix}.${subKey}`;
            return (
              <UniElement
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></UniElement>
            );
          })}
      </View>
    );
  }
}

export default UniContainer;
