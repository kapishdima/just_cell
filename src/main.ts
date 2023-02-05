import { createApp } from "vue";
import toasts from "vue-toastification";

import App from "./App.vue";
import router from "./router";

import "vue-toastification/dist/index.css";
import "@/styles/index.scss";
import { store } from "./store";

const toastOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
};

const app = createApp(App);

app.use(router);
app.use(store);
app.use(toasts, toastOptions);

app.mount("#app");
