import createDebug from "debug";
import { IElementStore,EnumElementType } from '../../../types'
import { FormElementStore } from "../../stores/element/FormElementStore";

const debug = createDebug("schema-ui:stores/CustomItemStore");

export  interface ICustomItemStoreProps {
  
}

export  interface ICustomItemStoreState {
  
}

export default class DemoCustomItemStore extends FormElementStore<ICustomItemStoreProps, ICustomItemStoreState> implements IElementStore<ICustomItemStoreProps, ICustomItemStoreState> {
 
  
}

