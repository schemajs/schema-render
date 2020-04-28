import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { SchemaStore } from "./SchemaStore";
const debug = createDebug("schema-ui:stores/BaseElementStore");

export class BaseElementStore<IProps, IState> {
  schemaStore: SchemaStore<IProps>;

  @observable
  componentState: IState;

  @computed
  get schema() {
    return this.schemaStore.schema || {};
  }

  constructor(schemaStore: SchemaStore<IProps>) {
    this.reset();

    // 初始化
    this.schemaStore = schemaStore;
  }

  @action.bound
  reset() {
    this.componentState = {} as IState;
  }

  @action.bound
  putComponentStateByKey(key: string, value: any) {
    this.componentState[key] = value;
  }

  @action.bound
  setComponentState(value: IState) {
    this.componentState = value;
  }

}

export type AnyBaseElementStore = BaseElementStore<any, any>;
