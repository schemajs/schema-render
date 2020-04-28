import { SchemaStore } from '../common/stores/SchemaStore';
import { StateStore } from '../common/stores/StateStore';

export enum EnumElementType {
  DISPLAY,
  FORM
}

export interface IElementStore<IProps,IState> {
  type:EnumElementType
  schemaStore: SchemaStore<IProps>;
  stateStore?: StateStore<IState>;
}

export type IAnyElementStore = IElementStore<any,any>

export interface IDisplayElementStore<IProps,IState> extends IElementStore<IProps,IState> {

}

export type IAnyDisplayElementStore = IDisplayElementStore<any,any>

export interface IFormElementStore<IProps,IState> extends IElementStore<IProps,IState> {
  value: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}

export type IAnyFormElementStore = IFormElementStore<any,any>