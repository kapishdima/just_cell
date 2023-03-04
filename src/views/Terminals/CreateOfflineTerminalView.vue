<template>
  <app-layout>
    <template #appTitle> Загальні налаштування терміналу </template>
    <template #appContent>
      <app-loading :loading="loading" />
      <terminal-form :actions-fixed="true" :config-data="configData" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import TerminalForm from "@/components/terminals/OfflineTerminalForm.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import { TerminalsActions } from "@/store/modules/terminals";
import { OfflineTerminalPayload } from "@/api/terminals/terminal.model";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TerminalForm,
  },

  computed: {
    loading() {
      return this.$store.state.terminals.loading;
    },
    configData(): OfflineTerminalPayload {
      return this.$store.state.terminals.terminalConfig;
    },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
    this.$store.dispatch(TerminalsActions.GET_TERMINAL_CONFIG);
  },
});
</script>
<style lang=""></style>
