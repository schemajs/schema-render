import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { UniSchemaStore, AnyUniSchemaStore } from "./SchemaSchemaStore";
import { IElementStore } from '../types'
const debug = createDebug("mapp:stores/BaseElementStore");

export class BaseElementStore<IProps, IState> implements IElementStore {
  schemaStore: UniSchemaStore<IProps>;

  @observable
  componentState: IState;

  isForm():boolean{
    return false
  }

  @computed
  get schema() {
    return this.schemaStore.schema || {};
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
