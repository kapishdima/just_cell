import { login } from "@/api/auth/login";
import { logout } from "@/api/auth/logout";
import router from "@/router";

type AuthState = {
  loading: boolean;
};

export enum AuthActions {
  SET_LOADING = "set_loading",
  LOGIN = "login",
  LOGOUT = "logout",
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

  async [AuthActions.LOGOUT]({ commit }: any, { toast }: any) {
    try {
      commit(AuthActions.SET_LOADING, true);

      await logout();
      router.push({ name: "signin" });

      commit(AuthActions.SET_LOADING, false);
    } catch (error) {
      console.error(error);
      toast.error("Щось пішло не так!");
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
