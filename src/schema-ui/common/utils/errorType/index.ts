import { RequestErrorData, PayErrorData } from "./type";

export class LeapError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

export class EnvError extends LeapError {
  constructor(message) {
    super(message);
    this.name = "EnvError";
  }
}

export class FormatterError extends LeapError {
  constructor(message) {
    super(message);
    this.name = "FormatterError";
  }
}

export class QueryStringError extends LeapError {
  constructor(message) {
    super(message);
    this.name = "QueryStringError";
  }
}

export class RequestError extends LeapError {
  public data: RequestErrorData;
  constructor(message) {
    super(message);
    this.name = "RequestError";
  }
}

export class PayError extends LeapError {
  public data: PayErrorData;
  constructor(message) {
    super(message);
    this.name = "PayError";
  }
}

/**
 * 微信授权错误
 */
export class WXAuthError extends LeapError {
  public data: any;
  constructor(message) {
    super(message);
    this.name = "WXAuthError";
  }
}

export class ValidateError extends LeapError {
  constructor(message) {
    super(message);
    this.name = "ValidateError";
  }
}
