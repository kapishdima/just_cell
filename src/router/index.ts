import { isAuthorized } from "@/api/auth/checkAuth";
import { getUserRulesFromSession } from "@/api/user/user";
import { Rules } from "@/contants/rules";
import { store } from "@/store";
import { RouterActions } from "@/store/modules/router";
import { UserActions } from "@/store/modules/user";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useToast } from "vue-toastification";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: () => import("@/views/Terminals/TerminalsListView.vue"),
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
    path: "/points",
    children: [
      {
        path: "fiscal",
        name: "fiscalCreate",
        component: () =>
          import("@/modules/points/pages/CreateFiscalPointPage.vue"),
      },
      {
        path: "non-fiscal",
        name: "nonFiscalCreate",
        component: () =>
          import("@/modules/points/pages/CreateNonFiscalPointPage.vue"),
      },
      {
        path: "fiscal/add",
        name: "fiscalAdd",
        component: () =>
          import("@/modules/points/pages/AddPointsFromKeyPage.vue"),
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
    path: "/qr",
    component: () => import("@/views/QRScannerView/QRScannerView.vue"),
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
        path: "success",
        name: "offlineTerminalSuccess",
        component: () => import("@/views/Terminals/SuccessOfflineView.vue"),
      },
    ],
  },
  {
    path: "/offline",
    name: "offlineTerminal",
    component: () => import("@/views/Terminals/CreateOfflineTerminalView.vue"),
  },
  {
    path: "/transactions",
    component: () =>
      import("@/modules/transactions/pages/TransactionsListPage.vue"),
  },
  {
    path: "/ecomm_terminal",
    component: () => import("@/views/Ecomm/CreateEcommTerminalView.vue"),
  },
  {
    path: "/Terminal/Activate",
    name: "activateTerminal",
    beforeEnter: (to, from, next) => {
      const rulesList = getUserRulesFromSession();
      const rules = rulesList.map((rule: any) => rule.tag);
      const canEnter = rules?.includes(Rules.ADD_TERMINAL) || false;
      const toast = useToast();
      if (!canEnter) {
        toast.error("У вас немає доступу до цієї сторінки!");
        return next(from.path);
      }

      return next();
    },
    component: () => import("@/views/Terminals/ActivateTerminalView.vue"),
  },
  {
    path: "/Loyalty/Create",
    component: () => import("@/views/Loyalty/CreateLoyaltyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const authExcludedRoutes = ["signin", "signup", "reset", "confirmPassword"];

router.beforeResolve((to, from, next) => {
  store.commit(RouterActions.SET_LOADING, false);
  next();
});

router.beforeEach(async (to, from, next) => {
  if (!authExcludedRoutes.includes(to.name as string)) {
    store.commit(RouterActions.SET_LOADING, true);

    const authorized = await isAuthorized();

    if (!authorized) {
      return next({ name: "signin", query: { redirect: to.fullPath } });
    }
  }

  store.commit(UserActions.SET_USER);
  return next();
});

export default router;
