import {
  Terminal,
  TerminalRef,
  OfflineTerminalPayload,
  CreateOfflineTerminalResponse,
  TerminalFilters,
  EcommTerminalRef,
} from "@/api/terminals/terminal.model";
import {
  getTerminalRefs,
  getTerminalsList,
  createOfflineTerminal,
  createKeyFile,
  getTerminalConfig,
  activateTeminal,
  editTerminal,
  getEcommTermilaRefs,
} from "@/api/terminals/terminals";

import router from "@/router";

type KeyFile = {
  link: string;
  filename: string;
};

type TerminalState = {
  terminals: Terminal[];
  terminalsRef: TerminalRef | EcommTerminalRef | null;
  terminalConfig: OfflineTerminalPayload | null;
  loading: boolean;
  formLoading: boolean;
  key: KeyFile | null;
};

export enum TerminalsActions {
  CLEAR_TERMINALS = "clear_terminals",
  GET_TERMINALS = "get_terminals",
  SET_TERMINALS = "set_terminals",
  GET_TERMINALS_REF = "get_terminals_ref",
  GET_ECOMM_TERMINALS_REF = "get_ecomm_terminals_ref",
  GET_TERMINAL_CONFIG = "get_terminal_config",
  SET_TERMINAL_CONFIG = "set_terminal_config",
  SET_TERMINALS_REF = "set_terminals_ref",
  SET_ECOMM_TERMINALS_REF = "set_ecomm_terminals_ref",
  SET_LOADING = "set_loading",
  SET_FORM_LOADING = "set_form_loading",
  CREATE_OFFLINE_TERMINAL = "create_offline_terminal",
  SET_KEY_LINK = "set_key_link",
  ACTIVATE_TERMINAL = "activate_terminal",
  EDIT_TERMINAL = "edit_terminal",
}

const TERMINAL_KEY_FILENAME = "JustSell_publicKey.pem";

const state = (): TerminalState => ({
  terminals: [],
  terminalsRef: null,
  terminalConfig: null,
  loading: false,
  formLoading: false,
  key: null,
});

const mutations = {
  [TerminalsActions.SET_TERMINALS](
    state: TerminalState,
    terminals: Terminal[]
  ) {
    state.terminals = terminals;
  },
  [TerminalsActions.SET_TERMINALS_REF](
    state: TerminalState,
    terminalsRef: TerminalRef
  ) {
    state.terminalsRef = terminalsRef;
  },
  [TerminalsActions.SET_ECOMM_TERMINALS_REF](
    state: TerminalState,
    terminalsRef: EcommTerminalRef
  ) {
    state.terminalsRef = terminalsRef;
  },
  [TerminalsActions.SET_TERMINAL_CONFIG](
    state: TerminalState,
    terminalConfig: OfflineTerminalPayload
  ) {
    state.terminalConfig = terminalConfig;
  },
  [TerminalsActions.SET_LOADING](state: TerminalState, loading: boolean) {
    state.loading = loading;
  },
  [TerminalsActions.SET_FORM_LOADING](state: TerminalState, loading: boolean) {
    state.formLoading = loading;
  },
  [TerminalsActions.SET_KEY_LINK](state: TerminalState, key: KeyFile) {
    state.key = key;
  },
};

