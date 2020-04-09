import Taro from '@tarojs/taro'

// comp
import BaseBusinessComponent,{BaseComponentPropsType} from '../../BaseComponent'
import ListItemWithPopUp from '../ListItemWithPopUp'
import { AtCheckbox, AtInput } from 'taro-ui'
import { Block, View } from '@tarojs/components'

// scss
import Style from './index.module.scss'

// util
import { toJS } from 'mobx'
import {isArray} from 'lodash'

interface IListItemCheckboxProps extends BaseComponentPropsType{
  extraText: string
  popTitle: string
  label: string
  selectedList: Array<any>
  arrow: 'right' | 'up' | 'down'
  onClick: () => void
  onClose: () => void
  onChange: (selectedList: Array<any>) => void
  onCancel: () => void
  options: Array<any>
  keepOriginExtraColor: boolean
  hasBorder?: boolean
  showOtherInput?: boolean
  otherValue: string
  otherTitle?: string
  changeOtherValue: Function

  limitType?: '==' | '>=' | '<=' // >= 至少  <= 最多  == 恰好
  limitValue?: number

  note?: string

  disabled?: boolean
}

interface IListItemCheckboxState {
  isOpened: boolean
}

export default class ListItemCheckbox extends BaseBusinessComponent<
  IListItemCheckboxProps,
  IListItemCheckboxState
> {
  static defaultProps = {
    extraText: '',
    popTitle: '',
    label: '',
    selectedList: [],
    arrow: 'right',
    onClick: () => {},
    onClose: () => {},
    onChange: () => {},
    options: [],
    keepOriginExtraColor: false,
    hasBorder: true,
    disabled: false,
  }

  state = {
    isOpened: false,
  }

  onClick = () => {
    let { onClick, disabled } = this.props
    this.setState({
      isOpened: true,
    })
    !disabled && onClick && onClick()
  }

  onCancel = () => {
    let { onCancel } = this.props
    this.setState({
      isOpened: false,
    })
    onCancel && onCancel()
  }

  handleOtherChange = (value) => {
    this.props.changeOtherValue(value)
  }

  handleChange = (selectedList: Array<any>) => {
    this.props.onChange(selectedList)
  }

  get _optionsData() {
    const { options, limitType, limitValue, selectedList } = this.props
    switch (limitType) {
      case '<=':
      case '==': {
        if (selectedList && isArray(selectedList) && selectedList.length == limitValue) {
          return options.map((item) => {
            return { ...item, disabled: !selectedList.includes(item.key) }
          })
        }
        return options
      }
      case '>=':
      default:
        return options
    }
  }

  get _note() {
    const { limitType, limitValue, note } = this.props
    switch (limitType) {
      case '<=': {
        return note + `最多选择${limitValue}项`
      }
      case '==': {
        return `必须选择${limitValue}项`
      }
      case '>=': {
        return `最少选择${limitValue}项`
      }
      default:
        return note
    }
  }

  render() {
    const {
      extraText,
      arrow,
      label,
      popTitle,
      selectedList,
      keepOriginExtraColor,
      hasBorder,
      showOtherInput = false,
      otherValue,
      otherTitle = '',
      disabled,
    } = this.props

    let { isOpened } = this.state
    const { _optionsData, _note } = this

    const optionsData = toJS(_optionsData)

    let selectedListData = toJS(selectedList)

    return (
      <Block>
        <ListItemWithPopUp
          disabled={disabled}
          hasBorder={hasBorder}
          isOpened={isOpened}
          popTitle={popTitle}
          label={label}
          note={_note}
          extraText={extraText}
          arrow={arrow}
          onClick={this.onClick}
          onClose={this.onCancel}
          keepOriginExtraColor={keepOriginExtraColor}
        >
          <View className={Style['checkbox-container']}>
            <AtCheckbox
              className={Style['at-custom-checkbox']}
              options={optionsData}
              selectedList={selectedListData}
              onChange={this.handleChange}
            />
          </View>
        </ListItemWithPopUp>
        {showOtherInput && (
          <AtInput
            disabled={disabled}
            name="other"
            type="text"
            placeholder={`请输入${otherTitle}`}
            value={otherValue}
            onChange={this.handleOtherChange}
          />
        )}
      </Block>
    )
  }
}
