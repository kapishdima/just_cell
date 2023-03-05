import { ValidationMessages } from "@/contants/validation-messages";
import { boolean, object, string } from "yup";

export const editTerminalSchema = object({
  terminal_id: string().required(ValidationMessages.REQUIRED_FIELD),
  can_offline: boolean().required(ValidationMessages.REQUIRED_FIELD),
  can_user_reversal: boolean().required(ValidationMessages.REQUIRED_FIELD),
  callback_req_type: string().required(ValidationMessages.REQUIRED_FIELD),
  callback_type: string().required(ValidationMessages.REQUIRED_FIELD),
  inShifts: boolean().required(ValidationMessages.REQUIRED_FIELD),
});
