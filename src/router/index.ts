import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: {
      name: "signin",
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/SignIn/SignInView.vue"),
  },
  {
    path: "/reset-password",
    name: "reset",
    component: () => import("@/views/ResetPassword/ResetPasswordView.vue"),
  },
  {
    path: "/reset-confirm",
    name: "confirm",
    component: () => import("@/views/ConfirmCode/ConfirmCodeView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignUp/SignUpView.vue"),
  },
  {
    path: "/singup/banking",
    name: "banking",
    component: () => import("@/views/SignUpBanking/SignUpBankingView.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/views/AuthWelcome/AuthWelcomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
