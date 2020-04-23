export const pathPrefix = "path";

export enum EnumComponentName {
  //taro
  ScrollView = "ScrollView",
  View = "View",
  Block = "Block",
  Swiper = "Swiper",
  SwiperItem = "SwiperItem",
  MovableView = "MovableView",
  MovableArea = "MovableArea",
  CoverView = "CoverView",
  CoverImage = "CoverImage",
  Icon = "Icon",
  Text = "Text",
  RichText = "RichText",
  Progress = "Progress",
  Button = "Button",
  Checkbox = "Checkbox",
  CheckboxGroup = "CheckboxGroup",
  Editor = "Editor",
  Form = "Form",
  Input = "Input",
  Label = "Label",
  Picker = "Picker",
  PickerView = "PickerView",
  PickerViewColumn = "PickerViewColumn",
  Radio = "Radio",
  RadioGroup = "RadioGroup",
  Slider = "Slider",
  Switch = "Switch",
  Textarea = "Textarea",
  Image = "Image",
  Navigator = "Navigator",
  Camera = "Camera",
  Canvas = "Canvas",
  OpenData = "OpenData",
  Video = "Video",
  Ad = "Ad",
  Audio = "Audio",
  FunctionalPageNavigator = "FunctionalPageNavigator",
  LivePlayer = "LivePlayer",
  LivePusher = "LivePusher",
  Map = "Map",
  WebView = "WebView",
  OfficialAccount = "OfficialAccount",
  NavigationBar = "NavigationBar",
  PageMeta = "PageMeta",
  // taro-ui
  AtActionSheet = "AtActionSheet",
  AtActionSheetItem = "AtActionSheetItem",
  AtActivityIndicator = "AtActivityIndicator",
  AtAvatar = "AtAvatar",
  AtBadge = "AtBadge",
  AtButton = "AtButton",
  AtCard = "AtCard",
  AtCheckbox = "AtCheckbox",
  AtDrawer = "AtDrawer",
  AtFab = "AtFab",
  AtFloatLayout = "AtFloatLayout",
  AtForm = "AtForm",
  AtGrid = "AtGrid",
  AtIcon = "AtIcon",
  AtInputNumber = "AtInputNumber",
  AtInput = "AtInput",
  AtListItem = "AtListItem",
  AtList = "AtList",
  AtModal = "AtModal",
  AtNavBar = "AtNavBar",
  AtNoticebar = "AtNoticebar",
  AtPagination = "AtPagination",
  AtProgress = "AtProgress",
  AtRadio = "AtRadio",
  AtRate = "AtRate",
  AtSegmentedControl = "AtSegmentedControl",
  AtSwitch = "AtSwitch",
  AtSearchBar = "AtSearchBar",
  AtTabBar = "AtTabBar",
  AtTabs = "AtTabs",
  AtTag = "AtTag",
  AtTextarea = "AtTextarea",
  AtTimeline = "AtTimeline",
  AtToast = "AtToast",
  AtTabsPane = "AtTabsPane",
  AtSwipeAction = "AtSwipeAction",
  AtAccordion = "AtAccordion",
  AtLoadMore = "AtLoadMore",
  AtDivider = "AtDivider",
  AtCountdown = "AtCountdown",
  AtSteps = "AtSteps",
  AtCurtain = "AtCurtain",
  AtSlider = "AtSlider",
  AtMessage = "AtMessage",
  AtImagePicker = "AtImagePicker",
  AtIndexes = "AtIndexes",
  AtRange = "AtRange",
  AtFloatButton = "AtFloatButton",
  AtCalendar = "AtCalendar",
  AtListItemText = "AtListItemText",
  AtListItemInput = "AtListItemInput",
  AtListItemTextarea = "AtListItemTextarea",
  AtListItemSwitch = "AtListItemSwitch",
  AtListItemRadio = "AtListItemRadio",
  AtListItemCheckbox = "AtListItemCheckbox",
  AtListItemFile = "AtListItemFile",
  AtListItemFiles = "AtListItemFiles",
  AtAtInput = "AtAtInput",
  AtAtTextarea = "AtAtTextarea"
}

export function supportComponent(name: string): boolean {
  return !!EnumComponentName[name]
}

// const ComponentNames = Object.values(EnumComponentName);

export const TaroComponentNames = [
  "ScrollView",
  "View",
  "Block",
  "Swiper",
  "SwiperItem",
  "MovableView",
  "MovableArea",
  "CoverView",
  "CoverImage",
  "Icon",
  "Text",
  "RichText",
  "Progress",
  "Button",
  "Checkbox",
  "CheckboxGroup",
  "Editor",
  "Form",
  "Input",
  "Label",
  "Picker",
  "PickerView",
  "PickerViewColumn",
  "Radio",
  "RadioGroup",
  "Slider",
  "Switch",
  "Textarea",
  "Image",
  "Navigator",
  "Camera",
  "Canvas",
  "OpenData",
  "Video",
  "Ad",
  "Audio",
  "FunctionalPageNavigator",
  "LivePlayer",
  "LivePusher",
  "Map",
  "WebView",
  "OfficialAccount",
  "NavigationBar",
  "PageMeta",
]
export const TaroUIComponentNames = [
  "AtActionSheet",
  "AtActionSheetItem",
  "AtActivityIndicator",
  "AtAvatar",
  "AtBadge",
  "AtButton",
  "AtCard",
  "AtCheckbox",
  "AtDrawer",
  "AtFab",
  "AtFloatLayout",
  "AtForm",
  "AtGrid",
  "AtIcon",
  "AtInputNumber",
  "AtInput",
  "AtListItem",
  "AtList",
  "AtModal",
  "AtNavBar",
  "AtNoticebar",
  "AtPagination",
  "AtProgress",
  "AtRadio",
  "AtRate",
  "AtSegmentedControl",
  "AtSwitch",
  "AtSearchBar",
  "AtTabBar",
  "AtTabs",
  "AtTag",
  "AtTextarea",
  "AtTimeline",
  "AtToast",
  "AtTabsPane",
  "AtSwipeAction",
  "AtAccordion",
  "AtLoadMore",
  "AtDivider",
  "AtCountdown",
  "AtSteps",
  "AtCurtain",
  "AtSlider",
  "AtMessage",
  "AtImagePicker",
  "AtIndexes",
  "AtRange",
  "AtFloatButton",
  "AtCalendar"
];

export function isTaro(name: string): boolean {
  return TaroComponentNames.includes(name);
}

export function isTaroUI(name: string): boolean {
  return TaroUIComponentNames.includes(name);
}
