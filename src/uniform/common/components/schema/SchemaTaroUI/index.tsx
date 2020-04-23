import React from "react";
import { observer } from "mobx-react";
import { IElementProps } from "../type";
import BaseSchemaComponent from "../BaseSchemaComponent";
import {
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtAvatar,
  AtBadge,
  AtButton,
  AtCard,
  AtCheckbox,
  AtDrawer,
  AtFab,
  AtFloatLayout,
  AtForm,
  AtGrid,
  AtIcon,
  AtInputNumber,
  AtInput,
  AtListItem,
  AtList,
  AtModal,
  AtNavBar,
  AtNoticebar,
  AtPagination,
  AtProgress,
  AtRadio,
  AtRate,
  AtSegmentedControl,
  AtSwitch,
  AtSearchBar,
  AtTabBar,
  AtTabs,
  AtTag,
  AtTextarea,
  AtTimeline,
  AtToast,
  AtTabsPane,
  AtSwipeAction,
  AtAccordion,
  AtLoadMore,
  AtDivider,
  AtCountdown,
  AtSteps,
  AtCurtain,
  AtSlider,
  AtMessage,
  AtImagePicker,
  AtIndexes,
  AtRange,
  AtFloatButton,
  AtCalendar
} from "taro-ui";
import { EnumComponentName } from "../../../const";

@observer
export default class SchemaTaroUI extends BaseSchemaComponent<
  IElementProps,
  any
