import { AnySchemaStore,SchemaStore } from '../common/stores/SchemaStore';
import { AnyStateStore,StateStore } from '../common/stores/StateStore';

export enum EnumElementType {
  DISPLAY,
  FORM
}

export interface IElementStore<IProps,IState> {
  type:EnumElementType
  schemaStore: SchemaStore<IProps>;
  stateStore?: StateStore<IState>;
}

export type AnyElementStore = IElementStore<any,any>

export interface IDisplayElementStore<IProps,IState> extends IElementStore<IProps,IState> {

}

export interface IFormElementStore<IProps,IState> extends IElementStore<IProps,IState> {
  value: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}