import { createStore } from "vuex";

import users from "./modules/user";
import terminals from "./modules/terminals";
import auth from "./modules/auth";
import transactions from "./modules/transactions";
import router from "./modules/router";

export const store = createStore({
  modules: {
    users,
    terminals,
    auth,
    transactions,
    router,
  },
});
