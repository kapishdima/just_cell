import { login } from "@/api/auth/login";
import router from "@/router";

type AuthState = {
  loading: boolean;
};

export enum AuthActions {
  SET_LOADING = "set_loading",
  LOGIN = "login",
}

const state = (): AuthState => ({
  loading: false,
});

const mutations = {
  [AuthActions.SET_LOADING](state: AuthState, loading: boolean) {
    state.loading = loading;
  },
};

const actions = {
  async [AuthActions.LOGIN]({ commit }: any, { loginData, route }: any) {
    commit(AuthActions.SET_LOADING, true);

    await login(loginData, {
      onSuccess: () => {
        if (route.query.redirect) {
          router.push(route.query.redirect);
        } else {
          router.push({ name: "dashboard" });
        }
      },
    });

    commit(AuthActions.SET_LOADING, false);
  },
};

export default {
  state,
  mutations,
  actions,
};
