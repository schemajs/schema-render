// type
import { ISchema } from "@/uniform/common/types";
import { UniContainerStore } from "./UniContainerStore";

export function transformSchema(schema: any): ISchema {
  const schema = schema;
  return schema;
}

export function getContainerStore(schema: any) {
  const schema: ISchema = transformSchema(schema);
  const containerStore = new UniContainerStore(schema);
  return containerStore;
}
