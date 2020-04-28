import createDebug from "debug";
import { IElementStore,EnumElementType } from '../../../types'
import { FormItemStore } from "../../stores/FormItemStore";

const debug = createDebug("schema-ui:stores/CustomItemStore");

export  interface ICustomItemStoreProps {
  
}

export  interface ICustomItemStoreState {
  
}

export default class DemoCustomItemStore extends FormItemStore<ICustomItemStoreProps, ICustomItemStoreState> implements IElementStore<ICustomItemStoreProps, ICustomItemStoreState> {
 
}

