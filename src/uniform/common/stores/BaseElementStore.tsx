import createDebug from "debug";

import { action, computed, observable } from "mobx";
import { UniSchemaStore, AnyUniSchemaStore } from "./UniSchemaStore";

const debug = createDebug("mapp:stores/ui/form/FormItem");

export class BaseElementStore<IProps, IState> {
  schemaStore: UniSchemaStore<IProps>;

  @observable
  componentState: IState;

  get schema() {
    return this.schemaStore.schema || {};
  }

  get path(): string {
    return this.schema.path!;
  }

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

  

  @computed
  get name() {
    return this.schema.name || "";
  }





  @action.bound
  putComponentState(key: string, value: any) {
    this.componentState[key] = value;
  }

  @action.bound
  setComponentState(value: IState) {
    this.componentState = value;
  }

}

export type AnyBaseElementStore = BaseElementStore<any, any>;
