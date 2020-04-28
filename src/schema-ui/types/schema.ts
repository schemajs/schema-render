export interface ISchemaProperties {
  [key: string]: ISchema
}

export interface ISchema {
  /** base json schema spec**/
  id?:string
  title?: string
  description?: string
  default?: any
  readOnly?: boolean
  writeOnly?: boolean
  type?: 'string' | 'object' | 'array' | 'number' | 'boolean' | string
  enum?: Array<
    | string
    | number
    | { label: string; value: any; [key: string]: any }
    | { key: any; title: string; [key: string]: any }
  >
  const?: any
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
  maxLength?: number
  minLength?: number
  pattern?: string | RegExp
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  required?: string[] | boolean | string
  format?: string
  /** nested json schema spec **/
  properties?: ISchemaProperties
  items?: ISchema | ISchema[]
  additionalItems?: ISchema
  patternProperties?: {
    [key: string]: ISchema
  }
  additionalProperties?: ISchema
  /** extend json schema specs */
  editable?: boolean
  visible?: boolean | string
  display?: boolean | string
  triggerType?: 'onBlur' | 'onChange'
  name?:string;
  path?:string
  displayName?:string;
  ['x-props']?: { [name: string]: any }
  ['x-index']?: number
  // ['x-rules']?: ValidatePatternRules
  ['x-item-props']?: { [name: string]: any }
  ['x-component']?: string
  ['x-component-props']?: { [name: string]: any }
}