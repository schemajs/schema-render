import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtListItem, AtInput, AtTextarea, AtComponentProps } from "taro-ui";
// util
import { observer } from "@tarojs/mobx";
import classNames from "classnames";
import _isEqual from "lodash/isEqual";

import BaseComponent from "../BaseComponent";

// text
import ListItemCustomTitleAndExtra from "@/uniform/common/components/base/ListItemCustomTitleAndExtra";
// Input
import ListItemInput from "@/uniform/common/components/CustomFormComponent/listItem/Input";
// Radio
import ListItemWithPicker from "@/uniform/common/components/base/ListItemWithPicker";
// Checkbox
import ListItemCheckbox from "@/uniform/common/components/CustomFormComponent/listItem/Checkbox";
// file
import ListItemFile from "@/uniform/common/components/CustomFormComponent/listItem/File";
// Textarea
import ListItemTextarea from "@/uniform/common/components/CustomFormComponent/listItem/Textarea";

// store
import { FormItemStore } from "../../stores/UniFormItemStore";
import { ICustomStyles, EnumCompType } from "..";

interface IFormItemProps extends AtComponentProps {
  store: FormItemStore;
  onChange?: (store: FormItemStore) => {};
  readerHeader?: JSX.Element;
  readerFooter?: JSX.Element;
}

@observer
export default class FormItem extends BaseComponent<IFormItemProps, any> {
  change = () => {
    let { onChange, store } = this.props;
    onChange && onChange(store);
  };

  connect = (options) => {
    options = {
      valueName: "value",
      eventName: "onChange",
      assistantValueName: "assistantValue",
      leftAssistantEventName: "onConfirm",
      rightAssistantEventName: "onCancel",
      ...options,
    };
    return (props, FormItemStore) => {
      const {
        isValid,
        value,
        assistantValue,
        customEvent,
        defaultProps,
        error,
        errMessage,
      } = props;
      let componentProps = {
        ...options.props,
        ...defaultProps,
        error,
        errMessage,
        isValid,
        FormItemStore,
        [options.valueName]: value,
        [options.assistantValueName]: assistantValue,
        [options.eventName](...args) {
          let data = defaultProps.getEventValue
            ? defaultProps.getEventValue(args)
            : options.getEventValue
            ? options.getEventValue(args)
            : args;

          if (defaultProps[options.eventName])
            defaultProps[options.eventName](data, FormItemStore, args);
          else if (!options.useAssistantValueEvent) customEvent.change(data);
          else if (options.useAssistantValueEvent)
            customEvent.assistantValueChange(data);
        },
      };

      // 给初始化组件暴露出两个事件用
      let hasLeftAssistantEvent: boolean =
        !!defaultProps[options.leftAssistantEventName] ||
        !!options[options.leftAssistantEventName];

      if (hasLeftAssistantEvent) {
        componentProps[options.leftAssistantEventName] = (...args) => {
          if (defaultProps[options.leftAssistantEventName])
            defaultProps[options.leftAssistantEventName](args, FormItemStore);
          else if (options[options.leftAssistantEventName])
            options[options.leftAssistantEventName](args, FormItemStore);
        };
      }

      let hasRightAssistantEvent: boolean =
        !!defaultProps[options.rightAssistantEventName] ||
        !!options[options.rightAssistantEventName];

      if (hasRightAssistantEvent) {
        componentProps[options.rightAssistantEventName] = (...args) => {
          if (defaultProps[options.rightAssistantEventName])
            defaultProps[options.rightAssistantEventName](args, FormItemStore);
          else if (options[options.rightAssistantEventName])
            options[options.rightAssistantEventName](args, FormItemStore);
        };
      }

      // 显示的值和value值不同
      if (defaultProps.filterValue)
        componentProps[options.assistantValueName] = defaultProps.filterValue(
          componentProps
        );
      else if (options.filterValue)
        componentProps[options.assistantValueName] = options.filterValue(
          componentProps
        );

      return componentProps;
    };
  };

