import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
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
    path: "/confirm-code",
    name: "confirm",
    component: () => import("@/views/ConfirmCode/ConfirmCodeView.vue"),
  },
  {
    path: "/confirm-password",
    name: "confirmPassword",
    component: () => import("@/views/ConfirmPassword/ConfirmPasswordView.vue"),
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
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard/DashboardView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
