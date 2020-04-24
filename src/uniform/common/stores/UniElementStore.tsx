import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { IValidator } from "@/uniform/common/utils/validators/type";

import {
  checkIsNotEmptyString,
  checkIsStringLength,
  checkIsNumberMax,
  checkIsNumberMin,
  checkIsPatternAllow
} from "../utils/validators/index";

// type
import {
  ISchema,
  SchemaValidator,
  setDataOptions
} from "@/uniform/common/types";
import { UniSchemaStore, AnyUniSchemaStore } from "./UniSchemaStore";

const debug = createDebug("mapp:stores/ui/form/FormItem");

export class UniElementStore<IProps, IState> {
  schemaStore: UniSchemaStore<IProps>;

  @observable
  componentState: IState;

  @observable
  value: any;

  // 用于辅助显示的值
  @observable
  tempValue: any;

  validators: IValidator[] = [];

  @observable
  isValid: boolean = true;

  /**
   * 是否被更新过
   */
  @observable
  isValueUpdated: boolean = false;

  @observable
  reason: string = "";

  get schema() {
    return this.schemaStore.schema || {};
  }

  get path(): string {
    return this.schema.path!;
  }

  get defaultValue(): string {
    return this.schema.default;
  }

  get errMsgPrefix(): string {
    return this.schema.title || "";
  }

  constructor(schemaStore: UniSchemaStore<IProps>) {
    this.reset();

    // 初始化
    this.schemaStore = schemaStore;
    const schema = schemaStore.schema;
    // 校验规则
    this.parseRules(schema);
  }

  @action.bound
  reset() {
    this.componentState = {} as IState;
    this.setValue(this.defaultValue);
    this.setIsValueUpdated(false);
    this.tempValue = this.defaultValue;
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
  get showError() {
    // 已经被更新过, 且值不合法.
    return this.isValueUpdated && !this.isValid;
  }

  @computed
  get errMessage() {
    return `${this.errMsgPrefix}校验错误: ${this.reason}`;
  }

  @computed
  get name() {
    return this.schema.name || "";
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
  setTempValue(value: any) {
    this.tempValue = value;
  }

  @action.bound
  putComponentState(key: string, value: any) {
    this.componentState[key] = value;
  }

  @action.bound
  setComponentState(value: IState) {
    this.componentState = value;
  }

  @action.bound
  syncTempValue() {
    this.setValue(this.tempValue);
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

export type AnyUniElementStore = UniElementStore<any, any>;
