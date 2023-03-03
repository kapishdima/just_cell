import { http } from "../client";
import { ApiRoutes } from "../routes";

export type RefundData = {
  order_id: string;
  amount: string;
  data: string;
  term: string;
};

export const refundPayment = async (refundData: RefundData) => {
  const { data } = await http.post(ApiRoutes.PAYMENTS_REFUND, refundData);

  return data;
};
