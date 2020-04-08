import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

type PageStateProps = {
  path: string;
  containerStore: any;
};

interface UniField {
  props: PageStateProps;
}

@observer
class UniField extends Component {

  render() {
    const { containerStore, path } = this.props;
    if(!path){
      return <Text>Error:no path!</Text>
    }
    const compStore = containerStore.getElementStore(path)
    const properties = compStore.properties;
    return (
      <View className="UniField">
        <View>
          <Text>{`> ${path}`}</Text>
        </View>
        {/* sub fields */}
        {properties &&
          Object.entries(properties).map(([subName, value]) => {
            const elePath = `${path}.${subName}`;
            return (
              <UniField
                key={elePath}
                path={elePath}
                containerStore={containerStore}
              ></UniField>
            );
          })}
        <View>
          <Text>{`< ${path}`}</Text>
        </View>
      </View>
    );
  }
}

export default UniField;
