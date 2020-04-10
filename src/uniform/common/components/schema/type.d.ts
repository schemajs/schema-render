import { UniElementStore } from "../../stores/UniElementStore";
import { UniContainerStore } from "../../stores/UniContainerStore";

export interface IElementProps  {
  containerStore:UniContainerStore
  store:UniElementStore<any,any>
}
