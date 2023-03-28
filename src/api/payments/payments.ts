import { http } from "../client";
import { sign } from "../crypto/DeffiHellman";
import { getToken } from "../crypto/token";
import { ApiRoutes } from "../routes";

export type RefundData = {
  order_id: string;
  amount: string;
  data: string;
  term: string;
};

export const refundPayment = async (refundData: RefundData) => {
  const refundPayload = {
    ...refundData,
    sign: await sign(refundData, getToken()),
  };
  const { data } = await http.post(ApiRoutes.PAYMENTS_REFUND, refundPayload);

  return data;
};
