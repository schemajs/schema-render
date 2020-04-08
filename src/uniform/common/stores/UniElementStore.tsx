import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { Validator } from "@/uniform/common/utils/validators/type";

import {
  checkIsNotEmptyString,
  checkIsStringLength,
  checkIsNumberMax,
  checkIsNumberMin,
  checkIsPatternAllow
} from "@/uniform/common/utils/validators/index";

// type
import { ISchema, SchemaValidator, setDataOptions } from "@/uniform/types";

const debug = createDebug("mapp:stores/ui/form/FormItem");

export class UniElementStore {
  @observable
  schemaData: ISchema;

  @observable
  value: any;

  // 用于辅助显示的值
  @observable
  assistantValue: any;

  validators: Validator[] = [];

  @observable
  isValid: boolean = true;

  /**
   * 是否被更新过
   */
  @observable
  isValueUpdated: boolean = false;

  @observable
  reason: string = "";
  
  get path(): string {
    return this.schemaData.path!;
  }

  get initialValue(): string {
    return this.schemaData.default || "";
  }

  get errMsgPrefix(): string {
    return this.schemaData.displayName || "";
  }

  constructor(schema?: ISchema) {
    this.reset();
    // 初始化
    if (schema) {
      this.initBySchema(schema);
    }
  }

  @action.bound
  initBySchema(schema: ISchema) {
    this.schemaData = schema;

    // 默认值
    this.value = schema.default || "";

    // 校验
    this.getRules(schema);
  }

  @action.bound
  reset() {
    this.setValue(this.initialValue);
    this.setIsValueUpdated(false);
    this.assistantValue = "";
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
    this.validators.map(validator =>
      validator({ messagePrefix: this.errMsgPrefix, value })
    );
  }

  @action.bound
  validateValueAndSetResult() {
    try {
      this.validateValue(this.value);
    } catch (err) {
      debug("validateValueAndSetResult", { err });
      if (err.name == "ValidateError") {
        this.setIsValid(false);
        this.setReason(err.message);
      }
    }
  }

  setValidators(validators: Validator[]) {
    this.validators = validators;
  }

  @action.bound
  pushValidator(validator:Validator){
    this.validators.push(validator)
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
  setIsValueUpdated(val: boolean) {
    this.isValueUpdated = val;
  }

  @action.bound
  syncAssistantValueToValue() {
    this.value = this.assistantValue;
  }

  customEvent = {
    change: args => {
      let value = args[0];
      this.setValue(value);
    },
    assistantValueChange: args => {
      let value = args[0];
      this.setValue(value, {}, "assistant");
    }
  };
}
