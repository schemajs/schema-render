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
export default class SchemaButton extends BaseSchemaComponent<
  IElementProps,
  any
> {
  render() {
    const { store } = this.props;
    const { component, componentProps } = store;
    switch (component) {
      case ActionSheet:
        return <AtActionSheet {...componentProps}></AtActionSheet>;
      case ActionSheetItem:
        return <AtActionSheetItem {...componentProps}></AtActionSheetItem>;
      case ActivityIndicator:
        return <AtActivityIndicator {...componentProps}></AtActivityIndicator>;
      case Avatar:
        return <AtAvatar {...componentProps}></AtAvatar>;
      case Badge:
        return <AtBadge {...componentProps}></AtBadge>;
      case Button:
        return <AtButton {...componentProps}></AtButton>;
      case Card:
        return <AtCard {...componentProps}></AtCard>;
      case Checkbox:
        return <AtCheckbox {...componentProps}></AtCheckbox>;
      case Drawer:
        return <AtDrawer {...componentProps}></AtDrawer>;
      case Fab:
        return <AtFab {...componentProps}></AtFab>;
      case FloatLayout:
        return <AtFloatLayout {...componentProps}></AtFloatLayout>;
      case Form:
        return <AtForm {...componentProps}></AtForm>;
      case Grid:
        return <AtGrid {...componentProps}></AtGrid>;
      case Icon:
        return <AtIcon {...componentProps}></AtIcon>;
      case InputNumber:
        return <AtInputNumber {...componentProps}></AtInputNumber>;
      case Input:
        return <AtInput {...componentProps}></AtInput>;
      case ListItem:
        return <AtListItem {...componentProps}></AtListItem>;
      case List:
        return <AtList {...componentProps}></AtList>;
      case Modal:
        return <AtModal {...componentProps}></AtModal>;
      case NavBar:
        return <AtNavBar {...componentProps}></AtNavBar>;
      case Noticebar:
        return <AtNoticebar {...componentProps}></AtNoticebar>;
      case Pagination:
        return <AtPagination {...componentProps}></AtPagination>;
      case Progress:
        return <AtProgress {...componentProps}></AtProgress>;
      case Radio:
        return <AtRadio {...componentProps}></AtRadio>;
      case Rate:
        return <AtRate {...componentProps}></AtRate>;
      case SegmentedControl:
        return <AtSegmentedControl {...componentProps}></AtSegmentedControl>;
      case Switch:
        return <AtSwitch {...componentProps}></AtSwitch>;
      case SearchBar:
        return <AtSearchBar {...componentProps}></AtSearchBar>;
      case TabBar:
        return <AtTabBar {...componentProps}></AtTabBar>;
      case Tabs:
        return <AtTabs {...componentProps}></AtTabs>;
      case Tag:
        return <AtTag {...componentProps}></AtTag>;
      case Textarea:
        return <AtTextarea {...componentProps}></AtTextarea>;
      case Timeline:
        return <AtTimeline {...componentProps}></AtTimeline>;
      case Toast:
        return <AtToast {...componentProps}></AtToast>;
      case TabsPane:
        return <AtTabsPane {...componentProps}></AtTabsPane>;
      case SwipeAction:
        return <AtSwipeAction {...componentProps}></AtSwipeAction>;
      case Accordion:
        return <AtAccordion {...componentProps}></AtAccordion>;
      case LoadMore:
        return <AtLoadMore {...componentProps}></AtLoadMore>;
      case Divider:
        return <AtDivider {...componentProps}></AtDivider>;
      case Countdown:
        return <AtCountdown {...componentProps}></AtCountdown>;
      case Steps:
        return <AtSteps {...componentProps}></AtSteps>;
      case Curtain:
        return <AtCurtain {...componentProps}></AtCurtain>;
      case Slider:
        return <AtSlider {...componentProps}></AtSlider>;
      case Message:
        return <AtMessage {...componentProps}></AtMessage>;
      case ImagePicker:
        return <AtImagePicker {...componentProps}></AtImagePicker>;
      case Indexes:
        return <AtIndexes {...componentProps}></AtIndexes>;
      case Range:
        return <AtRange {...componentProps}></AtRange>;
      case FloatButton:
        return <AtFloatButton {...componentProps}></AtFloatButton>;
      case Calendar:
        return <AtCalendar {...componentProps}></AtCalendar>;
    }
  }
}
