import { http } from "../client";
import { ApiRoutes } from "../routes";

export const testSign = async () => {
  const { data } = await http.post(ApiRoutes.TEST, { data: "test" });
  console.log(data);
};
