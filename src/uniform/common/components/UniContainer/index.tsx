import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { UniContainerStore } from "../../containerStores/UniContainerStore";

type PageStateProps = {
  path: string;
  containerStore: any;
};

interface UniContainer {
  props: PageStateProps;
}

@observer
class UniContainer extends Component {
  render() {
    const { containerStore, path = "" } = this.props;
    // if(!path){
    //   return <Text>loading...</Text>
    // }
    const compStore =
      path == "" ? containerStore : containerStore.getElementStore(path);
    const properties = compStore.properties;
    return (
      <View className="UniContainer">
        <View>
          <Text>{`> ${path}`}</Text>
        </View>
        {/* sub */}
        {properties &&
          Object.entries(properties).map(([subName, value]) => {
            console.log(`subName:${subName}, schema:${JSON.stringify(value)}`);
            const elePath = `${path}.${subName}`;
            return (
              <UniContainer
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></UniContainer>
            );
          })}
        <View>
          <Text>{`< ${path}`}</Text>
        </View>
      </View>
    );
  }
}

export default UniContainer;
