// type
import { ISchema } from "@/uniform/common/types";
import { UniContainerStore } from "./UniContainerStore";

export function transformSchema(schema: any): ISchema {
  return schema;
}

export function getContainerStore(schema: any) {
  const containerStore = new UniContainerStore(transformSchema(schema));
  return containerStore;
}