  getProps(type: string) {
    let { store } = this.props;

    let FormItemStoreProps: any = (store && store.getFormItemStoreProps) || {};

    let allProps = {};

    switch (type) {
      case EnumCompType["ListItemText"]:
        Object.assign(
          allProps,
          this.connect({
            valueName: "extraText",
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemInput"]:
        Object.assign(
          allProps,
          this.connect({
            useAssistantValueEvent: true,
            assistantValueName: "inputValue",
            valueName: "extraText",
            rightAssistantEventName: "onClick",
            onConfirm(args, store) {
              store.setAssistantValueToValue();
            },
            onClick(args, store) {
              let { value } = store;
              store.setValue(value, {}, "assistant");
              store.setIsValueUpdated(false);
            },
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemTextarea"]:
        Object.assign(
          allProps,
          this.connect({
            useAssistantValueEvent: true,
            assistantValueName: "textareaValue",
            valueName: "extraText",
            rightAssistantEventName: "onClick",
            onConfirm(args, store) {
              store.setAssistantValueToValue();
            },
            onClick(args, store) {
              let { value } = store;
              store.setValue(value, {}, "assistant");
              store.setIsValueUpdated(false);
            },
            getEventValue: (arg) => {
              let value = arg[0].target.value;
              return [value, arg[0]];
            },
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemSwitch"]:
        Object.assign(
          allProps,
          this.connect({
            getEventValue: (arg) => {
              let value = arg[0].detail.value;
              return [value, arg[0]];
            },
            valueName: "switchIsCheck",
            eventName: "onSwitchChange",
            props: {
              isSwitch: true,
            },
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemRadio"]:
        Object.assign(
          allProps,
          this.connect({
            assistantValueName: "extraText",
            getEventValue(arg) {
              let value = arg[0].detail.value;

              return [value, arg[0]];
            },
            leftAssistantEventName: "onColumnChange",
            rightAssistantEventName: "onClick",
            filterValue(props) {
              let { mode, range, value, rangeKey } = props;
              if (mode == "selector") {
                let data = range[value];
                if (typeof data == "object") {
                  return data[rangeKey];
                } else {
                  return data || value;
                }
              }
              if (mode == "multiSelector") {
                let data1 = range[0][value[0]];

                let data2 = range[1][value[1]];
                if (typeof data2 == "object")
                  return `${data1[rangeKey]} & ${data2[rangeKey]}`;

                return `${data1} & ${data2}`;
              }
              return value;
            },
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemCheckbox"]:
        Object.assign(
          allProps,
          this.connect({
            assistantValueName: "extraText",
            valueName: "selectedList",
            filterValue(props) {
              let { selectedList, options } = props;

              if (typeof selectedList === "string") return selectedList;

              let extraTextArr: any = [];

              selectedList.forEach((item) => {
                let obj =
                  options.find((opItem) => {
                    return opItem.value == item;
                  }) || {};

                if (obj.label) {
                  extraTextArr.push(obj.label);
                }
              });

              let extraTextStr = extraTextArr.join(",");

              return extraTextStr;
            },
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemFile"]:
        Object.assign(
          allProps,
          this.connect({
            eventName: "onClick",
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["ListItemFiles"]:
        Object.assign(
          allProps,
          this.connect({
            eventName: "onClick",
            props: {
              isMore: true,
            },
          })(FormItemStoreProps, store)
        );
        break;
      case EnumCompType["AtInput"]: {
        Object.assign(allProps, this.connect({})(FormItemStoreProps, store));
        break;
      }
      case EnumCompType["AtTextarea"]: {
        Object.assign(
          allProps,
          this.connect({
            getEventValue: (arg) => {
              let value = arg[0].target.value;
              return [value, arg[0]];
            },
          })(FormItemStoreProps, store)
        );
        break;
      }
      default:
    }
    return allProps;
  }

  render() {
    let { className, readerHeader, readerFooter, store } = this.props;
    // 类型
    let type = store && store.type;

    let allProps: any = this.getProps(type);

    let node;
    switch (type) {
      case EnumCompType["ListItemText"]: {
        node = (
          <ListItemCustomTitleAndExtra
            {...allProps}
          ></ListItemCustomTitleAndExtra>
        );
        break;
      }
      case "ListItemInput": {
        node = <ListItemInput {...allProps}></ListItemInput>;
        break;
      }
      case EnumCompType["ListItemTextarea"]: {
        node = <ListItemTextarea {...allProps}></ListItemTextarea>;
        break;
      }
      case EnumCompType["ListItemSwitch"]: {
        node = <AtListItem {...allProps}></AtListItem>;
        break;
      }
      case EnumCompType["ListItemRadio"]: {
        node = <ListItemWithPicker {...allProps}></ListItemWithPicker>;
        break;
      }
      case EnumCompType["ListItemCheckbox"]: {
        node = <ListItemCheckbox {...allProps}></ListItemCheckbox>;
        break;
      }
      case EnumCompType["ListItemFile"]: {
        node = <ListItemFile {...allProps}></ListItemFile>;
        break;
      }
      case EnumCompType["ListItemFiles"]: {
        node = <ListItemFile {...allProps}></ListItemFile>;
        break;
      }
      case EnumCompType["AtInput"]: {
        node = <AtInput {...allProps}></AtInput>;
        break;
      }
      case EnumCompType["AtTextarea"]: {
        node = <AtTextarea {...allProps}></AtTextarea>;
        break;
      }
      default: {
        node = null;
      }
    }

    let style: ICustomStyles = this.getMergedStyles();

    return (
      <View style={style.root} className={classNames(className)}>
        <View>{readerHeader}</View>
        {node}
        <View>{readerFooter}</View>
      </View>
    );
  }
}
