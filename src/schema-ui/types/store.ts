import { AnySchemaStore,SchemaStore } from '../common/stores/SchemaStore';
import { AnyComponentStateStore,ComponentStateStore } from '../common/stores/ComponentStateStore';

export enum EnumElementType {
  DISPLAY,
  FORM
}

export interface IElementStore<IProps,IState> {
  type:EnumElementType
  schemaStore: SchemaStore<IProps>;
  componentStateStore?: ComponentStateStore<IState>;
}

export type AnyElementStore = IElementStore<any,any>

export interface IDisplayItemStore extends AnyElementStore {

}
export interface IFormItemStore extends  AnyElementStore {
  value: any;
  tempValue?: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}