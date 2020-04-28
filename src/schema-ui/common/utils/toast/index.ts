import Taro from "@tarojs/taro";
// utils
// import { notifyError } from '@/main/common/services/error'

export const showMask = () => {
  setTimeout(() => {
    Taro.showToast({
      title: "",
      icon: "none",
      mask: true,
    });
  }, 110);
  return;
};

export const hideMask = () => {
  return Taro.hideToast();
};
export const showInfoToast = ({ title, mask = false }) => {
  setTimeout(() => {
    Taro.showToast({
      title,
      icon: "none",
      mask,
      duration: 2000,
    });
  }, 110);
};

export const showSuccessToast = ({ title, mask = false }) => {
  setTimeout(() => {
    Taro.showToast({
      title,
      icon: "success",
      mask,
      duration: 2000,
    });
  }, 110);
};

export const showErrorToast = ({ title, mask = false, notifyErr = true }) => {
  setTimeout(() => {
    // debug("showErrorToast");
    Taro.showToast({
      title,
      icon: "none",
      mask,
      duration: 3000,
    });
    // notifyErr && notifyError(new Error(title));
  }, 110);
};
export interface ShowErrorToastByErrorProps {
  title?: string;
  mask?: boolean;
  err: Error;
}

export const showErrorToastByError = ({
  title = "错误",
  mask,
  err,
}: ShowErrorToastByErrorProps) => {
  let message = getMessageByError(err);
  const isWXError = /webviewScriptError/.test(message);
  const isInterrupted = /interrupted/.test(message);
  const wxRequestFail = /request unknow host/.test(message);
  if (isInterrupted) {
    message = "网络错误,请刷新重试（interrupted）";
  }
  if (wxRequestFail) {
    message = "网络中断";
  }
  if (!isWXError) {
    showErrorToast({
      title: `${title}: ${message}`,
      mask,
      notifyErr: false,
    });
  }
  // notifyError(err);
};

/**
 *
 * @param err  js err, 微信 err, 或者字符串
 */
export const getMessageByError = (err: any) => {
  let message = "未知错误!";
  if (err) {
    if (err.name) {
      message = `${err.name}: ${err.message}`;
    } else if (err.errMsg) {
      message = err.errMsg;
    } else {
      message = err + "";
    }
  }
  return message;
};

export const showErrorToastByErrorWithoutRequestError = (
  params: ShowErrorToastByErrorProps
) => {
  const { err } = params;
  if (err && err.name === "RequestError") {
    // skip
    // debug("showErrorToastByErrorWithoutRequestError skip.", { err });
    return;
  }
  showErrorToastByError(params);
};
