import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import UniField from './UniField'

type PageStateProps = {
  containerStore: any;
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
              <UniField
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></UniField>
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
