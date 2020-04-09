import Taro from '@tarojs/taro'

import { Block, Picker } from '@tarojs/components'
import ListItemCustomTitleAndExtra, {
  ListItemCustomTitleAndExtraPropTypes,
} from '../ListItem'
import BaseLeapComponent from '../../business/base/BaseBusinessComponent'
import { AtInput } from 'taro-ui'

import {isArray} from 'lodash'

type P = { [key: string]: any }

export default class ListItemWithPicker extends BaseLeapComponent<
  ListItemCustomTitleAndExtraPropTypes & P,
  any
> {
  static defaultProps = {
    title: '',
    note: '',
    mode: 'selector',
    extraText: '',
    range: [],
    disabled: false,
    className: '',
    hasBorder: true,
    customStyles: {},
    onCancel: () => {},
    keepOriginExtraColor: false,
    onClick: () => {},
  }

  handleOtherChange = (value) => {
    this.props.changeOtherValue(value)
  }

  render() {
    const {
      title,
      mode,
      extraText,
      range,
      disabled,
      value,
      className,
      hasBorder,
      rangeKey,
      start,
      end,
      fields,
      customStyle,
      onCancel,
      keepOriginExtraColor,
      onClick,
      onChange,
      showOtherInput = false,
      otherValue,
      otherTitle,
      note,
    } = this.props
    const _extraText = extraText && isArray(extraText) ? extraText.join(',') : extraText

    return (
      // @ts-ignore
      <Block>
        <Picker
          disabled={disabled}
          mode={mode}
          range={range}
          rangeKey={rangeKey}
          onChange={onChange}
          onCancel={onCancel && onCancel}
          value={value}
          onColumnChange={this.props.onColumnChange}
          start={start}
          end={end}
          fields={fields}
        >
          <ListItemCustomTitleAndExtra
            onClick={onClick}
            keepOriginExtraColor={keepOriginExtraColor}
            longExtra={true}
            className={className}
            title={title}
            extraText={_extraText}
            hasBorder={hasBorder}
            arrow={disabled ? '' : 'right'}
            customStyle={customStyle}
            note={note}
          />
        </Picker>
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
