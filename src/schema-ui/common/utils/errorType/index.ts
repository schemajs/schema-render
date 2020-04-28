
export class SchemaUIError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

export class EnvError extends SchemaUIError {
  constructor(message) {
    super(message);
    this.name = "EnvError";
  }
}

export class FormatterError extends SchemaUIError {
  constructor(message) {
    super(message);
    this.name = "FormatterError";
  }
}

export class QueryStringError extends SchemaUIError {
  constructor(message) {
    super(message);
    this.name = "QueryStringError";
  }
}

export class ValidateError extends SchemaUIError {
  constructor(message) {
    super(message);
    this.name = "ValidateError";
  }
}
