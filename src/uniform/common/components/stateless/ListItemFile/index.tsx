import Taro from '@tarojs/taro'

// comp
import { View, Video } from '@tarojs/components'
import { AtImagePicker, AtListItem } from 'taro-ui'
import BaseBusinessComponent from '@/main/common/components/business/base/BaseBusinessComponent'
import ListItemCustomTitleAndExtra from '../ListItemCustomTitleAndExtra'

// scss
import Style from './index.module.scss'

// util
import { toJS } from 'mobx'
import { showErrorToast, showErrorToastByError } from '@/main/common/utils/toast'
import { getIconNameByIconUrl } from '@leapcloud/mapp-shared/build/main/services/getter/icon'
import { uploadFiles, getFileUrl } from '@/main/common/services/request/fileUpload'
import lget from 'lodash/get'
import { observer } from '@tarojs/mobx'

interface IListItemFileProps {
  extraText: string
  arrow: 'right' | 'up' | 'down'
  title: string
  value: string | Array<any>
  placeholder: string
  isMore: boolean
  onClick: (arg: any) => void

  fileType?: 'image' | 'video'

  limitSize?: number

  note?: string

  disabled?: boolean
}

const videoType = ['avi', 'mp4', '3gp', 'mov']

@observer
export default class ListItemFile extends BaseBusinessComponent<IListItemFileProps, any> {
  static defaultProps = {
    extraText: '',
    arrow: 'right',
    title: '',
    value: '',
    placeholder: '',
    isMore: false,
    note: '',
    fileType: 'image',
    disabled: false,
  }

  get picValue() {
    const { isMore, value } = this.props
    const _value = (toJS(value) as Array<string>) || []

    if (_value && value.length && isMore) {
      return _value.map((item) => ({
        url: item,
      }))
    }
    return []
  }

  uploadFile = async (filePath) => {
    try {
      if (filePath) {
        const picFileName = getIconNameByIconUrl(filePath)
        const uploadFileRes = await uploadFiles([
          {
            url: getFileUrl(picFileName),
            filePath: filePath,
            name: picFileName,
          },
        ])
        let value = `https://${lget(uploadFileRes, '0.data.url')}`
        return value
      }
    } catch (e) {
      showErrorToast({
        title: e.message || JSON.stringify(e),
      })
    }
  }

  onChange = async (files, operationType) => {
    let { onClick } = this.props

    if (operationType == 'remove') {
      let data = [...files]
      onClick(data)
      return
    }

    if (!files.length) return
    let filePath = files.pop().url
    let res = await this.uploadFile(filePath)

    // 网速太慢的话 要取最新的value
    let { value } = this.props
    if (res) {
      let data = [
        ...value,
        {
          url: res,
        },
      ]
      onClick(data)
    }
  }

  onClick = async () => {
    try {
      let { onClick, fileType, limitSize } = this.props
      let filePath
      if (fileType === 'image') {
        const fileRes = await Taro.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
        })
        filePath = lget(fileRes, 'tempFilePaths.0')
      }
      if (fileType === 'video') {
        const fileRes = await Taro.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
        })
        if (limitSize) {
          const maxSize = limitSize * 1024 * 1024,
            fileSize = lget(fileRes, 'size')
          if (maxSize < fileSize) {
            showErrorToast({
              title: `请选择小于${limitSize}M的视频上传`,
            })
            return
          }
        }
        filePath = lget(fileRes, 'tempFilePath')
        // avi、mp4、3gp、mov
        const canUpload = videoType.some((type) => filePath.endsWith(type))
        if (!canUpload) {
          showErrorToast({
            title: `目前仅支持${videoType.join(',')}格式的视频`,
          })
          return
        }
      }

      let res = await this.uploadFile(filePath)
      if (res) onClick(res)
    } catch (e) {
      const errMsg = lget(e, 'errMsg')
      if (!errMsg.includes('cancel')) {
        showErrorToastByError({
          err: e,
        })
      }
    }
  }

  handleChangeImage = async (files: Array<any>, operationType: string, index?: number) => {
    const { value, onClick } = this.props
    let data = (toJS(value) as Array<any>) || []

    try {
      if (typeof index === 'number') {
        data.splice(index, 1)
        onClick(data)
        return
      }
      if (files && files.length) {
        let params: Array<any> = []
        files.forEach((item) => {
          if (item.file) {
            const picFileName = getIconNameByIconUrl(item.url)
            params.push(
              uploadFiles([
                {
                  url: getFileUrl(picFileName),
                  filePath: item.url,
                  name: picFileName,
                },
              ])
            )
          }
        })

        const res = await Promise.all(params)
        const _pics = data.concat(res.map((item) => `https://${lget(item, '0.data.url')}`))
        onClick(_pics)
      }
    } catch (e) {
      showErrorToastByError({
        err: e,
      })
    }
  }

  render() {
    const { arrow, title, value, placeholder, isMore, fileType, note, disabled } = this.props

    const { picValue } = this
    let data = toJS(value)

    let extraText = placeholder
    if (data && fileType === 'image') {
      extraText = ''
    }
    if (data && fileType === 'video') {
      extraText = '已上传'
    }

    let node
    if (!isMore) {
      node = (
        <View>
          <ListItemCustomTitleAndExtra
            disabled={disabled}
            longExtra={true}
            note={`${fileType === 'video' ? '支持avi、mp4、3gp、mov' : ''}` + note}
            arrow={arrow}
            title={title}
            onClick={this.onClick}
            extraText={extraText}
            extraThumb={data as string}
          />
          {data && (
            <View className="text-center" style={{ marginTop: '5px' }}>
              <Video src={data as string} />
            </View>
          )}
        </View>
      )
    } else {
      node = (
        <View className={Style['files-container']}>
          <AtListItem title={title} hasBorder={false} className={Style['files__list-item']} />
          <AtImagePicker length={5} files={picValue} onChange={this.handleChangeImage} />
        </View>
      )
    }

    return <View>{node}</View>
  }
}
