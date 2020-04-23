import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { IElementProps } from "../type";
import BaseSchemaComponent from "../BaseSchemaComponent";
import {
  ScrollView,
  View,
  Block,
  Swiper,
  SwiperItem,
  MovableView,
  MovableArea,
  CoverView,
  CoverImage,
  Icon,
  Text,
  RichText,
  Progress,
  Button,
  Checkbox,
  CheckboxGroup,
  Editor,
  Form,
  Input,
  Label,
  Picker,
  PickerView,
  PickerViewColumn,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Textarea,
  Image,
  Navigator,
  Camera,
  Canvas,
  OpenData,
  Video,
  Ad,
  Audio,
  FunctionalPageNavigator,
  LivePlayer,
  LivePusher,
  Map,
  WebView,
  OfficialAccount,
  NavigationBar,
  PageMeta
} from "@tarojs/components";
import { EnumComponentName } from "../../../const";

@observer
export default class SchemaTaroUI extends BaseSchemaComponent<
  IElementProps,
  any
> {
  onScrollToUpper = this.getEventTrigger("onScrollToUpper");
  onScrollToLower = this.getEventTrigger("onScrollToLower");
  onScroll = this.getEventTrigger("onScroll");
  onRefresherPulling = this.getEventTrigger("onRefresherPulling");
  onRefresherRefresh = this.getEventTrigger("onRefresherRefresh");
  onRefresherRestore = this.getEventTrigger("onRefresherRestore");
  onRefresherAbort = this.getEventTrigger("onRefresherAbort");
  onChange = this.getEventTrigger("onChange");
  onTransition = this.getEventTrigger("onTransition");
  onAnimationFinish = this.getEventTrigger("onAnimationFinish");
  onScale = this.getEventTrigger("onScale");
  onHTouchMove = this.getEventTrigger("onHTouchMove");
  onVTouchMove = this.getEventTrigger("onVTouchMove");
  onGetUserInfo = this.getEventTrigger("onGetUserInfo");
  onGetAuthorize = this.getEventTrigger("onGetAuthorize");
  onContact = this.getEventTrigger("onContact");
  onGetPhoneNumber = this.getEventTrigger("onGetPhoneNumber");
  onGetRealnameAuthInfo = this.getEventTrigger("onGetRealnameAuthInfo");
  onError = this.getEventTrigger("onError");
  onOpenSetting = this.getEventTrigger("onOpenSetting");
  onLaunchapp = this.getEventTrigger("onLaunchapp");
  onSubmit = this.getEventTrigger("onSubmit");
  onReset = this.getEventTrigger("onReset");
  onBlur = this.getEventTrigger("onBlur");
  onInput = this.getEventTrigger("onInput");
  onFocus = this.getEventTrigger("onFocus");
  onConfirm = this.getEventTrigger("onConfirm");
  onKeyboardHeightChange = this.getEventTrigger("onKeyboardHeightChange");
  onCancel = this.getEventTrigger("onCancel");
  onPickStart = this.getEventTrigger("onPickStart");
  onPickEnd = this.getEventTrigger("onPickEnd");
  onColumnChange = this.getEventTrigger("onColumnChange");
  onChanging = this.getEventTrigger("onChanging");
  onLineChange = this.getEventTrigger("onLineChange");
  onSuccess = this.getEventTrigger("onSuccess");
  onFail = this.getEventTrigger("onFail");
  onComplete = this.getEventTrigger("onComplete");
  onPlay = this.getEventTrigger("onPlay");
  onPause = this.getEventTrigger("onPause");
  onTimeUpdate = this.getEventTrigger("onTimeUpdate");
  onEnded = this.getEventTrigger("onEnded");
  onLoad = this.getEventTrigger("onLoad");
  imgProps = this.getEventTrigger("imgProps");
  onFullscreenChange = this.getEventTrigger("onFullscreenChange");
  onWaiting = this.getEventTrigger("onWaiting");
  onProgress = this.getEventTrigger("onProgress");
  onLoadedMetaData = this.getEventTrigger("onLoadedMetaData");
  onStop = this.getEventTrigger("onStop");
  onInitDone = this.getEventTrigger("onInitDone");
  onScanCode = this.getEventTrigger("onScanCode");
  onTap = this.getEventTrigger("onTap");
  onMarkerTap = this.getEventTrigger("onMarkerTap");
  onLabelTap = this.getEventTrigger("onLabelTap");
  onControlTap = this.getEventTrigger("onControlTap");
  onCalloutTap = this.getEventTrigger("onCalloutTap");
  onUpdated = this.getEventTrigger("onUpdated");
  onRegionChange = this.getEventTrigger("onRegionChange");
  onPoiTap = this.getEventTrigger("onPoiTap");
  onTouchStart = this.getEventTrigger("onTouchStart");
  onTouchMove = this.getEventTrigger("onTouchMove");
  onTouchEnd = this.getEventTrigger("onTouchEnd");
  onTouchCancel = this.getEventTrigger("onTouchCancel");
  onLongTap = this.getEventTrigger("onLongTap");
  onMessage = this.getEventTrigger("onMessage");
  onClose = this.getEventTrigger("onClose");
  render() {
    const { store, children } = this.props;
    const { component, componentProps: componentPropsObj } = store;
    const componentProps = toJS(componentPropsObj);
    switch (component) {
      case EnumComponentName.ScrollView:
        return (
          <ScrollView
            {...componentProps}
            onScrollToUpper={this.onScrollToUpper}
            onScrollToLower={this.onScrollToLower}
            onScroll={this.onScroll}
            onRefresherPulling={this.onRefresherPulling}
            onRefresherRefresh={this.onRefresherRefresh}
            onRefresherRestore={this.onRefresherRestore}
            onRefresherAbort={this.onRefresherAbort}
          >
            {children}
          </ScrollView>
        );
      case EnumComponentName.View:
        return (
          <View {...componentProps} onClick={this.onClick}>
            {children}
          </View>
        );
      case EnumComponentName.Block:
        return (
          <Block {...componentProps} onClick={this.onClick}>
            {children}
          </Block>
        );
      case EnumComponentName.Swiper:
        return (
          <Swiper
            {...componentProps}
            onChange={this.onChange}
            onTransition={this.onTransition}
            onAnimationFinish={this.onAnimationFinish}
          >
            {children}
          </Swiper>
        );
      case EnumComponentName.SwiperItem:
        return (
          <SwiperItem {...componentProps} onClick={this.onClick}>
            {children}
          </SwiperItem>
        );
      case EnumComponentName.MovableView:
        return (
          <MovableView {...componentProps} onClick={this.onClick}>
            {children}
          </MovableView>
        );
      case EnumComponentName.MovableArea:
        return (
          <MovableArea
            {...componentProps}
            onChange={this.onChange}
            onScale={this.onScale}
            onHTouchMove={this.onHTouchMove}
            onVTouchMove={this.onVTouchMove}
          >
            {children}
          </MovableArea>
        );
      case EnumComponentName.CoverView:
        return (
          <CoverView {...componentProps} onClick={this.onClick}>
            {children}
          </CoverView>
        );
      case EnumComponentName.CoverImage:
        return (
          <CoverImage {...componentProps} onClick={this.onClick}>
            {children}
          </CoverImage>
        );
      case EnumComponentName.Icon:
        return (
          <Icon {...componentProps} onClick={this.onClick}>
            {children}
          </Icon>
        );
      case EnumComponentName.Text:
        return (
          <Text {...componentProps} onClick={this.onClick}>
            {componentProps.text}
          </Text>
        );
      case EnumComponentName.RichText:
        return (
          <RichText {...componentProps} onClick={this.onClick}>
            {children}
          </RichText>
        );
      case EnumComponentName.Progress:
        return (
          <Progress {...componentProps} onClick={this.onClick}>
            {children}
          </Progress>
        );
      case EnumComponentName.Button:
        return (
          <Button
            {...componentProps}
            onGetUserInfo={this.onGetUserInfo}
            onGetAuthorize={this.onGetAuthorize}
            onContact={this.onContact}
            onGetPhoneNumber={this.onGetPhoneNumber}
            onGetRealnameAuthInfo={this.onGetRealnameAuthInfo}
            onError={this.onError}
            onOpenSetting={this.onOpenSetting}
            onLaunchapp={this.onLaunchapp}
          >
            {children}
          </Button>
        );
      case EnumComponentName.Checkbox:
        return (
          <Checkbox {...componentProps} onChange={this.onChange}>
            {children}
          </Checkbox>
        );
      case EnumComponentName.CheckboxGroup:
        return (
          <CheckboxGroup {...componentProps} onClick={this.onClick}>
            {children}
          </CheckboxGroup>
        );
      case EnumComponentName.Editor:
        return (
          <Editor {...componentProps} onClick={this.onClick}>
            {children}
          </Editor>
        );
      case EnumComponentName.Form:
        return (
          <Form
            {...componentProps}
            onSubmit={this.onSubmit}
            onReset={this.onReset}
          >
            {children}
          </Form>
        );
      case EnumComponentName.Input:
        return (
          <Input
            {...componentProps}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onConfirm={this.onConfirm}
            onKeyboardHeightChange={this.onKeyboardHeightChange}
          >
            {children}
          </Input>
        );
      case EnumComponentName.Label:
        return (
          <Label {...componentProps} onClick={this.onClick}>
            {children}
          </Label>
        );
      case EnumComponentName.Picker:
        return (
          <Picker
            {...componentProps}
            onCancel={this.onCancel}
            onChange={this.onChange}
            onColumnChange={this.onColumnChange}
          >
            {children}
          </Picker>
        );
      case EnumComponentName.PickerView:
        return (
          <PickerView
            {...componentProps}
            onChange={this.onChange}
            onPickStart={this.onPickStart}
            onPickEnd={this.onPickEnd}
          >
            {children}
          </PickerView>
        );
      case EnumComponentName.PickerViewColumn:
        return (
          <PickerViewColumn {...componentProps} onClick={this.onClick}>
            {children}
          </PickerViewColumn>
        );
      case EnumComponentName.Radio:
        return (
          <Radio {...componentProps} onClick={this.onClick}>
            {children}
          </Radio>
        );
      case EnumComponentName.RadioGroup:
        return (
          <RadioGroup {...componentProps} onClick={this.onClick}>
            {children}
          </RadioGroup>
        );
      case EnumComponentName.Slider:
        return (
          <Slider
            {...componentProps}
            onChange={this.onChange}
            onChanging={this.onChanging}
          >
            {children}
          </Slider>
        );
      case EnumComponentName.Switch:
        return (
          <Switch {...componentProps} onChange={this.onChange}>
            {children}
          </Switch>
        );
      case EnumComponentName.Textarea:
        return (
          <Textarea
            {...componentProps}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onLineChange={this.onLineChange}
            onInput={this.onInput}
            onConfirm={this.onConfirm}
            onKeyboardHeightChange={this.onKeyboardHeightChange}
          >
            {children}
          </Textarea>
        );
      case EnumComponentName.Image:
        return (
          <Image
            {...componentProps}
            onError={this.onError}
            onLoad={this.onLoad}
            imgProps={this.imgProps}
          >
            {children}
          </Image>
        );
      case EnumComponentName.Navigator:
        return (
          <Navigator
            {...componentProps}
            onSuccess={this.onSuccess}
            onFail={this.onFail}
            onComplete={this.onComplete}
          >
            {children}
          </Navigator>
        );
      case EnumComponentName.Camera:
        return (
          <Camera
            {...componentProps}
            onStop={this.onStop}
            onError={this.onError}
            onInitDone={this.onInitDone}
            onScanCode={this.onScanCode}
          >
            {children}
          </Camera>
        );
      case EnumComponentName.Canvas:
        return (
          <Canvas
            {...componentProps}
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}
            onLongTap={this.onLongTap}
            onError={this.onError}
          >
            {children}
          </Canvas>
        );
      case EnumComponentName.OpenData:
        return (
          <OpenData {...componentProps} onError={this.onError}>
            {children}
          </OpenData>
        );
      case EnumComponentName.Video:
        return (
          <Video
            {...componentProps}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={this.onEnded}
            onTimeUpdate={this.onTimeUpdate}
            onFullscreenChange={this.onFullscreenChange}
            onWaiting={this.onWaiting}
            onError={this.onError}
            onProgress={this.onProgress}
            onLoadedMetaData={this.onLoadedMetaData}
          >
            {children}
          </Video>
        );
      case EnumComponentName.Ad:
        return (
          <Ad
            {...componentProps}
            onLoad={this.onLoad}
            onError={this.onError}
            onClose={this.onClose}
          >
            {children}
          </Ad>
        );
      case EnumComponentName.Audio:
        return (
          <Audio
            {...componentProps}
            onError={this.onError}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onTimeUpdate={this.onTimeUpdate}
            onEnded={this.onEnded}
          >
            {children}
          </Audio>
        );
      case EnumComponentName.FunctionalPageNavigator:
        return (
          <FunctionalPageNavigator {...componentProps} onClick={this.onClick}>
            {children}
          </FunctionalPageNavigator>
        );
      case EnumComponentName.LivePlayer:
        return (
          <LivePlayer {...componentProps} onClick={this.onClick}>
            {children}
          </LivePlayer>
        );
      case EnumComponentName.LivePusher:
        return (
          <LivePusher {...componentProps} onClick={this.onClick}>
            {children}
          </LivePusher>
        );
      case EnumComponentName.Map:
        return (
          <Map
            {...componentProps}
            onTap={this.onTap}
            onMarkerTap={this.onMarkerTap}
            onLabelTap={this.onLabelTap}
            onControlTap={this.onControlTap}
            onCalloutTap={this.onCalloutTap}
            onUpdated={this.onUpdated}
            onRegionChange={this.onRegionChange}
            onPoiTap={this.onPoiTap}
          >
            {children}
          </Map>
        );
      case EnumComponentName.WebView:
        return (
          <WebView
            {...componentProps}
            onMessage={this.onMessage}
            onLoad={this.onLoad}
            onError={this.onError}
          >
            {children}
          </WebView>
        );
      case EnumComponentName.OfficialAccount:
        return (
          <OfficialAccount
            {...componentProps}
            onLoad={this.onLoad}
            onError={this.onError}
          >
            {children}
          </OfficialAccount>
        );
      case EnumComponentName.NavigationBar:
        return (
          <NavigationBar {...componentProps} onClick={this.onClick}>
            {children}
          </NavigationBar>
        );
      case EnumComponentName.PageMeta:
        return (
          <PageMeta {...componentProps} onClick={this.onClick}>
            {children}
          </PageMeta>
        );
      default:
        return null;
    }
  }
}
