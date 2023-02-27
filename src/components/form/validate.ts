import { Schema, ValidationError } from "yup";
import set from "lodash.set";

export const validateAll = async (values: any, schema: Schema) => {
  let errors = {};

  try {
    await schema.validate(values, { abortEarly: false });
    errors = {};
  } catch (error: any) {
    error.inner.forEach((error: ValidationError) => {
      const field = error.path!;
      const message = error.message;
      set(errors, field, message);
    });
  }
  return errors;
};

export const validateOne = async (
  field: string,
  values: any,
  schema: Schema
) => {
  console.log(field, values);
  let error = "";
  try {
    await schema.validateAt(field, values);
    error = "";
  } catch (_error: any) {
    console.log(_error);
    error = _error.message;
  }
  return error;
};
