// type
import { ISchema } from "@/uniform/common/types";
import { SchemaContainerStore } from "./SchemaContainerStore";

export function transformSchema(schema: any): ISchema {
  return schema;
}

export function getContainerStore(schema: any) {
  const containerStore = new SchemaContainerStore(transformSchema(schema));
  return containerStore;
}
