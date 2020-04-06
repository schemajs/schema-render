export interface ValidatorParams {
  messagePrefix?: string
  value: any
  message?: string
}
export type Validator = (params: ValidatorParams) => void
