import createDebug from "debug";
import { BaseElementStore } from "./BaseElementStore";
import { IElementStore,EnumElementType } from '../../types'

const debug = createDebug("schema-ui:stores/DisplayItemStore");

export class DisplayItemStore<IProps, IState> extends BaseElementStore<IProps,IState> implements IElementStore {
  get type(){
    return EnumElementType.DISPLAY
  }
}

export type AnyDisplayItemStore = DisplayItemStore<any, any>;
