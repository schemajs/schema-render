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
  tempValue: any;

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
  reset() {
    this.setValue(this.initialValue);
    this.setIsValueUpdated(false);
    this.tempValue = this.initialValue;
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

  /**
   * 无校验设置
   * @param value 
   */
  @action.bound
  setValueWithoutValidate(value:any) {
    this.value = value;
    this.setIsValueUpdated(true);
    return;
  }

  /**
   * 带校验设置
   * @param value 
   */
  @action.bound
  setValue(value:any) {
    let isValid = true,
      reason = "";
    try {
      this.validateValue(value);
    } catch (err) {
      isValid = false;
      reason = err.message;
    }
    this.setIsValid(isValid);
    this.setReason(reason);
    this.value = value;
    this.setIsValueUpdated(true);
    return;
  }

  @action.bound
  setTempValue(value:any){
    this.tempValue = value;
  }

  @action.bound
  syncTempValue() {
    this.setValue(this.tempValue)
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

}
