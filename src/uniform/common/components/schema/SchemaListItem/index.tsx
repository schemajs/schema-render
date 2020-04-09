import React,{Component} from "react";
import { observer } from "mobx-react";
import ListItem from "../../stateless/ListItem";
import { IElementProps } from "../type";

@observer
export default class SchemaListItem extends Component<IElementProps,any> {
  onClick(){
    const { store } = this.props;
    store.setValue(true)
    
  }
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
