import { Datepicker } from "vanillajs-datepicker";

export const format = (date: Date) => {
  return Datepicker.formatDate(date, "yyyy-mm-dd");
};
