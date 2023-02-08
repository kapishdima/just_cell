import { Terminal, TerminalRef } from "@/api/terminals/terminal.model";
import { getTerminalRefs, getTerminalsList } from "@/api/terminals/terminals";

type TerminalState = {
  terminals: Terminal[];
  terminalsRef: TerminalRef | null;
  loading: boolean;
};

export enum TerminalsActions {
  GET_TERMINALS = "get_terminals",
  SET_TERMINALS = "set_terminals",
  GET_TERMINALS_REF = "get_terminals_ref",
  SET_TERMINALS_REF = "set_terminals_ref",
  SET_LOADING = "set_loading",
}

const state = (): TerminalState => ({
  terminals: [],
  terminalsRef: null,
  loading: false,
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
