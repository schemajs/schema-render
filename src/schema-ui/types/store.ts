import { AnySchemaStore } from '../common/stores/SchemaStore';
import { AnyComponentStateStore } from '../common/stores/ComponentStateStore';

export enum EnumElementType {
  DISPLAY,
  FORM
}
export interface IElementStore {
  type:EnumElementType
  schemaStore: AnySchemaStore;
  componentStateStore?: AnyComponentStateStore;
}
export interface IDisplayItemStore extends  IElementStore {

}
export interface IFormItemStore extends  IElementStore {
  value: any;
  tempValue?: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}