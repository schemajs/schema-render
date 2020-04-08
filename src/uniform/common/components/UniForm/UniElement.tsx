import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

type PageStateProps = {
  path: string;
  containerStore: any;
};

interface UniElement {
  props: PageStateProps;
}

@observer
class UniElement extends Component {
  render() {
    const { containerStore, path } = this.props;
    if(!path){
      return <View><Text>Error: No path!</Text></View>
    }
    const compStore = containerStore.getElementStore(path)
    const properties = compStore.properties;
    return (
      <View className="UniElement">
        <View>
          <Text>{`> ${path}`}</Text>
        </View>
        {/* sub fields */}
        {properties &&
          Object.keys(properties).map((subKey) => {
            const elePath = `${path}.${subKey}`;
            return (
              <UniElement
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></UniElement>
            );
          })}
        <View>
          <Text>{`< ${path}`}</Text>
        </View>
      </View>
    );
  }
}

export default UniElement;
