
export class SchemaRenderError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

export class EnvError extends SchemaRenderError {
  constructor(message) {
    super(message);
    this.name = "EnvError";
  }
}

export class FormatterError extends SchemaRenderError {
  constructor(message) {
    super(message);
    this.name = "FormatterError";
  }
}

export class QueryStringError extends SchemaRenderError {
  constructor(message) {
    super(message);
    this.name = "QueryStringError";
  }
}

export class ValidateError extends SchemaRenderError {
  constructor(message) {
    super(message);
    this.name = "ValidateError";
  }
}
