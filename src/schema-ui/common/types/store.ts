import {ISchema}  from './schema'

export enum EnumElementType {
  DISPLAY,
  FORM
}
export interface IElementStore {
  type:EnumElementType
  schema:ISchema
}
export interface IFormItemStore extends  IElementStore {
  value: any;
  tempValue?: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}
export interface IFormItemStore extends  IElementStore {
  value: any;
  tempValue?: any;
  isValid: boolean;
  errMessage: string
  showError :boolean
}