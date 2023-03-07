type RouterState = {
  loading: boolean;
};

export enum RouterActions {
  SET_LOADING = "set_loading",
}

const state = (): RouterState => ({
  loading: false,
});

const mutations = {
  [RouterActions.SET_LOADING](state: RouterState, loading: boolean) {
    state.loading = loading;
  },
};

export default {
  state,
  mutations,
};
