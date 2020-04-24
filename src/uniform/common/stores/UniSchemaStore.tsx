import { ISchema } from "../types";
import { observable } from "mobx";




export class  UniSchemaStore<IProps> {

  constructor(schema:ISchema){
    this.schema = schema
  }

  @observable
  schema: ISchema={};

  get component(){
    return this.schema['x-component'] || ""
  }

  get componentProps():IProps{
    return (this.schema['x-component-props'] || {}) as IProps
  }

  get props():IProps{
    return (this.schema['x-props'] || {}) as IProps
  }

  get properties(){
    return this.schema.properties || {}
  }

  get items():any{
    return this.schema.items || {}
  }

}

export type AnyUniSchemaStore = UniSchemaStore<any>