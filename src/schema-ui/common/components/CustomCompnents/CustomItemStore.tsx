import createDebug from "debug";
import { BaseElementStore } from "../../stores/BaseElementStore";
import { IElementStore,EnumElementType } from '../../../types'

const debug = createDebug("schema-ui:stores/CustomItemStore");

export class CustomItemStore<IProps, IState> extends BaseElementStore<IProps,IState> implements IElementStore<IProps,IState> {
  get type(){
    return EnumElementType.FORM
  }
}

export type AnyCustomItemStore = CustomItemStore<any, any>;
