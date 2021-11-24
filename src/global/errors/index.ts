import StatusCode from 'http-status-codes'

export class BaseError extends Error {
  public readonly code: string;
  public readonly httpCode: number;
  public readonly isOperational: boolean;
  public readonly description: string;

  constructor(
    description: string,
    httpCode: number,
    code: string,
    isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.code = code;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.description = description;

    Error.captureStackTrace(this);
  }
};

export class NotFound extends BaseError {
  constructor(
    code: string = "not_found",
    httpCode = StatusCode.NOT_FOUND,
    isOperational = true,
    description = 'Objeto não encontrado') {
    super(description, httpCode, code, isOperational);
  }
};