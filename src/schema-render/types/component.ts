import { CSSProperties } from "react";
import { ContainerStore } from "../common/stores/ContainerStore";
import { AnySchemaStore } from "../common/stores/SchemaStore";

export interface AtComponent {
  className?: string | string[] | { [key: string]: boolean };
  customStyle?: string | CSSProperties;
  customStyles?: any;
}

export interface ICustomStyles {
  root?: any;
}

export interface IElementProps  {
  containerStore:ContainerStore
  schemaStore:AnySchemaStore
}

export interface IValidMessage {
  showError: boolean;
  errMessage?: string;
  name?: string;
}

export interface ValidatorParams {
  messagePrefix?: string
  value: any
  message?: string
}
export type IValidator = (params: ValidatorParams) => void
export type SchemaValidator = IValidator;


export interface IFormSubmit {
  (param?: IValidMessage): void;
}
