import _trim from "lodash/trim";
import _isNil from "lodash/isNil";
import _isEmpty from "lodash/isEmpty";
import _isString from "lodash/isString";
import _isNumber from "lodash/isNumber";
import _toNumber from "lodash/toNumber";
import { ValidateError } from "../errorType";
import { ValidatorParams } from "../../../types";

import { isArrayLike } from "mobx";

export function isArray(
  arg: ReadonlyArray<any> | any
): arg is ReadonlyArray<any>;
export default function isArray(value) {
  return isArrayLike(value);
}


export const validatePhone = (params: ValidatorParams) => {
  return checkIsNotEmpty(params);
};

/**
 * 检查不是零值
 * 0, "" 这类
 * @param params
 */
export const checkIsNotZeroValue = (params: ValidatorParams) => {
  const { messagePrefix: keyName, value, message } = params;
  if (!value) {
    throw new ValidateError(message || `${keyName} 不能为空`);
  }
};

/**
 * 检查非空 (undefined)
 * @param params
 */
export const checkIsNotEmpty = (params: ValidatorParams) => {
  const { messagePrefix: keyName, value, message } = params;
  if (typeof value === "undefined") {
    throw new ValidateError(message || `${keyName} 不能为空`);
  }
};

export const checkIsArrayAndNotEmpty = (params: ValidatorParams) => {
  checkIsNotEmpty(params);
  const { messagePrefix: keyName, value, message } = params;
  if (!isArray(value)) {
    throw new ValidateError(message || `${keyName} 不是数组!`);
  }

  if (value.length === 0) {
    throw new ValidateError(message || `${keyName} 不能是空数组!`);
  }
  // console.log('checkIsArrayAndNotEmpty', { params })
};

export const checkRequireAtLeastOne = (params: ValidatorParams) => {
  const { value, message } = params;
  const _valid = value.some((_) => typeof value !== "undefined");
  if (!_valid) {
    throw new ValidateError(message || `至少需要一个参数`);
  }
};

export const checkPasswordRule = (params: ValidatorParams) => {
  const { messagePrefix: keyName, value, message } = params;
  if (!value) {
    throw new ValidateError(message || `${keyName} 不能为空`);
  }
  if (value.length > 20) {
    throw new ValidateError(message || `${keyName} 不能超过20位!`);
  }
  let res =
    value.length >= 6 &&
    value.length <= 20 &&
    !(!value.match(/\d+/gi) || !value.match(/[A-z]+/gi));
  if (!res) {
    throw new ValidateError(message || `${keyName} 6-20位数字字母组合`);
  }
};

export const checkPhoneNummberRule = (params: ValidatorParams) => {
  const { messagePrefix: keyName, value, message } = params;
  if (!value) {
    throw new ValidateError(message || `${keyName} 不能为空`);
  }

  let reg = /^\d{11}$/;
  if (!reg.test(value)) {
    throw new ValidateError(message || `${keyName} 格式不对`);
  }
};

export const checkIdentifyNumber = (idCard) => {
  //15位和18位身份证号码的正则表达式
  let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  //如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length == 18) {
      let idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //将前17位加权因子保存在数组里
      let idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      let idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
      for (let i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
      }
      let idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
      let idCardLast = idCard.substring(17); //得到最后一位身份证号码
      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod == 2) {
        if (idCardLast == "X" || idCardLast == "x") {
          return true;
          //alert("恭喜通过验证啦！");
        } else {
          return false;
          //alert("身份证号码错误！");
        }
      } else {
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast == idCardY[idCardMod]) {
          //alert("恭喜通过验证啦！");
          return true;
        } else {
          return false;
          //alert("身份证号码错误！");
        }
      }
    }
  } else {
    //alert("身份证格式不正确!");
    return false;
  }
};

/**
 * 检查身份证号
 * @param ValidatorParams
 */
export function identifyNumberValid(params: ValidatorParams) {
  const { value, message } = params;
  if (!checkIdentifyNumber(value)) {
    throw new ValidateError(message || "身份证号码不符合规范");
  }
}

/**
 * 检查银行卡号
 * @param ValidatorParams
 */
export function checkIsBankCard(params: ValidatorParams) {
  const { value, message } = params;
  let reg = /^\d+$/;
  if (value.length < 5 || !reg.test(value)) {
    throw new ValidateError(message || "银行卡号不符合规范");
  }
}

/**
 * 检查不是空字符串或者null, undefined
 * @param ValidatorParams
 */
export function checkIsNotEmptyString(params: ValidatorParams) {
  const { messagePrefix: keyName, value, message } = params;
  if (_isNil(value) || _trim(value) === "") {
    throw new ValidateError(message || `请填写${keyName}`);
  }
}

/**
 * 检查字符串长度
 * @param ValidatorParams
 */
export const checkIsStringLength = (length: number) => {
  return function (params: ValidatorParams) {
    const { messagePrefix: keyName, value, message } = params;
    if (!_isString(value)) {
      throw new ValidateError("非字符串类型");
    } else if (value.length >= length) {
      throw new ValidateError(
        message || `${keyName}输入内容不大于${length}个字符`
      );
    }
  };
};

/**
 * 检查最大值
 * @param ValidatorParams
 */
export const checkIsNumberMax = (max: number) => {
  return function (params: ValidatorParams) {
    const { messagePrefix: keyName, value, message } = params;
    let number = _toNumber(value);
    if (!_isNumber(number) || isNaN(number)) {
      throw new ValidateError("非数字类型");
    } else if (value > max) {
      throw new ValidateError(message || `${keyName}最大值为${max}`);
    }
  };
};

/**
 * 检查最小值
 * @param ValidatorParams
 */
export const checkIsNumberMin = (min: number) => {
  return function (params: ValidatorParams) {
    const { messagePrefix: keyName, value, message } = params;
    let number = _toNumber(value);
    if (!_isNumber(number) || isNaN(number)) {
      throw new ValidateError("非数字类型");
    } else if (value < min) {
      throw new ValidateError(message || `${keyName}最小值为${min}`);
    }
  };
};

/**
 * 正则检查
 * @param ValidatorParams
 */
export const checkIsPatternAllow = (pattern: RegExp) => {
  return function (params: ValidatorParams) {
    const { messagePrefix: keyName, value, message } = params;
    if (!pattern.test(value)) {
      throw new ValidateError(message || `${keyName}不符合条件`);
    }
  };
};
