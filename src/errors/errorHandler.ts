import { Request, Response, NextFunction } from 'express';
import AppError from './AppError';

const errorHandler = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = 'Internal Server error';

  if (error instanceof AppError) {
    statusCode = error.code;
    message = error.getErrorData().message;
  }

  res.status(statusCode).send({ message });
};

export default errorHandler;
