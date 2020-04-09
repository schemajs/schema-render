import React,{Component} from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import { UniElementStore } from "@/uniform/common/stores/UniElementStore";
import ListItem from "../../stateless/ListItem";

interface IProps  {
  store:UniElementStore
};

@observer
class SchemaListItem extends Component<IProps,any> {
  render() {
    const { store } = this.props;
    const {schemaData} = store
    return (
        <ListItem
          title={schemaData.title}
          note={schemaData.description}
        ></ListItem>
    );
  }
}

export default SchemaListItem;
