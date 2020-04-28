// type
import { ISchema } from "../types";
import { ContainerStore } from "./ContainerStore";

export function transformSchema(schema: any): ISchema {
  return schema;
}

export function getContainerStore(schema: any) {
  const containerStore = new ContainerStore(transformSchema(schema));
  return containerStore;
}
