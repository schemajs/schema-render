import createDebug from "debug";
import { BaseElementStore } from "./BaseElementStore";
import { IElementStore,EnumElementType } from '../../types'

const debug = createDebug("schema-ui:stores/DisplayElementStore");

export class DisplayElementStore<IProps, IState> extends BaseElementStore<IProps,IState> implements IElementStore<IProps,IState> {
  get type(){
    return EnumElementType.DISPLAY
  }
}

export type AnyDisplayElementStore = DisplayElementStore<any, any>;
