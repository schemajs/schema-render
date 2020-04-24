import createDebug from "debug";
import { BaseElementStore } from "./BaseItemStore";

const debug = createDebug("mapp:stores/UniDisplayItemStore");

export class UniDisplayItemStore<IProps, IState> extends BaseElementStore<IProps,IState> {
  isForm():boolean{
    return false
  }
}

export type AnyUniDisplayItemStore = UniDisplayItemStore<any, any>;
