import { ValidationMessages } from "@/contants/validation-messages";
import { object, ref, string } from "yup";

export const confirmationSchema = object({
  phone: string().required(ValidationMessages.REQUIRED_FIELD),
  oldPassword: string().required(ValidationMessages.REQUIRED_FIELD),
  newPassword: string().required(ValidationMessages.REQUIRED_FIELD),
  confirmationPassword: string().oneOf(
    [ref("newPassword")],
    ValidationMessages.PASSWORD_NOT_MATCH
  ),
});
