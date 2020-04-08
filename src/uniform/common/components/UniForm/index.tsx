import Taro from "@tarojs/taro";
import { AtComponentProps } from "taro-ui";
import classNames from "classnames";
import { View } from "@tarojs/components";

// util
import { UniElementStore } from "../../stores/UniElementStore";
import { FormStore } from "../../stores/UniContainerStore";
// comp
import BaseComponent from "../BaseComponent";
import UniElement from "../UniElement";
// var
import { IFormSubmit, ICustomStyles, IValidMessage, ISchema } from "../../../types";

interface IFormProps extends AtComponentProps {
  schema?: ISchema;
  store?: FormStore;
  onSubmit?: IFormSubmit;
  renderFooter?: JSX.Element;
  footerClassName?: string | string[] | { [key: string]: boolean };
}

interface IFormState {}

export default class Form extends BaseComponent<IFormProps, IFormState> {
  // form提交事件
  onSubmit = () => {
    let { store, onSubmit } = this.props;
    if (store) {
      let err: IValidMessage = store.valid();
      onSubmit && onSubmit(err);
      return;
    }
    onSubmit && onSubmit();
  };

  render() {
    let { className, footerClassName, schema } = this.props;

    let style: ICustomStyles = this.getMergedStyles();
    return (
      <View style={style.root} className={classNames(className)}>
        {schema &&
          Object.entries(schema.properties).map(([name, item]) => {
            let store: UniElementStore = new UniElementStore(
              Object.assign(
                {
                  name,
                },
                item
              )
            );
            return <UniElement store={store} key={`${name}`}></UniElement>;
          })}
        {this.props.children}
        {
          <View onClick={this.onSubmit} className={classNames(footerClassName)}>
            {this.props.renderFooter}
          </View>
        }
      </View>
    );
  }
}
