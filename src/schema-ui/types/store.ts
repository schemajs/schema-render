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

export interface IDisplayItemStore extends AnyElementStore {

}

export interface IFormItemStore extends  AnyElementStore {
  value: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}