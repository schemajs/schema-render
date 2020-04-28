import { CSSProperties } from "react";
import { AnySchemaStore } from "../stores/SchemaStore";
import { ContainerStore } from "../stores/ContainerStore";

export interface AtComponent {
  className?: string | string[] | { [key: string]: boolean };
  customStyle?: string | CSSProperties;
  customStyles?: any;
}

export interface ICustomStyles {
  root?: any;
}

export interface IElementProps  {
  containerStore:ContainerStore
  schemaStore:AnySchemaStore
}