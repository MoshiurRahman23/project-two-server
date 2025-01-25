import mongoose from "mongoose";
import { TErrorSoures, TGenericErrorResponse } from "../interface/error";

const handleCastError = (
  error: mongoose.Error.CastError
): TGenericErrorResponse => {
  const errorSources: TErrorSoures = [
    {
      path: error?.path,
      message: error?.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};
export default handleCastError;