> {
  render() {
    const { store } = this.props;
    const { component, componentProps } = store;
    switch (component) {
      case EnumComponentName.AtActionSheet:
        return (
          <AtActionSheet
            {...componentProps}
            onClick={this.onClick}
          ></AtActionSheet>
        );
      case EnumComponentName.AtActionSheetItem:
        return (
          <AtActionSheetItem
            {...componentProps}
            onClick={this.onClick}
          ></AtActionSheetItem>
        );
      case EnumComponentName.AtActivityIndicator:
        return (
          <AtActivityIndicator
            {...componentProps}
            onClick={this.onClick}
          ></AtActivityIndicator>
        );
      case EnumComponentName.AtAvatar:
        return <AtAvatar {...componentProps} onClick={this.onClick}></AtAvatar>;
      case EnumComponentName.AtBadge:
        return <AtBadge {...componentProps} onClick={this.onClick}></AtBadge>;
      case EnumComponentName.AtButton:
        return <AtButton {...componentProps} onClick={this.onClick}></AtButton>;
      case EnumComponentName.AtCard:
        return <AtCard {...componentProps} onClick={this.onClick}></AtCard>;
      case EnumComponentName.AtCheckbox:
        return (
          <AtCheckbox {...componentProps} onClick={this.onClick}></AtCheckbox>
        );
      case EnumComponentName.AtDrawer:
        return <AtDrawer {...componentProps} onClick={this.onClick}></AtDrawer>;
      case EnumComponentName.AtFab:
        return <AtFab {...componentProps} onClick={this.onClick}></AtFab>;
      case EnumComponentName.AtFloatLayout:
        return (
          <AtFloatLayout
            {...componentProps}
            onClick={this.onClick}
          ></AtFloatLayout>
        );
      case EnumComponentName.AtForm:
        return <AtForm {...componentProps} onClick={this.onClick}></AtForm>;
      case EnumComponentName.AtGrid:
        return <AtGrid {...componentProps} onClick={this.onClick}></AtGrid>;
      case EnumComponentName.AtIcon:
        return <AtIcon {...componentProps} onClick={this.onClick}></AtIcon>;
      case EnumComponentName.AtInputNumber:
        return (
          <AtInputNumber
            {...componentProps}
            onClick={this.onClick}
          ></AtInputNumber>
        );
      case EnumComponentName.AtInput:
        return <AtInput {...componentProps} onClick={this.onClick}></AtInput>;
      case EnumComponentName.AtListItem:
        return (
          <AtListItem {...componentProps} onClick={this.onClick}></AtListItem>
        );
      case EnumComponentName.AtList:
        return <AtList {...componentProps} onClick={this.onClick}></AtList>;
      case EnumComponentName.AtModal:
        return <AtModal {...componentProps} onClick={this.onClick}></AtModal>;
      case EnumComponentName.AtNavBar:
        return <AtNavBar {...componentProps} onClick={this.onClick}></AtNavBar>;
      case EnumComponentName.AtNoticebar:
        return (
          <AtNoticebar {...componentProps} onClick={this.onClick}></AtNoticebar>
        );
      case EnumComponentName.AtPagination:
        return (
          <AtPagination
            {...componentProps}
            onClick={this.onClick}
          ></AtPagination>
        );
      case EnumComponentName.AtProgress:
        return (
          <AtProgress {...componentProps} onClick={this.onClick}></AtProgress>
        );
      case EnumComponentName.AtRadio:
        return <AtRadio {...componentProps} onClick={this.onClick}></AtRadio>;
      case EnumComponentName.AtRate:
        return <AtRate {...componentProps} onClick={this.onClick}></AtRate>;
      case EnumComponentName.AtSegmentedControl:
        return (
          <AtSegmentedControl
            {...componentProps}
            onClick={this.onClick}
          ></AtSegmentedControl>
        );
      case EnumComponentName.AtSwitch:
        return <AtSwitch {...componentProps} onClick={this.onClick}></AtSwitch>;
      case EnumComponentName.AtSearchBar:
        return (
          <AtSearchBar {...componentProps} onClick={this.onClick}></AtSearchBar>
        );
      case EnumComponentName.AtTabBar:
        return <AtTabBar {...componentProps} onClick={this.onClick}></AtTabBar>;
      case EnumComponentName.AtTabs:
        return <AtTabs {...componentProps} onClick={this.onClick}></AtTabs>;
      case EnumComponentName.AtTag:
        return <AtTag {...componentProps} onClick={this.onClick}></AtTag>;
      case EnumComponentName.AtTextarea:
        return (
          <AtTextarea {...componentProps} onClick={this.onClick}></AtTextarea>
        );
      case EnumComponentName.AtTimeline:
        return (
          <AtTimeline {...componentProps} onClick={this.onClick}></AtTimeline>
        );
      case EnumComponentName.AtToast:
        return <AtToast {...componentProps} onClick={this.onClick}></AtToast>;
      case EnumComponentName.AtTabsPane:
        return (
          <AtTabsPane {...componentProps} onClick={this.onClick}></AtTabsPane>
        );
      case EnumComponentName.AtSwipeAction:
        return (
          <AtSwipeAction
            {...componentProps}
            onClick={this.onClick}
          ></AtSwipeAction>
        );
      case EnumComponentName.AtAccordion:
        return (
          <AtAccordion {...componentProps} onClick={this.onClick}></AtAccordion>
        );
      case EnumComponentName.AtLoadMore:
        return (
          <AtLoadMore {...componentProps} onClick={this.onClick}></AtLoadMore>
        );
      case EnumComponentName.AtDivider:
        return (
          <AtDivider {...componentProps} onClick={this.onClick}></AtDivider>
        );
      case EnumComponentName.AtCountdown:
        return (
          <AtCountdown {...componentProps} onClick={this.onClick}></AtCountdown>
        );
      case EnumComponentName.AtSteps:
        return <AtSteps {...componentProps} onClick={this.onClick}></AtSteps>;
      case EnumComponentName.AtCurtain:
        return (
          <AtCurtain {...componentProps} onClick={this.onClick}></AtCurtain>
        );
      case EnumComponentName.AtSlider:
        return <AtSlider {...componentProps} onClick={this.onClick}></AtSlider>;
      case EnumComponentName.AtMessage:
        return (
          <AtMessage {...componentProps} onClick={this.onClick}></AtMessage>
        );
      case EnumComponentName.AtImagePicker:
        return (
          <AtImagePicker
            {...componentProps}
            onClick={this.onClick}
          ></AtImagePicker>
        );
      case EnumComponentName.AtIndexes:
        return (
          <AtIndexes {...componentProps} onClick={this.onClick}></AtIndexes>
        );
      case EnumComponentName.AtRange:
        return <AtRange {...componentProps} onClick={this.onClick}></AtRange>;
      case EnumComponentName.AtFloatButton:
        return (
          <AtFloatButton
            {...componentProps}
            onClick={this.onClick}
          ></AtFloatButton>
        );
      case EnumComponentName.AtCalendar:
        return (
          <AtCalendar {...componentProps} onClick={this.onClick}></AtCalendar>
        );
    }
  }
}
