export enum ApiRoutes {
  LOGIN = "/UserAuth/index.php",
  LOGOUT = "/Exit/index.php",
  RESET_PASSWORD = "/PassChange/index.php",
  GET_AUTH_STATUS = "/AuthCheck/index.php",
  ACTIVATE_TERMINAL = "/Terminals/Activate/index.php",
  TERMINALS_LIST = "Terminals/List/index.php",
  TERMINALS_REFS = "Terminals/Ref/index.php",
  GET_TERMINAL_CONFIG = "Terminals/Config/Get/index.php",
  CREATE_OFFLINE_TERMINAL = "Terminals/Config/Set/index.php",
  TRANSACTIONS_LIST = "Payments/Transactions/index.php",
  PAYMENTS_REFUND = "Payments/Refund/index.php",
}
