import createDebug from "debug";
import { SchemaStore } from "./SchemaStore";
import { ComponentStateStore } from "./ComponentStateStore";
const debug = createDebug("schema-ui:stores/BaseElementStore");

export class BaseElementStore<IProps, IState> {
  schemaStore: SchemaStore<IProps>;

  get schema(){
    if(!this.schemaStore){
      return {}
    }
    return this.schemaStore.schema || {}
  }

  componentStateStore: ComponentStateStore<IState>;

  constructor(schemaStore: SchemaStore<IProps>) {
    // 初始化
    this.schemaStore = schemaStore;
  }

}

export type AnyBaseElementStore = BaseElementStore<any, any>;
