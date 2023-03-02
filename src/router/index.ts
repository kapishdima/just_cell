import { isAuthorized } from "@/api/auth/checkAuth";
import { store } from "@/store";
import { UserActions } from "@/store/modules/user";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: import("@/views/Dashboard/DashboardView.vue"),
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
    path: "/department",
    name: "department",
    children: [
      {
        path: "create",
        name: "departmentCreate",
        component: () => import("@/views/Department/CreateDepartmentView.vue"),
      },
    ],
  },
  {
    path: "/users",
    children: [
      {
        path: "create",
        name: "usersCreate",
        component: () => import("@/views/Users/CreateUserView.vue"),
      },
      {
        path: "",
        name: "users",
        component: () => import("@/views/Users/UsersListView.vue"),
      },
      {
        path: "statistics/:id",
        name: "userStatistics",
        component: () => import("@/views/Users/UserStatisticsView.vue"),
      },
      {
        path: "manage",
        name: "manageUsers",
        component: () => import("@/views/ManageUsers/BranchesView.vue"),
      },
      {
        path: "manage/:id",
        name: "manageUser",
        component: () => import("@/views/ManageUsers/BranchUsersView.vue"),
      },
      {
        path: "manage/:id/schedule",
        name: "userSchedule",
        component: () => import("@/views/ManageUsers/UserScheduleView.vue"),
      },
    ],
  },
  {
    path: "/terminals",
    children: [
      {
        path: "",
        name: "terminals",
        component: () => import("@/views/Terminals/TerminalsListView.vue"),
      },
      {
        path: "create",
        name: "createTerminal",
        component: () => import("@/views/Terminals/CreateTerminalView.vue"),
      },
      {
        path: "edit",
        name: "editTerminal",
        component: () => import("@/views/Terminals/EditTerminalView.vue"),
      },
      {
        path: "offlineTerminal",
        name: "offlineTerminal",
        component: () =>
          import("@/views/Terminals/CreateOfflineTerminalView.vue"),
      },
      {
        path: "success",
        name: "offlineTerminalSuccess",
        component: () => import("@/views/Terminals/SuccessOfflineView.vue"),
      },
    ],
  },
  {
    path: "/transac_ptks",
    component: () =>
      import("@/views/Transactions/TransactionsPTKSListView.vue"),
  },
  {
    path: "/transac_transport",
    component: () =>
      import("@/views/Transactions/TransactionsTransportListView.vue"),
  },
  {
    path: "/Terminal/Activate",
    name: "activateTerminal",
    component: () => import("@/views/Terminals/ActivateTerminalView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const authExcludedRoutes = ["signin", "signup", "reset", "confirmPassword"];

router.beforeEach(async (to, from, next) => {
  if (!authExcludedRoutes.includes(to.name as string)) {
    const authorized = await isAuthorized();

    if (!authorized) {
      return next({ name: "signin", query: { redirect: to.fullPath } });
    }
  }

  store.commit(UserActions.SET_USER);
  return next();
});

export default router;
