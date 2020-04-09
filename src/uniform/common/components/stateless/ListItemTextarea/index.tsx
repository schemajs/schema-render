import Taro from '@tarojs/taro'
// comp
import BaseBusinessComponent from '../../BaseComponent'
import { AtTextarea } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import ListItemWithModal, {
  ListItemWithPopUpPropTypes,
} from '../ListItemWithModal'
// scss
import Style from './style.module.scss'
// util
import { showErrorToast } from '@/main/common/utils/toast'
interface IListItemTextareaProps extends ListItemWithPopUpPropTypes {
  onChange: () => void
  error: boolean
  isValid: boolean
  errMessage: string
  disabledOpened: boolean
  disabled: boolean
  onCancel: () => void
  onClick: () => void
  onConfirm: () => void
  beforeConfirmHideModal: (parma?: any) => Promise<any>
  afterConfirmHideModal: (parma?: any) => Promise<any>
  beforeCancelHideModal: (parma?: any) => Promise<any>
  afterCancelHideModal: (parma?: any) => Promise<any>
  textareaMaxLength: string
  textareaPlaceholder: string
  textareaPlaceholderStyle: string
  textareaPlaceholderClass: string
  textareaDisabled: boolean
  textareaAutoFocus: true
  textareaCount: boolean
  textareaFixed: boolean
  textareaOverflowForbidden: boolean
  textareaHeight: number
  textareaValue: string
  note?: string
}

export default class ListItemTextarea extends BaseBusinessComponent<IListItemTextareaProps, any> {
  static defaultProps = {
    extraText: '',
    hasBorder: true,
    disabled: false,
    disabledOpened: false,
    title: '',
    thumb: '',
    arrow: 'right',
    note: '',
    className: '',
    modalTitle: '',
    closeOnClickOverlay: false,
    keepOriginExtraColor: false,
    onClick: () => {},
    onClose: () => {},
    onConfirm: () => {},
    onCancel: () => {},
    onChange: () => {},
    beforeConfirmHideModal: async () => {},
    afterConfirmHideModal: async () => {},
    beforeCancelHideModal: async () => {},
    afterCancelHideModal: async () => {},
    errMessage: '',
    isValid: true,
    textareaMaxLength: '200',
    textareaPlaceholder: '',
    textareaPlaceholderStyle: '',
    textareaPlaceholderClass: '',
    textareaDisabled: false,
    textareaAutoFocus: false,
    textareaCount: true,
    textareaFixed: false,
    textareaOverflowForbidden: true,
    textareaHeight: 100,
    textareaValue: '',
  }

  state = {
    isOpened: false,
  }

  onClick = () => {
    let { onClick, disabledOpened } = this.props

    onClick && onClick()

    if (!disabledOpened) {
      this.setState({
        isOpened: true,
      })
    }
  }

  onCancel = async () => {
    let { onCancel, beforeCancelHideModal, afterCancelHideModal } = this.props
    beforeCancelHideModal && (await beforeCancelHideModal())
    this.setState({
      isOpened: false,
    })
    afterCancelHideModal && (await afterCancelHideModal())
    onCancel && onCancel()
  }

  onConfirm = async () => {
    let {
      onConfirm,
      isValid,
      textareaValue,
      beforeConfirmHideModal,
      afterConfirmHideModal,
      errMessage,
    } = this.props
    if (!isValid) {
      showErrorToast({
        title: errMessage,
      })
      return
    }
    try {
      beforeConfirmHideModal && (await beforeConfirmHideModal(textareaValue))
      this.setState({
        isOpened: false,
      })
      afterConfirmHideModal && (await afterConfirmHideModal(textareaValue))
      onConfirm && onConfirm()
    } catch (e) {}
  }

  render() {
    const {
      extraText,
      hasBorder,
      disabled,
      title,
      thumb,
      arrow,
      iconInfo,
      className,
      modalTitle,
      closeOnClickOverlay,
      onClose,
      onChange,
      keepOriginExtraColor,
      error,
      errMessage,
      textareaMaxLength,
      textareaPlaceholder,
      textareaPlaceholderStyle,
      textareaPlaceholderClass,
      textareaDisabled,
      textareaAutoFocus,
      textareaCount,
      textareaFixed,
      textareaOverflowForbidden,
      textareaHeight,
      textareaValue,
      note,
    } = this.props

    let { isOpened } = this.state

    return (
      <View>
        <ListItemWithModal
          extraText={extraText}
          onClick={this.onClick}
          hasBorder={hasBorder}
          disabled={disabled}
          title={title}
          thumb={thumb}
          arrow={arrow}
          iconInfo={iconInfo}
          className={className}
          isOpened={isOpened}
          modalTitle={modalTitle}
          closeOnClickOverlay={closeOnClickOverlay}
          onClose={onClose}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
          keepOriginExtraColor={keepOriginExtraColor}
          note={note}
        >
          <AtTextarea
            onChange={onChange}
            value={textareaValue as string}
            maxLength={textareaMaxLength}
            placeholder={textareaPlaceholder}
            placeholderStyle={textareaPlaceholderStyle}
            placeholderClass={textareaPlaceholderClass}
            disabled={textareaDisabled}
            autoFocus={textareaAutoFocus}
            count={textareaCount}
            fixed={textareaFixed}
            textOverflowForbidden={textareaOverflowForbidden}
            height={textareaHeight}
          />
          {error && (
            <View>
              <Text className={Style.textarea_error}>* {errMessage}</Text>
            </View>
          )}
        </ListItemWithModal>
      </View>
    )
  }
}
