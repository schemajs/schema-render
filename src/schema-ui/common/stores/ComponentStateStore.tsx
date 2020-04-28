import createDebug from "debug";

import { action, computed, observable } from "mobx";
const debug = createDebug("schema-ui:stores/ComponentStateStore");

export class ComponentStateStore<IState> {

  @observable
  componentState: IState;

  @action.bound
  putComponentStateByKey(key: string, value: any) {
    this.componentState[key] = value;
  }

  @action.bound
  setComponentState(value: IState) {
    this.componentState = value;
  }

}

export type AnyComponentStateStore = ComponentStateStore<any>;
