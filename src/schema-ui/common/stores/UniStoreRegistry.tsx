import { observable, computed, action } from "mobx";

export class UniRegistry<T> {

  @observable
  registry: {
    [key: string]: T;
  } = {};

  // @computed
  getItem(path: string) {
    return this.registry[path];
  }

  @action.bound
  putItem(path: string, item: T) {
    console.log(`UniRegistry putItem, path: ${path}`);
    this.registry[path] = item;
  }

  @action.bound
  regItem(path: string, item: T) {
    this.putItem(path, item);
  }

  @action.bound
  deleteItem(path: string) {
    delete this.registry[path];
  }

  @action.bound
  setRegistry(registry: {
    [key: string]: T;
  }){
    this.registry = registry
  }

  @action.bound
  reset(){
    this.registry = {}
  }

}

export type AnyUniRegistry = UniRegistry<any>;
