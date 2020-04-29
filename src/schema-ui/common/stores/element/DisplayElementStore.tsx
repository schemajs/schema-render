import createDebug from "debug";
import { BaseElementStore } from "./BaseElementStore";
import { IElementStore,EnumElementType, IDisplayElementStore } from '../../../types'

const debug = createDebug("schema-render:stores/DisplayElementStore");

export class DisplayElementStore<IProps, IState> extends BaseElementStore<IProps,IState> implements IDisplayElementStore<IProps,IState> {
  get type(){
    return EnumElementType.DISPLAY
  }
}

export type AnyDisplayElementStore = DisplayElementStore<any, any>;
