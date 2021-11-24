import { NextFunction, Request, Response } from "express";
import { ErrorConstructor } from "express-rescue";
import { BaseError } from "../errors";

const errorHandler = (err: ErrorConstructor, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof BaseError) {
    const { description, httpCode } = err;
    res.status(httpCode).json(description);
    return;
  }
  res.status(500).json('Internal server error');
  return;
};

export default errorHandler;