import createDebug from "debug";
import { action, computed, observable } from "mobx";
import { SchemaStore } from "./SchemaStore";
import { ComponentStateStore } from "./ComponentStateStore";
const debug = createDebug("schema-ui:stores/BaseElementStore");

export class BaseElementStore<IProps, IState> {
  schemaStore: SchemaStore<IProps>;

  componentStateStore: ComponentStateStore<IState>;

  constructor(schemaStore: SchemaStore<IProps>) {
    // 初始化
    this.schemaStore = schemaStore;
  }

}

export type AnyBaseElementStore = BaseElementStore<any, any>;
