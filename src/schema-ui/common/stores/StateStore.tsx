import createDebug from "debug";

import { action, computed, observable } from "mobx";
const debug = createDebug("schema-ui:stores/StateStore");

export class StateStore<IState> {

  @observable
  state: IState;

  @action.bound
  setStateByKey(key: string, value: any) {
    this.state[key] = value;
  }

  @action.bound
  setState(value: IState) {
    this.state = value;
  }

}

export type AnyStateStore = StateStore<any>;
