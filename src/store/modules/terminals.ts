import {
  Terminal,
  TerminalRef,
  OfflineTerminalPayload,
  CreateOfflineTerminalResponse,
} from "@/api/terminals/terminal.model";
import {
  getTerminalRefs,
  getTerminalsList,
  createOfflineTerminal,
  createKeyFile,
} from "@/api/terminals/terminals";

import router from "@/router";

type KeyFile = {
  link: string;
  filename: string;
};

type TerminalState = {
  terminals: Terminal[];
  terminalsRef: TerminalRef | null;
  loading: boolean;
  key: KeyFile | null;
};

export enum TerminalsActions {
  GET_TERMINALS = "get_terminals",
  SET_TERMINALS = "set_terminals",
  GET_TERMINALS_REF = "get_terminals_ref",
  SET_TERMINALS_REF = "set_terminals_ref",
  SET_LOADING = "set_loading",
  CREATE_OFFLINE_TERMINAL = "create_offline_terminal",
  SET_KEY_LINK = "set_key_link",
}

const TERMINAL_KEY_FILENAME = "JustSell_publicKey.pem";

const state = (): TerminalState => ({
  terminals: [],
  terminalsRef: null,
  loading: false,
  key: null,
});

const mutations = {
  [TerminalsActions.SET_TERMINALS](
    state: TerminalState,
    terminals: Terminal[]
  ) {
    state.terminals.push(...terminals);
  },
  [TerminalsActions.SET_TERMINALS_REF](
    state: TerminalState,
    terminalsRef: TerminalRef
  ) {
    state.terminalsRef = terminalsRef;
  },
  [TerminalsActions.SET_LOADING](state: TerminalState, loading: boolean) {
    state.loading = loading;
  },
  [TerminalsActions.SET_KEY_LINK](state: TerminalState, key: KeyFile) {
    state.key = key;
  },
};

const actions = {
  async [TerminalsActions.GET_TERMINALS]({ commit }: any) {
    commit(TerminalsActions.SET_LOADING, true);
    const terminals = await getTerminalsList();

    commit(TerminalsActions.SET_TERMINALS, terminals);
    commit(TerminalsActions.SET_LOADING, false);
  },
  async [TerminalsActions.GET_TERMINALS_REF]({ commit }: any) {
    commit(TerminalsActions.SET_LOADING, true);
    const terminalsRef = await getTerminalRefs();

    commit(TerminalsActions.SET_TERMINALS_REF, terminalsRef);
    commit(TerminalsActions.SET_LOADING, false);
  },
  async [TerminalsActions.CREATE_OFFLINE_TERMINAL](
    { commit }: any,
    terminalData: OfflineTerminalPayload
  ) {
    commit(TerminalsActions.SET_LOADING, true);
    const data: CreateOfflineTerminalResponse = await createOfflineTerminal(
      terminalData
    );

    if (data.code === 0) {
      const link = createKeyFile(data.public_key);
      const key = {
        link,
        filename: TERMINAL_KEY_FILENAME,
      };
      commit(TerminalsActions.SET_KEY_LINK, key);
      router.push({ name: "offlineTerminalSuccess" });
    }
    commit(TerminalsActions.SET_LOADING, false);
  },
};

const getters = {
  terminalModel: (state: TerminalState) => (id: number) => {
    return state.terminalsRef?.transport_support.find(
      (model) => model.id === id
    );
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
