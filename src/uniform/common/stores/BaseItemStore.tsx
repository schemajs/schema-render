import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { UniSchemaStore, AnyUniSchemaStore } from "./UniSchemaStore";

const debug = createDebug("mapp:stores/BaseElementStore");

export class BaseElementStore<IProps, IState> {
  schemaStore: UniSchemaStore<IProps>;

  @observable
  componentState: IState;

  isForm():boolean{
    return false
  }

  @computed
  get id() {
    return this.schema.id || "";
  }

  @computed
  get name() {
    return this.schema.name || "";
  }

  @computed
  get schema() {
    return this.schemaStore.schema || {};
  }

  @computed
  get path(): string {
    return this.schema.path!;
  }

  @computed
  get defaultValue(): string {
    return this.schema.default;
  }

  constructor(schemaStore: UniSchemaStore<IProps>) {
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
