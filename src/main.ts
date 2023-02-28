import { createApp } from "vue";
import toasts from "vue-toastification";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import { getUserRulesFromSession } from "./api/user/user";

import "vue-toastification/dist/index.css";
import "@/styles/index.scss";

const rules = getUserRulesFromSession();

const toastOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
};

const app = createApp(App);

app.provide("rules", rules);

app.use(router);
app.use(store);
app.use(toasts, toastOptions);

app.mount("#app");
