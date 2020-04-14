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
const {
  ActionSheet,
  ActionSheetItem,
  ActivityIndicator,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Drawer,
  Fab,
  FloatLayout,
  Form,
  Grid,
  Icon,
  InputNumber,
  Input,
  ListItem,
  List,
  Modal,
  NavBar,
  Noticebar,
  Pagination,
  Progress,
  Radio,
  Rate,
  SegmentedControl,
  Switch,
  SearchBar,
  TabBar,
  Tabs,
  Tag,
  Textarea,
  Timeline,
  Toast,
  TabsPane,
  SwipeAction,
  Accordion,
  LoadMore,
  Divider,
  Countdown,
  Steps,
  Curtain,
  Slider,
  Message,
  ImagePicker,
  Indexes,
  Range,
  FloatButton,
  Calendar
} = EnumComponentName;

@observer
export default class SchemaTaroUI extends BaseSchemaComponent<
  IElementProps,
  any
> {
  render() {
    const { store } = this.props;
    const { component, componentProps } = store;
    switch (component) {
      case ActionSheet:
        return (
          <AtActionSheet
            {...componentProps}
            onClick={this.onClick}
          ></AtActionSheet>
        );
      case ActionSheetItem:
        return (
          <AtActionSheetItem
            {...componentProps}
            onClick={this.onClick}
          ></AtActionSheetItem>
        );
      case ActivityIndicator:
        return (
          <AtActivityIndicator
            {...componentProps}
            onClick={this.onClick}
          ></AtActivityIndicator>
        );
      case Avatar:
        return <AtAvatar {...componentProps} onClick={this.onClick}></AtAvatar>;
      case Badge:
        return <AtBadge {...componentProps} onClick={this.onClick}></AtBadge>;
      case Button:
        return <AtButton {...componentProps} onClick={this.onClick}></AtButton>;
      case Card:
        return <AtCard {...componentProps} onClick={this.onClick}></AtCard>;
      case Checkbox:
        return (
          <AtCheckbox {...componentProps} onClick={this.onClick}></AtCheckbox>
        );
      case Drawer:
        return <AtDrawer {...componentProps} onClick={this.onClick}></AtDrawer>;
      case Fab:
        return <AtFab {...componentProps} onClick={this.onClick}></AtFab>;
      case FloatLayout:
        return (
          <AtFloatLayout
            {...componentProps}
            onClick={this.onClick}
          ></AtFloatLayout>
        );
      case Form:
        return <AtForm {...componentProps} onClick={this.onClick}></AtForm>;
      case Grid:
        return <AtGrid {...componentProps} onClick={this.onClick}></AtGrid>;
      case Icon:
        return <AtIcon {...componentProps} onClick={this.onClick}></AtIcon>;
      case InputNumber:
        return (
          <AtInputNumber
            {...componentProps}
            onClick={this.onClick}
          ></AtInputNumber>
        );
      case Input:
        return <AtInput {...componentProps} onClick={this.onClick}></AtInput>;
      case ListItem:
        return (
          <AtListItem {...componentProps} onClick={this.onClick}></AtListItem>
        );
      case List:
        return <AtList {...componentProps} onClick={this.onClick}></AtList>;
      case Modal:
        return <AtModal {...componentProps} onClick={this.onClick}></AtModal>;
      case NavBar:
        return <AtNavBar {...componentProps} onClick={this.onClick}></AtNavBar>;
      case Noticebar:
        return (
          <AtNoticebar {...componentProps} onClick={this.onClick}></AtNoticebar>
        );
      case Pagination:
        return (
          <AtPagination
            {...componentProps}
            onClick={this.onClick}
          ></AtPagination>
        );
      case Progress:
        return (
          <AtProgress {...componentProps} onClick={this.onClick}></AtProgress>
        );
      case Radio:
        return <AtRadio {...componentProps} onClick={this.onClick}></AtRadio>;
      case Rate:
        return <AtRate {...componentProps} onClick={this.onClick}></AtRate>;
      case SegmentedControl:
        return (
          <AtSegmentedControl
            {...componentProps}
            onClick={this.onClick}
          ></AtSegmentedControl>
        );
      case Switch:
        return <AtSwitch {...componentProps} onClick={this.onClick}></AtSwitch>;
      case SearchBar:
        return (
          <AtSearchBar {...componentProps} onClick={this.onClick}></AtSearchBar>
        );
      case TabBar:
        return <AtTabBar {...componentProps} onClick={this.onClick}></AtTabBar>;
      case Tabs:
        return <AtTabs {...componentProps} onClick={this.onClick}></AtTabs>;
      case Tag:
        return <AtTag {...componentProps} onClick={this.onClick}></AtTag>;
      case Textarea:
        return (
          <AtTextarea {...componentProps} onClick={this.onClick}></AtTextarea>
        );
      case Timeline:
        return (
          <AtTimeline {...componentProps} onClick={this.onClick}></AtTimeline>
        );
      case Toast:
        return <AtToast {...componentProps} onClick={this.onClick}></AtToast>;
      case TabsPane:
        return (
          <AtTabsPane {...componentProps} onClick={this.onClick}></AtTabsPane>
        );
      case SwipeAction:
        return (
          <AtSwipeAction
            {...componentProps}
            onClick={this.onClick}
          ></AtSwipeAction>
        );
      case Accordion:
        return (
          <AtAccordion {...componentProps} onClick={this.onClick}></AtAccordion>
        );
      case LoadMore:
        return (
          <AtLoadMore {...componentProps} onClick={this.onClick}></AtLoadMore>
        );
      case Divider:
        return (
          <AtDivider {...componentProps} onClick={this.onClick}></AtDivider>
        );
      case Countdown:
        return (
          <AtCountdown {...componentProps} onClick={this.onClick}></AtCountdown>
        );
      case Steps:
        return <AtSteps {...componentProps} onClick={this.onClick}></AtSteps>;
      case Curtain:
        return (
          <AtCurtain {...componentProps} onClick={this.onClick}></AtCurtain>
        );
      case Slider:
        return <AtSlider {...componentProps} onClick={this.onClick}></AtSlider>;
      case Message:
        return (
          <AtMessage {...componentProps} onClick={this.onClick}></AtMessage>
        );
      case ImagePicker:
        return (
          <AtImagePicker
            {...componentProps}
            onClick={this.onClick}
          ></AtImagePicker>
        );
      case Indexes:
        return (
          <AtIndexes {...componentProps} onClick={this.onClick}></AtIndexes>
        );
      case Range:
        return <AtRange {...componentProps} onClick={this.onClick}></AtRange>;
      case FloatButton:
        return (
          <AtFloatButton
            {...componentProps}
            onClick={this.onClick}
          ></AtFloatButton>
        );
      case Calendar:
        return (
          <AtCalendar {...componentProps} onClick={this.onClick}></AtCalendar>
        );
    }
  }
}
