import { Validator } from "@/uniform/common/utils/validators/type.d.ts";
import { CSSProperties } from "react";

export interface AtComponent {
  className?: string | string[] | { [key: string]: boolean };
  customStyle?: string | CSSProperties;
  customStyles?: any;
}

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

export interface ISchema {
  /** base json schema spec**/
  path?:string
  title?: string
  description?: string
  default?: any
  readOnly?: boolean
  writeOnly?: boolean
  type?: 'string' | 'object' | 'array' | 'number' | 'boolean' | string
  enum?: Array<
    | string
    | number
    | { label: string; value: any; [key: string]: any }
    | { key: any; title: string; [key: string]: any }
  >
  const?: any
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
  maxLength?: number
  minLength?: number
  pattern?: string | RegExp
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  required?: string[] | boolean | string
  format?: string
  /** nested json schema spec **/
  properties?: {
    [key: string]: ISchema
  }
  items?: ISchema | ISchema[]
  additionalItems?: ISchema
  patternProperties?: {
    [key: string]: ISchema
  }
  additionalProperties?: ISchema
  /** extend json schema specs */
  editable?: boolean
  visible?: boolean | string
  display?: boolean | string
  triggerType?: 'onBlur' | 'onChange'
  ['x-props']?: { [name: string]: any }
  ['x-index']?: number
  // ['x-rules']?: ValidatePatternRules
  ['x-item-props']?: { [name: string]: any }
  ['x-component']?: string
  ['x-component-props']?: { [name: string]: any }
}


export interface IUniElementStoreGetMergePropsEvent {
  change: (param: any) => void;
  assistantValueChange: (param: any) => void;
}

export interface IUniElementStoreGetMergeProps {
  defaultProps: object;
  customEvent: IUniElementStoreGetMergePropsEvent;
  value: any;
  assistantValue: any;
  error: boolean | undefined;
  errMessage: string | undefined;
}

export interface setDataOptions {
  validateWhenSet?: boolean;
  doNotSetWhenValidateError?: boolean;
}
