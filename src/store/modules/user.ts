import { getUserFromSession } from "@/api/user/user";
import { User } from "@/api/user/user.model";

type UserState = {
  user: User | null;
};

export enum UserActions {
  SET_USER = "set_user",
  CLEA_USER = "clear_user",
}

const state = (): UserState => ({
  user: null,
});

const mutations = {
  [UserActions.SET_USER](state: UserState) {
    const user = getUserFromSession();
    state.user = user;
  },
  [UserActions.CLEA_USER](state: UserState) {
    state.user = null;
  },
};

export default {
  state,
  mutations,
};
