import { Request, Response, NextFunction } from "express";

// Custom error class to handle application-specific errors
class AppError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
    this.name = "AppError";
  }
}

// Error handling middleware
export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  // Log the error for debugging purposes
  console.error("Last Middleware: ", error);

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
}

export default AppError;
