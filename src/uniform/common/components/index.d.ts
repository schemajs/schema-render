import { Validator } from "@/uniform/common/utils/validators/type.d.ts";

export enum EnumCompType {
  ListItemText = "ListItemText",
  ListItemInput = "ListItemInput",
  ListItemTextarea = "ListItemTextarea",
  ListItemSwitch = "ListItemSwitch",
  ListItemRadio = "ListItemRadio",
  ListItemCheckbox = "ListItemCheckbox",
  ListItemFile = "ListItemFile",
  ListItemFiles = "ListItemFiles",
  AtInput = "AtInput",
  AtTextarea = "AtTextarea",
}

export interface ICustomStyles {
  root?: any;
}

export type SchemaValidator = Validator;

export interface IValidMessage {
  showError: boolean;
  errMessage?: string;
  name?: string;
}

export interface IFormSubmit {
  (param?: IValidMessage): void;
}

interface ISchemaBase {
  initialValue?: any;
  errMsgPrefix?: string;
  validators?: Validator[];
  type?: string;
  formItemRules?: Array<SchemaValidator>;
  name?: string;
  default?: any;
  formItemProp?: object;
  required?: boolean;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  pattern?: RegExp;
  visible?: boolean;
}

export interface IProperties {
  [propName: string]: ISchemaBase;
}

export interface ISchema {
  type: string;
  properties: IProperties;
}

export interface IUniFormItemStoreGetMergePropsEvent {
  change: (param: any) => void;
  assistantValueChange: (param: any) => void;
}

export interface IUniFormItemStoreGetMergeProps {
  defaultProps: object;
  customEvent: IUniFormItemStoreGetMergePropsEvent;
  value: any;
  assistantValue: any;
  error: boolean | undefined;
  errMessage: string | undefined;
}

export interface setDataOptions {
  validateWhenSet?: boolean;
  doNotSetWhenValidateError?: boolean;
}
