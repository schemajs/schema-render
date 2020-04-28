export type SchemaValidator = IValidator;

export interface IValidMessage {
  showError: boolean;
  errMessage?: string;
  name?: string;
}

export interface ValidatorParams {
  messagePrefix?: string
  value: any
  message?: string
}
export type IValidator = (params: ValidatorParams) => void
