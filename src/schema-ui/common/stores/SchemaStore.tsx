import { ISchema } from "../types";
import { observable, computed } from "mobx";

export class  SchemaStore<IProps> {

  constructor(schema:ISchema){
    this.schema = schema
  }

  @observable
  schema: ISchema={};

  @computed
  get id() {
    return this.schema.id || "";
  }

  @computed
  get name() {
    return this.schema.name || "";
  }
  @computed
  get path(): string {
    return this.schema.path!;
  }

  @computed
  get defaultValue(): string {
    return this.schema.default;
  }
  
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

export type AnySchemaStore = SchemaStore<any>