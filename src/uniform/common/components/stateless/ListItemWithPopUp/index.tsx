import { Omit } from '@/main/common/utils/tpUtils'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import ListItemCustomTitleAndExtra, {
  ListItemCustomTitleAndExtraPropTypes,
} from '../ListItemCustomTitleAndExtra'
import { AtFloatLayout } from 'taro-ui'
import { AtFloatLayoutProps } from 'taro-ui/@types/float-layout'
import { CSSProperties } from 'react'

export type ListItemWithPopUpPropTypes = Omit<
  ListItemCustomTitleAndExtraPropTypes,
  'title' | 'className' | 'customStyle'
> &
  Omit<AtFloatLayoutProps, 'title' | 'className' | 'customStyle'> & {
    label: string
    popTitle: string
    classNameWrap?: string
    classNameItem?: string
    classNameLayout?: string
    customStyle?: {
      wrap?: CSSProperties
      item?: CSSProperties
      layOut?: CSSProperties
    }
    popHeight?: string
    disabledScroll?: boolean
  }

export default class ListItemWithPopUp extends Taro.Component<ListItemWithPopUpPropTypes> {

  static defaultProps = {
    extraText: '',
    hasBorder: true,
    disabled: false,
    label: '',
    thumb: '',
    arrow: 'right',
    classNameWrap: '',
    classNameItem: '',
    classNameLayout: '',
    isOpened: false,
    popTitle: '',
    scrollY: false,
    scrollX: false,
    scrollTop: false,
    scrollLeft: false,
    upperThreshold: false,
    lowerThreshold: false,
    scrollWithAnimation: false,
    customStyle: {
      wrap: {},
      item: {},
      layOut: {},
    },
    longExtra: true,
    longTitle: false,
    keepOriginExtraColor: false,
  }

  render() {
    const {
      extraText,
      onClick,
      hasBorder,
      disabled,
      label,
      thumb,
      arrow,
      iconInfo,
      classNameWrap,
      classNameItem,
      classNameLayout,
      isOpened,
      popTitle,
      scrollY,
      scrollX,
      scrollTop,
      scrollLeft,
      upperThreshold,
      lowerThreshold,
      scrollWithAnimation,
      customStyle = {},
      note,
      useRenderArrow,
      useRenderTitle,
      useRenderNote,
      customStyles,
      useRenderExtra,
      useRenderExtraText,
      extraTextStyle,
      useRenderCustomHeader,
      longExtra,
      longTitle,
      keepOriginExtraColor,
      popHeight,
      disabledScroll,
    } = this.props
    const { wrap = {}, item = {}, layOut = {} } = customStyle
    return (
      <View className={classNameWrap} style={wrap}>
        <ListItemCustomTitleAndExtra
          longExtra={longExtra}
          longTitle={longTitle}
          iconInfo={iconInfo}
          thumb={thumb}
          disabled={disabled}
          title={label}
          extraText={extraText}
          arrow={arrow}
          hasBorder={hasBorder}
          onClick={onClick}
          className={classNameItem}
          customStyle={item}
          useRenderArrow={useRenderArrow}
          renderArrow={this.props.renderArrow}
          useRenderTitle={useRenderTitle}
          renderTitle={this.props.renderTitle}
          note={note}
          useRenderNote={useRenderNote}
          renderNote={this.props.renderNote}
          customStyles={customStyles}
          useRenderExtra={useRenderExtra}
          renderExtra={this.props.renderExtra}
          useRenderExtraText={useRenderExtraText}
          renderExtraText={this.props.renderExtraText}
          extraTextStyle={extraTextStyle}
          keepOriginExtraColor={keepOriginExtraColor}
        />
        <AtFloatLayout
          disabledScroll={disabledScroll}
          height={popHeight}
          title={popTitle}
          isOpened={isOpened}
          scrollY={scrollY}
          scrollX={scrollX}
          scrollTop={scrollTop}
          scrollLeft={scrollLeft}
          upperThreshold={upperThreshold}
          lowerThreshold={lowerThreshold}
          scrollWithAnimation={scrollWithAnimation}
          onScroll={this.props.onScroll}
          onScrollToLower={this.props.onScrollToLower}
          onScrollToUpper={this.props.onScrollToUpper}
          onClose={this.props.onClose}
          className={`reset-padding--0  ${classNameLayout}`}
          customStyle={layOut}
          useRenderCustomHeader={useRenderCustomHeader}
          renderCustomHeader={this.props.renderCustomHeader}
        >
          {this.props.children}
        </AtFloatLayout>
      </View>
    )
  }
}
