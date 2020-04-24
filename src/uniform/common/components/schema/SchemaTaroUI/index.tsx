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
import { TaroUIComponentNames } from "../../../const";
import { checkIsNotZeroValue } from "../../../utils/validators";
import { IValidator } from "../../../utils/validators/type";
import { UniDisplayItemStore, AnyUniDisplayItemStore } from "@/uniform/common/stores/UniDisplayItemStore";
import { AnyUniFormItemStore, UniFormItemStore } from "@/uniform/common/stores/UniFormItemStore";
import { AnyUniSchemaStore } from "@/uniform/common/stores/UniSchemaStore";

@observer
export default class SchemaTaroUI extends BaseSchemaComponent<
  IElementProps,
  any
> {
  elementStore: AnyUniFormItemStore
  constructor(props: IElementProps) {
    super(props);
    this.initStore(props);
  }
  initStore(props: IElementProps) {
    const { schemaStore } = props;
    const store = new UniFormItemStore(schemaStore)
    this.elementStore = store
    const { schema } = store;
    const validators: IValidator[] = [];
    if (schema.required) {
      validators.push(checkIsNotZeroValue);
    }
    // maxLength
    store.setValidators(validators);
  }
  onGetUserInfo = this.getEventTrigger("onGetUserInfo");
  onContact = this.getEventTrigger("onContact");
  onGetPhoneNumber = this.getEventTrigger("onGetPhoneNumber");
  onError = this.getEventTrigger("onError");
  onOpenSetting = this.getEventTrigger("onOpenSetting");
  onTimeUp = this.getEventTrigger("onTimeUp");
  onOpen = this.getEventTrigger("onOpen");
  onClose = this.getEventTrigger("onClose");
  onCancel = this.getEventTrigger("onCancel");
  onConfirm = this.getEventTrigger("onConfirm");
  onGotoMore = this.getEventTrigger("onGotoMore");
  onClear = this.getEventTrigger("onClear");
  onSubmit = this.getEventTrigger("onSubmit");
  onReset = this.getEventTrigger("onReset");
  onFocus = this.getEventTrigger("onFocus");
  onBlur = this.getEventTrigger("onBlur");
  onErrorClick = this.getEventTrigger("onErrorClick");
  onKeyboardHeightChange = this.getEventTrigger("onKeyboardHeightChange");
  onErrorInput = this.getEventTrigger("onErrorInput");
  onLinechange = this.getEventTrigger("onLinechange");
  onColumnChange = this.getEventTrigger("onColumnChange");
  onActionClick = this.getEventTrigger("onActionClick");
  onChanging = this.getEventTrigger("onChanging");
  onImageClick = this.getEventTrigger("onImageClick");
  onFail = this.getEventTrigger("onFail");
  onAfterChange = this.getEventTrigger("onAfterChange");
  onSwitchChange = this.getEventTrigger("onSwitchChange");
  onScroll = this.getEventTrigger("onScroll");
  onScrollToUpper = this.getEventTrigger("onScrollToUpper");
  onScrollToLower = this.getEventTrigger("onScrollToLower");
  onClickLeftIcon = this.getEventTrigger("onClickLeftIcon");
  onClickRgIconSt = this.getEventTrigger("onClickRgIconSt");
  onClickRgIconNd = this.getEventTrigger("onClickRgIconNd");
  onPageChange = this.getEventTrigger("onPageChange");
  onItemClick = this.getEventTrigger("onItemClick");
  onScrollIntoView = this.getEventTrigger("onScrollIntoView");
  onClickPreMonth = this.getEventTrigger("onClickPreMonth");
  onClickNextMonth = this.getEventTrigger("onClickNextMonth");
  onDayClick = this.getEventTrigger("onDayClick");
  onDayLongClick = this.getEventTrigger("onDayLongClick");
  onMonthChange = this.getEventTrigger("onMonthChange");
  onSelectDate = this.getEventTrigger("onSelectDate");
  onOpenWithSetValue = (...args) => {
    const store = this.elementStore
    console.log(`onOpen args:`, args);
    store.setValue(true);
    this.onOpen(args);
  };
  onCloseWithSetValue = (...args) => {
    const store = this.elementStore
    console.log(`onClose args:`, args);
    store.setValue(false);
    this.onClose(args);
  };
  onChangeWithSetValue = (...args) => {
    const store = this.elementStore
    console.log(`onChange args:`, args);
    store.setValue(args[0]);
    this.onChange(args);
  };
  render() {
    const { schemaStore ,children } = this.props;
    // schemaStore
    const { component, componentProps: componentPropsObj, schema } = schemaStore;
    const { required, maxLength } = schema;
    const componentProps = toJS(componentPropsObj);
    // elementStore
    const { value,showError } = this.elementStore;

    switch (component) {
      case TaroUIComponentNames.AtActionSheet:
        return (
          <AtActionSheet
            {...componentProps}
            onClick={this.onClick}
            onClose={this.onClose}
            onCancel={this.onCancel}
          >
            {children}
          </AtActionSheet>
        );
      case TaroUIComponentNames.AtActionSheetItem:
        return (
          <AtActionSheetItem {...componentProps} onClick={this.onClick}>
            {children}
          </AtActionSheetItem>
        );
      case TaroUIComponentNames.AtActivityIndicator:
        return (
          <AtActivityIndicator {...componentProps} onClick={this.onClick}>
            {children}
          </AtActivityIndicator>
        );
      case TaroUIComponentNames.AtAvatar:
        return (
          <AtAvatar {...componentProps} onClick={this.onClick}>
            {children}
          </AtAvatar>
        );
      case TaroUIComponentNames.AtBadge:
        return (
          <AtBadge {...componentProps} onClick={this.onClick}>
            {children}
          </AtBadge>
        );
      case TaroUIComponentNames.AtButton:
        return (
          <AtButton
            {...componentProps}
            onClick={this.onClick}
            onGetUserInfo={this.onGetUserInfo}
            onContact={this.onContact}
            onGetPhoneNumber={this.onGetPhoneNumber}
            onError={this.onError}
            onOpenSetting={this.onOpenSetting}
          >
            {children}
          </AtButton>
        );
      case TaroUIComponentNames.AtCard:
        return (
          <AtCard {...componentProps} onClick={this.onClick}>
            {children}
          </AtCard>
        );
      case TaroUIComponentNames.AtCheckbox:
        return (
          <AtCheckbox
            {...componentProps}
            selectedList={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtCheckbox>
        );
      case TaroUIComponentNames.AtDrawer:
        return (
          <AtDrawer
            {...componentProps}
            show={value}
            onItemClick={this.onItemClick}
            onClose={this.onCloseWithSetValue}
          >
            {children}
          </AtDrawer>
        );
      case TaroUIComponentNames.AtFab:
        return (
          <AtFab {...componentProps} onClick={this.onClick}>
            {children}
          </AtFab>
        );
      case TaroUIComponentNames.AtFloatLayout:
        return (
          <AtFloatLayout
            {...componentProps}
            onClick={this.onClick}
            onClose={this.onClose}
            onScroll={this.onScroll}
            onScrollToUpper={this.onScrollToUpper}
            onScrollToLower={this.onScrollToLower}
          >
            {children}
          </AtFloatLayout>
        );
      case TaroUIComponentNames.AtForm:
        return (
          <AtForm
            {...componentProps}
            onClick={this.onClick}
            onSubmit={this.onSubmit}
            onReset={this.onReset}
          >
            {children}
          </AtForm>
        );
      case TaroUIComponentNames.AtGrid:
        return (
          <AtGrid {...componentProps} onClick={this.onClick}>
            {children}
          </AtGrid>
        );
      case TaroUIComponentNames.AtIcon:
        return (
          <AtIcon {...componentProps} onClick={this.onClick}>
            {children}
          </AtIcon>
        );
      case TaroUIComponentNames.AtInputNumber:
        return (
          <AtInputNumber
            {...componentProps}
            value={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onBlur={this.onBlur}
            onErrorInput={this.onErrorInput}
          >
            {children}
          </AtInputNumber>
        );
      case TaroUIComponentNames.AtInput:
        return (
          <AtInput
            {...componentProps}
            required={required}
            maxLength={maxLength}
            value={value}
            error={showError}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onConfirm={this.onConfirm}
            onErrorClick={this.onErrorClick}
            onKeyboardHeightChange={this.onKeyboardHeightChange}
          >
            {children}
          </AtInput>
        );
      case TaroUIComponentNames.AtListItem:
        return (
          <AtListItem
            {...componentProps}
            switchIsCheck={value}
            onClick={this.onClick}
            onSwitchChange={this.onChangeWithSetValue}
          >
            {children}
          </AtListItem>
        );
      case TaroUIComponentNames.AtList:
        return (
          <AtList {...componentProps} onClick={this.onClick}>
            {children}
          </AtList>
        );
      case TaroUIComponentNames.AtModal:
        return (
          <AtModal
            {...componentProps}
            onClick={this.onClick}
            onClose={this.onClose}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
          >
            {children}
          </AtModal>
        );
      case TaroUIComponentNames.AtNavBar:
        return (
          <AtNavBar
            {...componentProps}
            onClick={this.onClick}
            onClickLeftIcon={this.onClickLeftIcon}
            onClickRgIconSt={this.onClickRgIconSt}
            onClickRgIconNd={this.onClickRgIconNd}
          >
            {children}
          </AtNavBar>
        );
      case TaroUIComponentNames.AtNoticebar:
        return (
          <AtNoticebar
            {...componentProps}
            onClick={this.onClick}
            onClose={this.onClose}
            onGotoMore={this.onGotoMore}
          >
            {children}
          </AtNoticebar>
        );
      case TaroUIComponentNames.AtPagination:
        return (
          <AtPagination
            {...componentProps}
            current={value}
            onClick={this.onChangeWithSetValue}
            onPageChange={this.onChangeWithSetValue}
          >
            {children}
          </AtPagination>
        );
      case TaroUIComponentNames.AtProgress:
        return (
          <AtProgress {...componentProps} onClick={this.onClick}>
            {children}
          </AtProgress>
        );
      case TaroUIComponentNames.AtRadio:
        return (
          <AtRadio 
          {...componentProps}
          value={value}
          onClick={this.onChangeWithSetValue}
          onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtRadio>
        );
      case TaroUIComponentNames.AtRate:
        return (
          <AtRate
            {...componentProps}
            value={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtRate>
        );
      case TaroUIComponentNames.AtSegmentedControl:
        return (
          <AtSegmentedControl 
            {...componentProps} 
            current={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtSegmentedControl>
        );
      case TaroUIComponentNames.AtSwitch:
        return (
          <AtSwitch
            {...componentProps}
            checked={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtSwitch>
        );
      case TaroUIComponentNames.AtSearchBar:
        return (
          <AtSearchBar
            {...componentProps}
            value={value}
            maxLength={maxLength}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onFocus={this.onFocus}
            onClear={this.onClear}
            onBlur={this.onBlur}
            onConfirm={this.onConfirm}
            onActionClick={this.onActionClick}
          >
            {children}
          </AtSearchBar>
        );
      case TaroUIComponentNames.AtTabBar:
        return (
          <AtTabBar 
          {...componentProps} 
          current={value}
          onClick={this.onChangeWithSetValue}
          onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtTabBar>
        );
      case TaroUIComponentNames.AtTabs:
        return (
          <AtTabs 
          {...componentProps} 
          current={value}
          onClick={this.onChangeWithSetValue}
          onChange={this.onChangeWithSetValue}
          >
            {children}
          </AtTabs>
        );
      case TaroUIComponentNames.AtTag:
        return (
          <AtTag {...componentProps} onClick={this.onClick}>
            {children}
          </AtTag>
        );
      case TaroUIComponentNames.AtTextarea:
        return (
          <AtTextarea
            {...componentProps}
            value={value}
            maxLength={maxLength}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onConfirm={this.onConfirm}
            onLinechange={this.onLinechange}
          >
            {children}
          </AtTextarea>
        );
      case TaroUIComponentNames.AtTimeline:
        return (
          <AtTimeline {...componentProps} onClick={this.onClick}>
            {children}
          </AtTimeline>
        );
      case TaroUIComponentNames.AtToast:
        return (
          <AtToast
            {...componentProps}
            onClick={this.onClick}
            onClose={this.onClose}
          >
            {children}
          </AtToast>
        );
      case TaroUIComponentNames.AtTabsPane:
        return (
          <AtTabsPane
            {...componentProps}
            onClick={this.onClick}
            onOpen={this.onOpen}
            onClose={this.onClose}
          >
            {children}
          </AtTabsPane>
        );
      case TaroUIComponentNames.AtSwipeAction:
        return (
          <AtSwipeAction {...componentProps} onClick={this.onClick}>
            {children}
          </AtSwipeAction>
        );
      case TaroUIComponentNames.AtAccordion:
        return (
          <AtAccordion {...componentProps} onClick={this.onClick}>
            {children}
          </AtAccordion>
        );
      case TaroUIComponentNames.AtLoadMore:
        return (
          <AtLoadMore {...componentProps} onClick={this.onClick}>
            {children}
          </AtLoadMore>
        );
      case TaroUIComponentNames.AtDivider:
        return (
          <AtDivider {...componentProps} onClick={this.onClick}>
            {children}
          </AtDivider>
        );
      case TaroUIComponentNames.AtCountdown:
        return (
          <AtCountdown
            {...componentProps}
            onClick={this.onClick}
            onTimeUp={this.onTimeUp}
          >
            {children}
          </AtCountdown>
        );
      case TaroUIComponentNames.AtSteps:
        return (
          <AtSteps
            {...componentProps}
            onClick={this.onClick}
            onChange={this.onChange}
          >
            {children}
          </AtSteps>
        );
      case TaroUIComponentNames.AtCurtain:
        return (
          <AtCurtain
            {...componentProps}
            onClick={this.onClick}
            onClose={this.onClose}
          >
            {children}
          </AtCurtain>
        );
      case TaroUIComponentNames.AtSlider:
        return (
          <AtSlider
            {...componentProps}
            value={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onChanging={this.onChanging}
          >
            {children}
          </AtSlider>
        );
      case TaroUIComponentNames.AtMessage:
        return (
          <AtMessage {...componentProps} onClick={this.onClick}>
            {children}
          </AtMessage>
        );
      case TaroUIComponentNames.AtImagePicker:
        return (
          <AtImagePicker
            {...componentProps}
            files={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onImageClick={this.onImageClick}
            onFail={this.onFail}
          >
            {children}
          </AtImagePicker>
        );
      case TaroUIComponentNames.AtIndexes:
        return (
          <AtIndexes
            {...componentProps}
            onClick={this.onClick}
            onScrollIntoView={this.onScrollIntoView}
          >
            {children}
          </AtIndexes>
        );
      case TaroUIComponentNames.AtRange:
        return (
          <AtRange
            {...componentProps}
            value={value}
            onClick={this.onChangeWithSetValue}
            onChange={this.onChangeWithSetValue}
            onAfterChange={this.onAfterChange}
          >
            {children}
          </AtRange>
        );
      case TaroUIComponentNames.AtFloatButton:
        return (
          <AtFloatButton {...componentProps} onClick={this.onClick}>
            {children}
          </AtFloatButton>
        );
      case TaroUIComponentNames.AtCalendar:
        return (
          <AtCalendar
            {...componentProps}
            currentDate={value}
            onClickPreMonth={this.onClickPreMonth}
            onClickNextMonth={this.onClickNextMonth}
            onDayClick={this.onDayClick}
            onDayLongClick={this.onDayLongClick}
            onMonthChange={this.onMonthChange}
            onSelectDate={this.onChangeWithSetValue}
          >
            {children}
          </AtCalendar>
        );
      default:
        return null;
    }
  }
}
