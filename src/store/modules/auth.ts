import { login } from "@/api/auth/login";
import { logout } from "@/api/auth/logout";
import { resetPassword } from "@/api/auth/reset-password";
import router from "@/router";

type AuthState = {
  loading: boolean;
};

export enum AuthActions {
  SET_LOADING = "set_loading",
  RESET_PASSWORD = "reset_password",
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

    const data = await login(loginData);

    if (data.code === 0) {
      if (route.query.redirect) {
        router.push(route.query.redirect);
      } else {
        router.push({ name: "root" });
      }
    }

    if (data.code === 103) {
      router.push({ name: "confirmPassword" });
    }

    commit(AuthActions.SET_LOADING, false);
  },

  async [AuthActions.LOGOUT]({ commit }: any, { toast }: any) {
    try {
      commit(AuthActions.SET_LOADING, true);

      await logout();
      router.push({ name: "signin" });

      commit(AuthActions.SET_LOADING, false);
    } catch (error) {
      toast.error("Щось пішло не так!");
    }
  },

  async [AuthActions.RESET_PASSWORD](
    { commit }: any,
    { resetPayload, toast }: any
  ) {
    try {
      commit(AuthActions.SET_LOADING, true);

      const data = await resetPassword(resetPayload);
      if (data.code === 0) {
        toast.success("Пароль успішно змінено!");
        router.push({ name: "signin" });
      }

      commit(AuthActions.SET_LOADING, false);
    } catch (error) {
      toast.error("Щось пішло не так!");
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
