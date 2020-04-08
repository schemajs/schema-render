import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import UniElement from './UniElement'
import { UniContainerStore } from "../../stores/UniContainerStore";

type PageStateProps = {
  containerStore: UniContainerStore;
};

interface UniContainer {
  props: PageStateProps;
}

@observer
class UniContainer extends Component {
  render() {
    const { containerStore} = this.props;
    const properties = containerStore.properties;
    return (
      <View className="UniContainer">
        <View>
          <Text>{`> UniContainer`}</Text>
        </View>
        {/* fields */}
        {properties &&
          Object.keys(properties).map((subKey) => {
            const elePath = `.${subKey}`;
            return (
              <UniElement
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></UniElement>
            );
          })}
        <View>
          <Text>{`< UniContainer`}</Text>
        </View>
      </View>
    );
  }
}

export default UniContainer;
