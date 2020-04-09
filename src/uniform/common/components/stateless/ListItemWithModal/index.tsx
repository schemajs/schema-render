import { Omit } from '@/main/common/utils/tpUtils'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import ListItemCustomTitleAndExtra, {
  ListItemCustomTitleAndExtraPropTypes,
} from '../ListItem'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton } from 'taro-ui'
import { AtModalProps } from 'taro-ui/@types/modal'
// import ModalActions from '@/sub/p2/settings/common/components/ModalActions'
import { observer } from '@tarojs/mobx'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { NORMAL_BTN_THEME, NORMAL_SECONDARY_BTN_THEME } from '@/main/common/constants/color'

export type ListItemWithPopUpPropTypes = Omit<
  ListItemCustomTitleAndExtraPropTypes,
  'title' | 'className'
> &
  Omit<AtModalProps, 'title' | 'className' | 'onCancel' | 'onConfirm'> & {
    title: string
    modalTitle: string
    className?: string
    // noActions?: boolean
    renderFooter?: any
    useRenderModal?: boolean
    renderModal?: JSX.Element
    onCancel?: CommonEventFunction
    onConfirm?: CommonEventFunction
    keepOriginExtraColor?: boolean // 是否保留跟 ListItem 一样的 extra 文字颜色
  }

@observer
export default class ListItemWithModal extends Taro.Component<ListItemWithPopUpPropTypes> {
  static options = {
    addGlobalClass: true,
  }

  static defaultProps = {
    extraText: '',
    hasBorder: true,
    disabled: false,
    title: '',
    thumb: '',
    arrow: 'right',
    className: '',
    isOpened: false,
    modalTitle: '',
    closeOnClickOverlay: false,
    useRenderModal: false,
    keepOriginExtraColor: false,
    note: '',
    longExtra: true,
  }

  render() {
    const {
      longExtra,
      longTitle,
      extraText,
      onClick,
      hasBorder,
      disabled,
      title,
      thumb,
      arrow,
      iconInfo,
      className,
      isOpened,
      modalTitle,
      closeOnClickOverlay,
      onClose,
      onConfirm,
      onCancel,
      useRenderModal,
      keepOriginExtraColor,
      note,
      useRenderTitle,
      useRenderExtra,
      useRenderExtraText,
      extraTextStyle,
      customStyles,
    } = this.props

    const defaultModalView = (
      <AtModal isOpened={isOpened} closeOnClickOverlay={closeOnClickOverlay} onClose={onClose}>
        <AtModalHeader>{modalTitle}</AtModalHeader>
        <AtModalContent>{isOpened ? this.props.children : null}</AtModalContent>
        <AtModalAction>
          <AtButton
            type="secondary"
            onClick={onCancel}
            className="custom_modal_btn"
            customStyle={NORMAL_SECONDARY_BTN_THEME}
          >
            取消
          </AtButton>
          <AtButton
            type="primary"
            onClick={onConfirm}
            className="custom_modal_btn"
            customStyle={NORMAL_BTN_THEME}
          >
            确定
          </AtButton>
        </AtModalAction>
      </AtModal>
    )
    return (
      <View className={'list-item_with--modal' + ' ' + className}>
        <ListItemCustomTitleAndExtra
          useRenderTitle={useRenderTitle}
          renderTitle={this.props.renderTitle}
          useRenderExtra={useRenderExtra}
          renderExtra={this.props.renderExtra}
          useRenderExtraText={useRenderExtraText}
          renderExtraText={this.props.renderExtraText}
          note={note}
          longExtra={longExtra}
          longTitle={longTitle}
          iconInfo={iconInfo}
          thumb={thumb}
          disabled={disabled}
          title={title}
          extraText={extraText}
          arrow={arrow}
          hasBorder={hasBorder}
          onClick={onClick}
          keepOriginExtraColor={keepOriginExtraColor}
          extraTextStyle={extraTextStyle}
          customStyles={customStyles}
        />
        {useRenderModal ? this.props.renderModal : defaultModalView}
      </View>
    )
  }
}
