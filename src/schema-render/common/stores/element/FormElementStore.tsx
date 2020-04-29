import createDebug from "debug";
import { BaseElementStore } from "./BaseElementStore";
import { IFormElementStore,EnumElementType } from '../../../types'
import { FormItemStore } from "./FormItemStore";
import { SchemaStore } from "../SchemaStore";

const debug = createDebug("schema-render:stores/FormElementStore");

export class FormElementStore<IProps, IState> extends BaseElementStore<IProps,IState> implements IFormElementStore<IProps,IState> {
  
  schemaStore:SchemaStore<IProps>
  formItemStore:FormItemStore<IProps,IState>

  constructor(schemaStore: SchemaStore<IProps>) {
    super(schemaStore)
    this.schemaStore = schemaStore
    this.formItemStore = new FormItemStore(schemaStore)
  }

  get type(){
    return EnumElementType.FORM
  }

  get value(){
    return this.formItemStore.value
  }


  get isValid(){
    return this.formItemStore.isValid
  }


  get errMessage(){
    return this.formItemStore.errMessage
  }

  get showError(){
    return this.formItemStore.showError
  }

}

export type AnyFormElementStore = FormElementStore<any, any>;
