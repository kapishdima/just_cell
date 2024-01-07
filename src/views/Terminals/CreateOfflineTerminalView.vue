<template>
  <app-layout>
    <template #appTitle> Загальні налаштування терміналу </template>
    <template #appContent>
      <app-loading :loading="loading" />
      <terminal-form
        :actions-fixed="true"
        :config-data="configData"
        v-if="!loading"
      />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import TerminalForm from "@/components/terminals/offline-terminal/OfflineTerminalForm.vue";
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
    loading(): boolean {
      return this.$store.state.terminals.loading;
    },
    allocType(): string {
      return this.$route.query.alloc_type as string;
    },
    configData(): OfflineTerminalPayload {
      return this.$store.state.terminals.terminalConfig;
    },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
    this.$store.dispatch(TerminalsActions.GET_TERMINAL_CONFIG, {
      alloc_type: this.allocType,
    });
  },
});
</script>
<style lang=""></style>
