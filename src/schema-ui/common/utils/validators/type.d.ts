export interface ValidatorParams {
  messagePrefix?: string
  value: any
  message?: string
}
export type IValidator = (params: ValidatorParams) => void
