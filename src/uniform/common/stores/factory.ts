// type
import { IValidMessage, ISchema } from "@/uniform/types";
import { UniContainerStore } from "./UniContainerStore";

export function transformSchema(schema: any): ISchema {
  const schemaData = schema;
  return schemaData;
}

export function getContainerStore(schema: any) {
  const schemaData: ISchema = transformSchema(schema);
  const containerStore = new UniContainerStore(schemaData);
  return containerStore;
}
