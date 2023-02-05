import { createStore } from "vuex";

import users from "./modules/user";

export const store = createStore({
  modules: {
    users,
  },
});
