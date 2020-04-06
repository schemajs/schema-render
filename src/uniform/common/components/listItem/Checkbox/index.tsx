import Taro from "@tarojs/taro";

// comp
import BaseBusinessComponent from "@/uniform/common/components/BaseComponent";
import ListItemWithPopUp from "@/uniform/common/components/base/ListItemWithPopUp";
import { AtCheckbox } from "taro-ui";
import { View } from "@tarojs/components";

// scss
import Style from "./index.module.scss";

// util
import { toJS } from "mobx";

interface IListItemCheckboxProps {
  extraText: string;
  popTitle: string;
  label: string;
  selectedList: Array<any>;
  arrow: "right" | "up" | "down";
  onClick: () => void;
  onClose: () => void;
  onChange: () => void;
  onCancel: () => void;
  options: Array<any>;
  keepOriginExtraColor: boolean;
}

interface IListItemCheckboxState {
  isOpened: boolean;
}

export default class ListItemInput extends BaseBusinessComponent<
  IListItemCheckboxProps,
  IListItemCheckboxState
> {
  static defaultProps = {
    extraText: "",
    popTitle: "",
    label: "",
    selectedList: [],
    arrow: "right",
    onClick: () => {},
    onClose: () => {},
    onChange: () => {},
    options: {},
    keepOriginExtraColor: false,
  };

  state = {
    isOpened: false,
  };

  onClick = () => {
    let { onClick } = this.props;
    this.setState({
      isOpened: true,
    });
    onClick && onClick();
  };

  onCancel = () => {
    let { onCancel } = this.props;
    this.setState({
      isOpened: false,
    });
    onCancel && onCancel();
  };

  render() {
    const {
      extraText,
      label,
      arrow,
      popTitle,
      options,
      selectedList,
      onChange,
      keepOriginExtraColor,
    } = this.props;

    let { isOpened } = this.state;

    let selectedListData = toJS(selectedList);

    let optionsData = toJS(options);

    return (
      <ListItemWithPopUp
        isOpened={isOpened}
        popTitle={popTitle}
        label={label}
        extraText={extraText}
        arrow={arrow}
        onClick={this.onClick}
        onClose={this.onCancel}
        keepOriginExtraColor={keepOriginExtraColor}
      >
        <View className={Style["checkbox-container"]}>
          <AtCheckbox
            className={Style["at-custom-checkbox"]}
            options={optionsData}
            selectedList={selectedListData}
            onChange={onChange}
          ></AtCheckbox>
        </View>
      </ListItemWithPopUp>
    );
  }
}
