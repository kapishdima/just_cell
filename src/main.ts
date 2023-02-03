import { createApp } from "vue";
import toasts from "vue-toastification";

import App from "./App.vue";
import router from "./router";

import "vue-toastification/dist/index.css";
import "@/styles/index.scss";

createApp(App)
  .use(router)
  .use(toasts, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
  })
  .mount("#app");
