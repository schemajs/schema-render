// type
import { IValidMessage, ISchema } from "@/uniform/types";
import { UniContainerStore } from "./UniContainerStore";
import { UniElementStore } from "./UniElementStore";

export function transformSchema(schema: any): ISchema {
  const schemaData = schema;
  return schemaData;
}

export function createBySchemaNode(
  containerStore: UniContainerStore,
  schema: ISchema,
  parentPath: string
) {
  const { properties } = schema;
  if (!properties) {
    return null;
  }
  Object.entries(properties).map(([id, item]) => {
    const path = `${parentPath}.${id}`;
    item.path = path;
    const eleStore: UniElementStore = new UniElementStore(item);
    containerStore.putElementStore(path, eleStore);
    return createBySchemaNode(containerStore,schema, path);
  });
}

export function getContainerStore(schema: any) {
  const schemaData: ISchema = transformSchema(schema);
  const containerStore = new UniContainerStore();
  const path = "";
  createBySchemaNode(containerStore,schemaData,  path);
  return containerStore;
}
