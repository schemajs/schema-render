import Taro, { Events } from "@tarojs/taro";
import { action, computed, observable } from "mobx";
// type
import {
  IValidMessage,
  ISchema,
  ISchemaProperties
} from "@/uniform/common/types";
// comp
import { UniElementStore,AnyUniElementStore } from "./UniElementStore";
import isArray from "lodash/isArray";

import { eventNames, EventNames } from "../utils/events/EventNames";

type ElementStoreInfo = {
  [key: string]: AnyUniElementStore;
};

type EventListener = (...args: any[]) => void;

export class UniContainerStore {
  private eventCenter: any;
  eventNames: EventNames;

  @observable
  schemaData: ISchema = {};

  elementStores: ElementStoreInfo = {};

  containerId:string

  constructor(schema: ISchema) {
    this.schemaData = schema;
    this.containerId = schema.id || "uni";
    this.eventCenter = new Events();
    this.eventNames = eventNames;
    this.reset();
  }

  @action.bound
  reset() {
    this.elementStores = {};
    this.parseBySchemaNode(this.schemaData, this.containerId);
  }



  @action.bound
  parseBySchemaArray(parentPath: string, schemaArray: ISchema[]) {
    schemaArray.map(schema => {
      const path = `${parentPath}.${schema.id}`;
      this.addElementStoreBySchema(schema,path)
      return this.parseBySchemaNode(schema, path);
    });
  }

  getArrayFromProperties(properties: ISchemaProperties) {
    return Object.entries(properties).map(entry => {
      const item = entry[1];
      item.id = entry[0];
      return item;
    });
  }

  @action.bound
  parseBySchemaNode(schema: ISchema, parentPath: string) {
    const { properties, items } = schema;
    if (properties) {
      const arr = this.getArrayFromProperties(properties);
      this.parseBySchemaArray(parentPath, arr);
    }
    if (items) {
      if (isArray(items)) {
        this.parseBySchemaArray(parentPath, items);
      } else {
        const itemsProperties = items.properties;
        if (itemsProperties) {
          const arr = this.getArrayFromProperties(itemsProperties);
          this.parseBySchemaArray(parentPath, arr);
        }
      }
    }
  }

  get properties() {
    if (!this.schemaData) {
      return null;
    }
    return this.schemaData.properties;
  }

  getElementStore(path: string) {
    return this.elementStores[path];
  }

  @action.bound
  addElementStoreBySchema(schema: ISchema, path: string) {
    schema.path = path;
    // console.log(`path: ${path}`);
    const eleStore: AnyUniElementStore = new UniElementStore(schema);
    this.putElementStore(path, eleStore);
  }

  @action.bound
  putElementStore(path: string, store: AnyUniElementStore) {
    this.elementStores[path] = store;
  }

  @action.bound
  deleteElementStore(path: string) {
    delete this.elementStores[path];
  }

  @action.bound
  isValid(): IValidMessage {
    let err = {
      isValid: false,
      showError: false,
      errMessage: "",
      name: ""
    };
    Object.values(this.elementStores).map(store => {
      let { isValid, showError, errMessage, name } = store;
      if (showError) {
        err.name = name;
        err.isValid = isValid;
        err.showError = showError;
        err.errMessage = errMessage;
        return err;
      }
    });
    return err;
  }

  /**
   * 监听一个事件，接受参数
   */
  onEvent(eventName: string | symbol, listener: EventListener) {
    return this.eventCenter.on(eventName, listener);
  }

  /**
   * 添加一个事件监听，并在事件触发完成之后移除Callbacks链
   */
  onceEvent(eventName: string | symbol, listener: EventListener) {
    return this.eventCenter.once(eventName, listener);
  }

  /**
   * 取消监听一个事件
   */
  offEvent(eventName: string | symbol, listener?: EventListener) {
    return this.eventCenter.off(eventName, listener);
  }

  /**
   * 取消监听的所有事件
   */
  offAllEvents() {
    return this.eventCenter.off();
  }

  /**
   * 触发一个事件，传参
   */
  triggerEvent(eventName: string | symbol, ...args: any[]): boolean {
    return this.eventCenter.trigger(eventName, ...args);
  }

  
}
