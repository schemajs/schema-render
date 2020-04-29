import createDebug from "debug";
import { action, computed, observable } from "mobx";
import { IValidator,  SchemaValidator,EnumElementType } from "../../../types";
import {
  checkIsNotEmptyString,
  checkIsStringLength,
  checkIsNumberMax,
  checkIsNumberMin,
  checkIsPatternAllow
} from "../../utils/validators/index";
import { SchemaStore } from "../SchemaStore";
import { BaseElementStore } from "./BaseElementStore";

const debug = createDebug("schema-render:stores/FormItemStore");

export class FormItemStore<IProps, IState> extends BaseElementStore<IProps,IState> {

  @observable
  value: any;

  validators: IValidator[] = [];

  @observable
  isValid: boolean = true;

  get type(){
    return EnumElementType.FORM
  }

  /**
   * 是否被更新过
   */
  @observable
  isValueUpdated: boolean = false;

  @observable
  reason: string = "";

  get errMsgPrefix(): string {
    return this.schema.title || "";
  }

  constructor(schemaStore: SchemaStore<IProps>) {
    super(schemaStore)
    this.reset();
    // 初始化
    // 校验规则
    this.parseRules(schemaStore.schema);
  }

  @action.bound
  reset() {
    const defaultValue = this.schema.default
    this.setValue(defaultValue);
    this.setIsValueUpdated(false);
  }

  @action.bound
  parseRules(schema) {
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
  get showError() :boolean{
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

  setValidators(validators: IValidator[]) {
    this.validators = validators;
  }

  @action.bound
  pushValidator(validator: IValidator) {
    this.validators.push(validator);
  }

  /**
   * 无校验设置
   * @param value
   */
  @action.bound
  setValueWithoutValidate(value: any) {
    this.value = value;
    this.setIsValueUpdated(true);
    return;
  }

  /**
   * 带校验设置
   * @param value
   */
  @action.bound
  setValue(value: any) {
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

export type AnyFormItemStore = FormItemStore<any, any>;
