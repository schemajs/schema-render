import Taro, { getLocation } from '@tarojs/taro'
// comp
import BaseBusinessComponent,{BaseComponentPropsType} from '../../BaseComponent'
import { AtInput } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import ListItemWithModal, {
  ListItemWithPopUpPropTypes,
} from '../ListItemWithModal'
// scss
import Style from './style.module.scss'
// util
import { showErrorToast, showErrorToastByError } from '../../../utils/toast'
import lget from 'lodash/get'
import { fetchAddressDetailApi } from '@/main/common/api/location'

interface IListItemInputProps extends ListItemWithPopUpPropTypes {
  onChange: (value: any) => void
  placeholder: string
  error: boolean
  isValid: boolean
  errMessage: string
  value: string | number
  name: string
  type: string
  disabledOpen: boolean
  disabled: boolean
  onCancel: () => void
  onClick: (event: any) => void
  onConfirm: () => void
  beforeConfirmHideModal: (parma?: any) => Promise<any>
  afterConfirmHideModal: (parma?: any) => Promise<any>
  beforeCancelHideModal: (parma?: any) => Promise<any>
  afterCancelHideModal: (parma?: any) => Promise<any>
  inputValue: string
  // 是否是地址输入框
  address?: boolean
}

export default class ListItemInput extends BaseBusinessComponent<IListItemInputProps, any> {
  static defaultProps = {
    extraText: '',
    hasBorder: true,
    disabled: false,
    disabledOpen: false,
    title: '',
    thumb: '',
    arrow: 'right',
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
    placeholder: '',
    errMessage: '',
    error: false,
    isValid: true,
    name: 'value',
    type: 'text',
    address: false,
  }

  state = {
    isOpened: false,
  }

  handleGetLocation = async () => {
    const { onChange } = this.props
    onChange('正在定位...')
    try {
      const location = await getLocation()
      const { latitude, longitude } = location

      const res = await fetchAddressDetailApi({
        latitude: latitude,
        longitude: longitude,
      })
      onChange(lget(res, 'data.regeocode.formatted_address'))
    } catch (e) {
      showErrorToastByError({
        err: e,
      })
    }
  }

  onClick = (event) => {
    let { onClick, disabledOpen } = this.props

    if (!disabledOpen) {
      this.setState({
        isOpened: true,
      })
    }
    onClick && onClick(event)
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
      value,
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
      beforeConfirmHideModal && (await beforeConfirmHideModal(value))
      this.setState({
        isOpened: false,
      })
      afterConfirmHideModal && (await afterConfirmHideModal(value))
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
      keepOriginExtraColor,
      onChange,
      placeholder,
      error,
      errMessage,
      inputValue,
      name,
      type,
      note,
      address,
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
          <AtInput
            type={type}
            name={name}
            onChange={onChange}
            needLeft={false}
            value={inputValue}
            placeholder={placeholder}
            clear={true}
            error={error}
          >
            {address && (
              <View className="at-icon at-icon-map-pin" onClick={this.handleGetLocation} />
            )}
          </AtInput>
          {error && (
            <View>
              <Text className={Style.input_error}>* {errMessage}</Text>
            </View>
          )}
        </ListItemWithModal>
      </View>
    )
  }
}
