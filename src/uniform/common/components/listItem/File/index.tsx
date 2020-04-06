import Taro from "@tarojs/taro";

// comp
import { View } from "@tarojs/components";
import { AtImagePicker, AtListItem } from "taro-ui";
import BaseBusinessComponent from "@/uniform/common/components/BaseComponent";
import ListItemCustomTitleAndExtra from "@/uniform/common/components/base/ListItemCustomTitleAndExtra";

// scss
import Style from "./index.module.scss";

// util
import { toJS } from "mobx";
import { showErrorToast } from "@/uniform/common/utils/toast";
import { getIconNameByIconUrl } from "services/getter/icon";
import {
  uploadFiles,
  getFileUrl,
} from "@/uniform/common/services/request/fileUpload";
import lget from "lodash/get";

interface IListItemFileProps {
  extraText: string;
  arrow: "right" | "up" | "down";
  title: string;
  value: string | Array<any>;
  placeholder: string;
  isMore: boolean;
  onClick: (arg: any) => void;
}

export default class ListItemFile extends BaseBusinessComponent<
  IListItemFileProps,
  any
> {
  static defaultProps = {
    extraText: "",
    arrow: "right",
    title: "",
    value: "",
    placeholder: "",
    isMore: false,
  };

  uploadFile = async (filePath) => {
    try {
      if (filePath) {
        const picFileName = getIconNameByIconUrl(filePath);
        const uploadFileRes = await uploadFiles([
          {
            url: getFileUrl(picFileName),
            filePath: filePath,
            name: picFileName,
          },
        ]);
        let value = `https://${lget(uploadFileRes, "0.data.url")}`;
        return value;
      }
    } catch (e) {
      showErrorToast({
        title: e.message || JSON.stringify(e),
      });
    }
  };

  onChange = async (files, operationType) => {
    let { onClick } = this.props;

    if (operationType == "remove") {
      let data = [...files];
      onClick(data);
      return;
    }

    if (!files.length) return;

    let filePath = files.pop().url;
    let res = await this.uploadFile(filePath);

    // 网速太慢的话 要取最新的value
    let { value } = this.props;
    if (res) {
      let data = [
        ...value,
        {
          url: res,
        },
      ];
      onClick(data);
    }
  };

  onClick = async () => {
    let { onClick } = this.props;
    const fileRes = await Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    });
    const filePath = lget(fileRes, "tempFilePaths.0");
    let res = await this.uploadFile(filePath);
    if (res) onClick(res);
  };

  render() {
    const { arrow, title, value, placeholder, isMore } = this.props;

    let data = toJS(value);

    let node;
    if (!isMore) {
      node = (
        <ListItemCustomTitleAndExtra
          arrow={arrow}
          title={title}
          onClick={this.onClick}
          extraText={data ? "" : placeholder}
          extraThumb={data as string}
        />
      );
    } else {
      node = (
        <View className={Style["files-container"]}>
          <AtListItem
            title={title}
            hasBorder={false}
            className={Style["files__list-item"]}
          ></AtListItem>
          <AtImagePicker
            length={5}
            files={data as Array<any>}
            onChange={this.onChange}
          ></AtImagePicker>
        </View>
      );
    }

    return <View>{node}</View>;
  }
}
