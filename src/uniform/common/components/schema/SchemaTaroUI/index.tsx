import React from "react";
import { toJS } from "mobx";
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
    const { store, children } = this.props;
    const { component, componentProps: componentPropsObj } = store;
    const componentProps = toJS(componentPropsObj);
    switch (component) {
      case EnumComponentName.AtActionSheet:
        return (
          <AtActionSheet {...componentProps} onClick={this.onClick}>
            {children}
          </AtActionSheet>
        );
      case EnumComponentName.AtActionSheetItem:
        return (
          <AtActionSheetItem {...componentProps} onClick={this.onClick}>
            {children}
          </AtActionSheetItem>
        );
      case EnumComponentName.AtActivityIndicator:
        return (
          <AtActivityIndicator {...componentProps} onClick={this.onClick}>
            {children}
          </AtActivityIndicator>
        );
      case EnumComponentName.AtAvatar:
        return (
          <AtAvatar {...componentProps} onClick={this.onClick}>
            {children}
          </AtAvatar>
        );
      case EnumComponentName.AtBadge:
        return (
          <AtBadge {...componentProps} onClick={this.onClick}>
            {children}
          </AtBadge>
        );
      case EnumComponentName.AtButton:
        return (
          <AtButton {...componentProps} onClick={this.onClick}>
            {children}
          </AtButton>
        );
      case EnumComponentName.AtCard:
        return (
          <AtCard {...componentProps} onClick={this.onClick}>
            {children}
          </AtCard>
        );
      case EnumComponentName.AtCheckbox:
        return (
          <AtCheckbox {...componentProps} onClick={this.onClick}>
            {children}
          </AtCheckbox>
        );
      case EnumComponentName.AtDrawer:
        return (
          <AtDrawer {...componentProps} onClick={this.onClick}>
            {children}
          </AtDrawer>
        );
      case EnumComponentName.AtFab:
        return (
          <AtFab {...componentProps} onClick={this.onClick}>
            {children}
          </AtFab>
        );
      case EnumComponentName.AtFloatLayout:
        return (
          <AtFloatLayout {...componentProps} onClick={this.onClick}>
            {children}
          </AtFloatLayout>
        );
      case EnumComponentName.AtForm:
        return (
          <AtForm {...componentProps} onClick={this.onClick}>
            {children}
          </AtForm>
        );
      case EnumComponentName.AtGrid:
        return (
          <AtGrid {...componentProps} onClick={this.onClick}>
            {children}
          </AtGrid>
        );
      case EnumComponentName.AtIcon:
        return (
          <AtIcon {...componentProps} onClick={this.onClick}>
            {children}
          </AtIcon>
        );
      case EnumComponentName.AtInputNumber:
        return (
          <AtInputNumber {...componentProps} onClick={this.onClick}>
            {children}
          </AtInputNumber>
        );
      case EnumComponentName.AtInput:
        return (
          <AtInput {...componentProps} onClick={this.onClick}>
            {children}
          </AtInput>
        );
      case EnumComponentName.AtListItem:
        return (
          <AtListItem {...componentProps} onClick={this.onClick}>
            {children}
          </AtListItem>
        );
      case EnumComponentName.AtList:
        return (
          <AtList {...componentProps} onClick={this.onClick}>
            {children}
          </AtList>
        );
      case EnumComponentName.AtModal:
        return (
          <AtModal {...componentProps} onClick={this.onClick}>
            {children}
          </AtModal>
        );
      case EnumComponentName.AtNavBar:
        return (
          <AtNavBar {...componentProps} onClick={this.onClick}>
            {children}
          </AtNavBar>
        );
      case EnumComponentName.AtNoticebar:
        return (
          <AtNoticebar {...componentProps} onClick={this.onClick}>
            {children}
          </AtNoticebar>
        );
      case EnumComponentName.AtPagination:
        return (
          <AtPagination {...componentProps} onClick={this.onClick}>
            {children}
          </AtPagination>
        );
      case EnumComponentName.AtProgress:
        return (
          <AtProgress {...componentProps} onClick={this.onClick}>
            {children}
          </AtProgress>
        );
      case EnumComponentName.AtRadio:
        return (
          <AtRadio {...componentProps} onClick={this.onClick}>
            {children}
          </AtRadio>
        );
      case EnumComponentName.AtRate:
        return (
          <AtRate {...componentProps} onClick={this.onClick}>
            {children}
          </AtRate>
        );
      case EnumComponentName.AtSegmentedControl:
        return (
          <AtSegmentedControl {...componentProps} onClick={this.onClick}>
            {children}
          </AtSegmentedControl>
        );
      case EnumComponentName.AtSwitch:
        return (
          <AtSwitch {...componentProps} onClick={this.onClick}>
            {children}
          </AtSwitch>
        );
      case EnumComponentName.AtSearchBar:
        return (
          <AtSearchBar {...componentProps} onClick={this.onClick}>
            {children}
          </AtSearchBar>
        );
      case EnumComponentName.AtTabBar:
        return (
          <AtTabBar {...componentProps} onClick={this.onClick}>
            {children}
          </AtTabBar>
        );
      case EnumComponentName.AtTabs:
        return (
          <AtTabs {...componentProps} onClick={this.onClick}>
            {children}
          </AtTabs>
        );
      case EnumComponentName.AtTag:
        return (
          <AtTag {...componentProps} onClick={this.onClick}>
            {children}
          </AtTag>
        );
      case EnumComponentName.AtTextarea:
        return (
          <AtTextarea {...componentProps} onClick={this.onClick}>
            {children}
          </AtTextarea>
        );
      case EnumComponentName.AtTimeline:
        return (
          <AtTimeline {...componentProps} onClick={this.onClick}>
            {children}
          </AtTimeline>
        );
      case EnumComponentName.AtToast:
        return (
          <AtToast {...componentProps} onClick={this.onClick}>
            {children}
          </AtToast>
        );
      case EnumComponentName.AtTabsPane:
        return (
          <AtTabsPane {...componentProps} onClick={this.onClick}>
            {children}
          </AtTabsPane>
        );
      case EnumComponentName.AtSwipeAction:
        return (
          <AtSwipeAction {...componentProps} onClick={this.onClick}>
            {children}
          </AtSwipeAction>
        );
      case EnumComponentName.AtAccordion:
        return (
          <AtAccordion {...componentProps} onClick={this.onClick}>
            {children}
          </AtAccordion>
        );
      case EnumComponentName.AtLoadMore:
        return (
          <AtLoadMore {...componentProps} onClick={this.onClick}>
            {children}
          </AtLoadMore>
        );
      case EnumComponentName.AtDivider:
        return (
          <AtDivider {...componentProps} onClick={this.onClick}>
            {children}
          </AtDivider>
        );
      case EnumComponentName.AtCountdown:
        return (
          <AtCountdown {...componentProps} onClick={this.onClick}>
            {children}
          </AtCountdown>
        );
      case EnumComponentName.AtSteps:
        return (
          <AtSteps {...componentProps} onClick={this.onClick}>
            {children}
          </AtSteps>
        );
      case EnumComponentName.AtCurtain:
        return (
          <AtCurtain {...componentProps} onClick={this.onClick}>
            {children}
          </AtCurtain>
        );
      case EnumComponentName.AtSlider:
        return (
          <AtSlider {...componentProps} onClick={this.onClick}>
            {children}
          </AtSlider>
        );
      case EnumComponentName.AtMessage:
        return (
          <AtMessage {...componentProps} onClick={this.onClick}>
            {children}
          </AtMessage>
        );
      case EnumComponentName.AtImagePicker:
        return (
          <AtImagePicker {...componentProps} onClick={this.onClick}>
            {children}
          </AtImagePicker>
        );
      case EnumComponentName.AtIndexes:
        return (
          <AtIndexes {...componentProps} onClick={this.onClick}>
            {children}
          </AtIndexes>
        );
      case EnumComponentName.AtRange:
        return (
          <AtRange {...componentProps} onClick={this.onClick}>
            {children}
          </AtRange>
        );
      case EnumComponentName.AtFloatButton:
        return (
          <AtFloatButton {...componentProps} onClick={this.onClick}>
            {children}
          </AtFloatButton>
        );
      case EnumComponentName.AtCalendar:
        return (
          <AtCalendar {...componentProps} onClick={this.onClick}>
            {children}
          </AtCalendar>
        );
      default:
        return null;
    }
  }
}
