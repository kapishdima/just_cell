import { ValidationMessages } from "@/contants/validation-messages";
import { boolean, number, object, string } from "yup";

export const editTerminalSchema = object({
  terminal_id: string().required(ValidationMessages.REQUIRED_FIELD),
  can_offline: boolean().required(ValidationMessages.REQUIRED_FIELD),
  can_user_reversal: boolean().required(ValidationMessages.REQUIRED_FIELD),
  callback_req_type: string().required(ValidationMessages.REQUIRED_FIELD),
  callback_type: string().required(ValidationMessages.REQUIRED_FIELD),
  inShifts: boolean().required(ValidationMessages.REQUIRED_FIELD),
});

export const activateTerminalSchema = object({
  id: string().required(ValidationMessages.REQUIRED_FIELD),
  secret_key: string().required(ValidationMessages.REQUIRED_FIELD),
});

export const offlineTerminal = object({
  secret_key: string().required(ValidationMessages.REQUIRED_FIELD),
  req_type: string().required(ValidationMessages.REQUIRED_FIELD),
  settings: string().required(ValidationMessages.REQUIRED_FIELD),
  sync_type: string().required(ValidationMessages.REQUIRED_FIELD),
  max_offline_sum: number()
    .required(ValidationMessages.REQUIRED_FIELD)
    .min(1, ValidationMessages.MIN_NUMBER),
  endpoint_result: string().required(ValidationMessages.REQUIRED_FIELD),
  payload: string().required(ValidationMessages.REQUIRED_FIELD),
  sign_stract: string().required(ValidationMessages.REQUIRED_FIELD),
  card_wait: number()
    .required(ValidationMessages.REQUIRED_FIELD)
    .min(1, ValidationMessages.MIN_NUMBER),
  sync_period: number()
    .required(ValidationMessages.REQUIRED_FIELD)
    .min(1, ValidationMessages.MIN_NUMBER),
});
