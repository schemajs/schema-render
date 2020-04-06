import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { Validator } from "@/uniform/common/utils/validators/type";

import {
  checkIsNotEmptyString,
  checkIsStringLength,
  checkIsNumberMax,
  checkIsNumberMin,
  checkIsPatternAllow,
} from "@/uniform/common/utils/validators/index";

// type
import {
  ISchemaBase,
  SchemaValidator,
  setDataOptions,
  IUniFormItemStoreGetMergeProps,
} from "@/uniform/common/components/index.d";

const debug = createDebug("mapp:stores/ui/form/FormItem");

export class FormItemStore {
  @observable
  defaultProps: object = {};

  name: string;

  @observable
  type: string;

  required: boolean;

  @observable
  value: any;

  @observable
  assistantValue: any;

  initialValue: any;

  validators: Validator[] = [];

  errMsgPrefix: string = "";

  @observable
  isValid: boolean = true;
  /**
   * 是否被更新过
   */
  @observable
  isValueUpdated: boolean = false;

  @observable
  reason: string = "";

  constructor(schema?: ISchemaBase) {
    // 初始化
    if (schema) {
      this.initSchema(schema);
    }
  }

  @action.bound
  init({ value }: { value: any; validate?: boolean }) {
    // debug('init', { value })
    this.setInitialValue(value);
    this.reset();
  }

  @action.bound
  initSchema(schema: ISchemaBase) {
    const {
      initialValue,
      errMsgPrefix,
      validators,
      name,
      type,
      formItemProp: props,
    } = schema;
    // 默认props
    this.defaultProps = props || {};
    // 默认值
    this.value = schema.default !== undefined ? schema.default : "";
    // 名称
    this.name = name || "";
    // 类型
    this.type = type || "";
    // 错误信息前缀
    this.errMsgPrefix = errMsgPrefix || "";
    // 校验
    // 兼容老的formItem
    if (validators) {
      this.validators = validators || [];
    } else {
      this.getRules(schema);
    }
    // 设置默认值
    if ("initialValue" in schema) {
      this.init({ value: initialValue });
    } else {
      this.init({ value: this.value });
    }
  }

  @action.bound
  reset() {
    this.setValue(this.initialValue);
    this.setIsValueUpdated(false);
  }

  @action.bound
  getRules(schema) {
    let rules: Array<SchemaValidator> = [];

    if (schema.required) rules.push(checkIsNotEmptyString);

    if (schema.maxLength) rules.push(checkIsStringLength(schema.maxLength));

    if (schema.maximum) rules.push(checkIsNumberMax(schema.maximum));

    if (schema.minimum) rules.push(checkIsNumberMin(schema.minimum));

    if (schema.pattern) rules.push(checkIsPatternAllow(schema.pattern));

    if (schema.formItemRules) rules = rules.concat(schema.formItemRules);

    this.validators = rules;
  }

  // 是否提示错误
  @computed
  get showError() {
    // 已经被更新过, 且值不合法.
    return this.isValueUpdated && !this.isValid;
  }
  @computed
  get errMessage() {
    return `${this.errMsgPrefix}校验错误: ${this.reason}`;
  }

  validateValue(value): void {
    // 校验参数
    this.validators.map((validator) =>
      validator({ messagePrefix: this.errMsgPrefix, value })
    );
  }

  @action.bound
  validateValueAndSetResult() {
    try {
      this.validateValue(this.value);
    } catch (err) {
      debug("validateValueAndSetResult", { err });
      // if (err instanceof ValidateError) {
      this.setIsValid(false);
      this.setReason(err.message);
      // }
    }
  }

  setValidators(validators: Validator[]) {
    this.validators = validators;
  }

  @action.bound
  setType(type) {
    this.type = type;
  }

  @action.bound
  setProps(props) {
    this.defaultProps = Object.assign({}, this.defaultProps, props);
  }

  @action.bound
  setValue(value, options: setDataOptions = {}, type?: string) {
    const { doNotSetWhenValidateError = false } = options;
    let isValid = true,
      reason = "";
    try {
      this.validateValue(value);
    } catch (err) {
      isValid = false;
      reason = err.message;
    }
    if (doNotSetWhenValidateError && !isValid) {
      console.log("setData skip", {
        doNotSetWhenValidateError,
        isValid,
        data: this.value,
      });
      // 跳过
      return;
    }
    this.setIsValid(isValid);
    this.setReason(reason);
    if (type == "assistant") {
      this.assistantValue = value;
    } else {
      this.value = value;
    }
    this.setIsValueUpdated(true);
    return;
  }

  @action.bound
  setIsValid(val: boolean) {
    this.isValid = val;
  }

  @action.bound
  setReason(reason: string) {
    this.reason = reason;
  }

  @action.bound
  setInitialValue(val: any) {
    this.initialValue = val;
  }

  @action.bound
  setIsValueUpdated(val: boolean) {
    this.isValueUpdated = val;
  }

  @action.bound
  setAssistantValueToValue() {
    this.value = this.assistantValue;
  }

  customEvent = {
    change: (args) => {
      let value = args[0];
      this.setValue(value);
    },
    assistantValueChange: (args) => {
      let value = args[0];
      this.setValue(value, {}, "assistant");
    },
  };

  @computed
  get getFormItemStoreProps(): IUniFormItemStoreGetMergeProps {
    let newProps = {
      defaultProps: this.defaultProps,
      customEvent: this.customEvent,
      value: this.value,
      assistantValue: this.assistantValue,
      isValid: this.isValid,
      error: this.showError,
      errMessage: this.errMessage,
    };
    return newProps;
  }
}
