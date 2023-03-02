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

app.directive("click-outside", {
  mounted: function (el, binding) {
    el.onOutsideClick = (event: Event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener("click", el.onOutsideClick);
  },
  beforeUnmount: function (el) {
    document.body.removeEventListener("click", el.onOutsideClick);
  },
});

app.mount("#app");