const actions = {
  async [TerminalsActions.GET_TERMINALS](
    { commit }: any,
    filters: TerminalFilters
  ) {
    commit(TerminalsActions.SET_LOADING, true);
    const terminals = await getTerminalsList(filters);

    commit(TerminalsActions.SET_TERMINALS, transformForTable(terminals || []));
    commit(TerminalsActions.SET_LOADING, false);
  },
  async [TerminalsActions.GET_TERMINALS_REF]({ commit }: any) {
    commit(TerminalsActions.SET_LOADING, true);
    const terminalsRef = await getTerminalRefs();

    commit(TerminalsActions.SET_TERMINALS_REF, terminalsRef);
    commit(TerminalsActions.SET_LOADING, false);
  },
  async [TerminalsActions.GET_ECOMM_TERMINALS_REF]({ commit }: any) {
    commit(TerminalsActions.SET_LOADING, true);
    const terminalsRef = await getEcommTermilaRefs();
    console.log("GET_REF", terminalsRef);

    commit(TerminalsActions.SET_ECOMM_TERMINALS_REF, terminalsRef);
    commit(TerminalsActions.SET_LOADING, false);
  },
  async [TerminalsActions.CREATE_OFFLINE_TERMINAL](
    { commit }: any,
    { terminalData, toast }: any
  ) {
    try {
      commit(TerminalsActions.SET_LOADING, true);
      const data: CreateOfflineTerminalResponse = await createOfflineTerminal(
        terminalData
      );

      if (data.code === 0 && data.public_key) {
        const link = createKeyFile(data.public_key);
        const key = {
          link,
          filename: TERMINAL_KEY_FILENAME,
        };
        commit(TerminalsActions.SET_KEY_LINK, key);
        router.push({ name: "offlineTerminalSuccess" });
      } else if (data.code === 0 && !data.public_key) {
        commit(TerminalsActions.SET_KEY_LINK, null);
        router.push({ name: "offlineTerminalSuccess" });
      }
      commit(TerminalsActions.SET_LOADING, false);
    } catch (error) {
      commit(TerminalsActions.SET_LOADING, false);
      toast.error("Щось пішло не так!");
    } finally {
      commit(TerminalsActions.SET_LOADING, false);
    }
  },
  async [TerminalsActions.GET_TERMINAL_CONFIG]({ commit }: any) {
    commit(TerminalsActions.SET_LOADING, true);
    const terminalConfig = await getTerminalConfig();

    commit(TerminalsActions.SET_TERMINAL_CONFIG, terminalConfig);
    commit(TerminalsActions.SET_LOADING, false);
  },
  async [TerminalsActions.ACTIVATE_TERMINAL](
    { commit }: any,
    { terminalConfig, toast }: any
  ) {
    try {
      commit(TerminalsActions.SET_FORM_LOADING, true);
      const code = await activateTeminal(terminalConfig);

      if (code === 0) {
        toast.success("Термінал успішно активовано!");
        router.push({ name: "terminals" });
      }

      commit(TerminalsActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(TerminalsActions.SET_FORM_LOADING, false);
      toast.error("Щось пішло не так!");
    } finally {
      commit(TerminalsActions.SET_FORM_LOADING, false);
    }
  },
  async [TerminalsActions.EDIT_TERMINAL](
    { commit }: any,
    { terminal, toast }: any
  ) {
    try {
      commit(TerminalsActions.SET_FORM_LOADING, true);
      const data = await editTerminal(terminal);

      if (data.code === 0) {
        toast.success("Термінал успішно змінено!");
        router.push({ name: "terminals" });
      }

      commit(TerminalsActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(TerminalsActions.SET_FORM_LOADING, false);
      toast.error("Щось пішло не так!");
    } finally {
      commit(TerminalsActions.SET_FORM_LOADING, false);
    }
  },
  [TerminalsActions.CLEAR_TERMINALS]({ commit }: any) {
    commit(TerminalsActions.SET_TERMINALS, []);
  },
};

const getters = {
  terminalModel: (state: TerminalState) => (id: number) => {
    return (state.terminalsRef as TerminalRef)?.transport_support.find(
      (model) => model.id === id
    );
  },
};

const transformForTable = (terminals: Terminal[]) => {
  return terminals.map((terminal) => ({
    ...terminal,
    status_color:
      terminal.test_mode === "true" ? "#c0392b" : terminal.status_color,
    fontStyle: terminal.test_mode === "true",
    subRows: [
      {
        Налаштування: terminal.settings,
        "Тип термінала": terminal.terminal_type,
        Адреса: terminal.address,
        "Тип інтерфейса": terminal.interface_type,
        Система: terminal.system,
        "Чи може користувач робити відміну": JSON.parse(
          terminal.can_user_reversal
        )
          ? "Так"
          : "Ні",
        "URL-адреса зворотного виклику": terminal.callback_url,
        "Тип зворотного виклику": terminal.callback_type,
        "Заголовки зворотного виклику": terminal.callback_headers,
        "Шаблон зворотного виклику": `<pre>${terminal.callback_req_tmpl}</pre>`,
        "Тип запиту зворотного виклику": terminal.callback_req_type,
        "Шаблон підпису": terminal.sign_stract,
        "Час тайм-ауту": terminal.timeout,
        "Час повторної відправки": terminal.resendPeriod,
        "У зміні": JSON.parse(terminal.inShifts) ? "Так" : "Ні",
        "Початок зміни": terminal.shift_start,
        "Кінець зміни": terminal.shift_end,
        Статус: terminal.status,
        "Тип встановлення": terminal.allocation_type,
        Компанія: terminal.client_name,
        "Додаткова інформація": terminal.dop_info,
      },
    ],
  }));
};

export default {
  state,
  mutations,
  actions,
  getters,
};
