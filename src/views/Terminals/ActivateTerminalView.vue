<template>
  <app-layout>
    <template #appTitle>Активація термінала</template>
    <template #appSubtitle v-if="!canEdit"
      >Ви не маєте прав для редагування налаштувань терміналу</template
    >
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appContent>
      <offline-terminal-form
        :showTerminalName="true"
        :configData="configData"
        :actions-fixed="true"
      />
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import OfflineTerminalForm from "@/components/terminals/ActivateTerminalForm.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import { TerminalsActions } from "@/store/modules/terminals";
import { OfflineTerminalPayload } from "@/api/terminals/terminal.model";

export default defineComponent({
  inject: ["rules"],
  components: {
    AppLayout,
    AppLoading,
    OfflineTerminalForm,
  },

  data() {
    return {
      canEdit: false,
    };
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.loading;
    },
    configData(): OfflineTerminalPayload {
      return this.$store.state.terminals.terminalConfig;
    },
  },

  mounted() {
    this.canEdit = Boolean(this.rules !== null);
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
    this.$store.dispatch(TerminalsActions.GET_TERMINAL_CONFIG);
  },
});
</script>

<style scoped></style>
