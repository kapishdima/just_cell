import { createStore } from "vuex";

import users from "./modules/user";
import terminals from "./modules/terminals";

export const store = createStore({
  modules: {
    users,
    terminals,
  },
});
