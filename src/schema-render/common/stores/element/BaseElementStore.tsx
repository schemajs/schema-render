import createDebug from "debug";
import { SchemaStore } from "../SchemaStore";
import { StateStore } from "../StateStore";
const debug = createDebug("schema-render:stores/BaseElementStore");

export class BaseElementStore<IProps, IState> {
  schemaStore: SchemaStore<IProps>;

  get schema(){
    if(!this.schemaStore){
      return {}
    }
    return this.schemaStore.schema || {}
  }

  stateStore: StateStore<IState>;

  constructor(schemaStore: SchemaStore<IProps>) {
    // 初始化
    this.schemaStore = schemaStore;
  }

}

export type AnyBaseElementStore = BaseElementStore<any, any>;
