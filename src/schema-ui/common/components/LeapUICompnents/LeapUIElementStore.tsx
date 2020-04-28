import createDebug from "debug";
import { IElementStore,EnumElementType } from '../../../types'
import { FormElementStore } from "../../stores/element/FormElementStore";

const debug = createDebug("schema-ui:stores/LeapUIElementStore");

export  interface IProps {
  
}

export  interface IState {
  
}

export default class LeapUIElementStore extends FormElementStore<IProps, IState> implements IElementStore<IProps, IState> {
 
  
}

