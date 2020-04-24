export const pathPrefix = "pathPrefix";

export const TaroComponentNames = {
  //taro
  ScrollView: "ScrollView",
  View: "View",
  Block: "Block",
  Swiper: "Swiper",
  SwiperItem: "SwiperItem",
  MovableView: "MovableView",
  MovableArea: "MovableArea",
  CoverView: "CoverView",
  CoverImage: "CoverImage",
  Icon: "Icon",
  Text: "Text",
  RichText: "RichText",
  Progress: "Progress",
  Button: "Button",
  Checkbox: "Checkbox",
  CheckboxGroup: "CheckboxGroup",
  Editor: "Editor",
  Form: "Form",
  Input: "Input",
  Label: "Label",
  Picker: "Picker",
  PickerView: "PickerView",
  PickerViewColumn: "PickerViewColumn",
  Radio: "Radio",
  RadioGroup: "RadioGroup",
  Slider: "Slider",
  Switch: "Switch",
  Textarea: "Textarea",
  Image: "Image",
  Navigator: "Navigator",
  Camera: "Camera",
  Canvas: "Canvas",
  OpenData: "OpenData",
  Video: "Video",
  Ad: "Ad",
  Audio: "Audio",
  FunctionalPageNavigator: "FunctionalPageNavigator",
  LivePlayer: "LivePlayer",
  LivePusher: "LivePusher",
  Map: "Map",
  WebView: "WebView",
  OfficialAccount: "OfficialAccount",
  NavigationBar: "NavigationBar",
  PageMeta: "PageMeta",
}
export const TaroUIComponentNames = {
  // taro-ui
  AtActionSheet: "AtActionSheet",
  AtActionSheetItem: "AtActionSheetItem",
  AtActivityIndicator: "AtActivityIndicator",
  AtAvatar: "AtAvatar",
  AtBadge: "AtBadge",
  AtButton: "AtButton",
  AtCard: "AtCard",
  AtCheckbox: "AtCheckbox",
  AtDrawer: "AtDrawer",
  AtFab: "AtFab",
  AtFloatLayout: "AtFloatLayout",
  AtForm: "AtForm",
  AtGrid: "AtGrid",
  AtIcon: "AtIcon",
  AtInputNumber: "AtInputNumber",
  AtInput: "AtInput",
  AtListItem: "AtListItem",
  AtList: "AtList",
  AtModal: "AtModal",
  AtNavBar: "AtNavBar",
  AtNoticebar: "AtNoticebar",
  AtPagination: "AtPagination",
  AtProgress: "AtProgress",
  AtRadio: "AtRadio",
  AtRate: "AtRate",
  AtSegmentedControl: "AtSegmentedControl",
  AtSwitch: "AtSwitch",
  AtSearchBar: "AtSearchBar",
  AtTabBar: "AtTabBar",
  AtTabs: "AtTabs",
  AtTag: "AtTag",
  AtTextarea: "AtTextarea",
  AtTimeline: "AtTimeline",
  AtToast: "AtToast",
  AtTabsPane: "AtTabsPane",
  AtSwipeAction: "AtSwipeAction",
  AtAccordion: "AtAccordion",
  AtLoadMore: "AtLoadMore",
  AtDivider: "AtDivider",
  AtCountdown: "AtCountdown",
  AtSteps: "AtSteps",
  AtCurtain: "AtCurtain",
  AtSlider: "AtSlider",
  AtMessage: "AtMessage",
  AtImagePicker: "AtImagePicker",
  AtIndexes: "AtIndexes",
  AtRange: "AtRange",
  AtFloatButton: "AtFloatButton",
  AtCalendar: "AtCalendar",
  AtListItemText: "AtListItemText",
  AtListItemInput: "AtListItemInput",
  AtListItemTextarea: "AtListItemTextarea",
  AtListItemSwitch: "AtListItemSwitch",
  AtListItemRadio: "AtListItemRadio",
  AtListItemCheckbox: "AtListItemCheckbox",
  AtListItemFile: "AtListItemFile",
  AtListItemFiles: "AtListItemFiles",
  AtAtInput: "AtAtInput",
  AtAtTextarea: "AtAtTextarea"
}

// export const AllComponentNames = {
//   ...TaroComponentNames,
//   ...TaroUIComponentNames,
// }

// export function supportComponent(name: string): boolean {
//   return !!AllComponentNames[name]
// }

export function isTaro(name: string): boolean {
  return !!TaroComponentNames[name]
}

export function isTaroUI(name: string): boolean {
  return !!TaroUIComponentNames[name]
}
