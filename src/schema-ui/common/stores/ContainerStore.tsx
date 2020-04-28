import Taro, { Events } from "@tarojs/taro";
import { action, computed, observable } from "mobx";
// type
import {
  IValidMessage,
  ISchema,
  ISchemaProperties,
  EnumElementType,
  IFormItemStore,
  AnyElementStore
} from "../../types";
// comp
import { SchemaStore, AnySchemaStore } from "./SchemaStore";
import isArray from "lodash/isArray";
import { AnyBaseElementStore } from "./BaseElementStore";
import  Registry from "./Registry";

type EventListener = (...args: any[]) => void;

export class ContainerStore {
  private eventCenter: any;
  rootSchemaStore: AnySchemaStore;
  schemaStoreRegistry: Registry<AnySchemaStore>;
  elementStoreRegistry: Registry<AnyBaseElementStore>;

  get containerId() {
    return this.rootSchemaStore.schema.id || "uni";
  }
  
  constructor(schema: ISchema) {
    this.rootSchemaStore = new SchemaStore(schema);
    this.reset();
  }

  @action.bound
  reset() {
    this.eventCenter = new Events();
    this.schemaStoreRegistry = new Registry()
    this.elementStoreRegistry = new Registry()
    this.parseBySchemaNode(this.rootSchemaStore.schema, this.containerId);
  }

  @action.bound
  isValid(): IValidMessage {
    let err = {
      isValid: false,
      showError: false,
      errMessage: "",
      name: ""
    };
    Object.values(this.elementStoreRegistry).map((store:AnyElementStore) => {
      const name = store.schemaStore.name;
      if(store.type == EnumElementType.FORM){
        const formStore = store as IFormItemStore
        let { isValid, showError, errMessage } = formStore;
        if (showError) {
          err.name = name;
          err.isValid = isValid;
          err.showError = showError;
          err.errMessage = errMessage;
          return err;
        }
      }
    });
    return err;
  }

  // events
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

  // deep parse

  @action.bound
  addSchemaStoreBySchema(schema: ISchema, path: string) {
    schema.path = path;
    const schemaStore: AnySchemaStore = new SchemaStore(schema);
    this.schemaStoreRegistry.regItem(path, schemaStore);
  }


  @action.bound
  parseBySchemaArray(parentPath: string, schemaArray: ISchema[]) {
    schemaArray.map(schema => {
      const path = `${parentPath}.${schema.id}`;
      this.addSchemaStoreBySchema(schema, path);
      // 递归解析
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
}
