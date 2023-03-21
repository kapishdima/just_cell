<template>
  <app-layout>
    <template #appTitle> Загальні налаштування терміналу </template>
    <template #appContent>
      <app-loading :loading="loading" />
      <terminal-form :actions-fixed="true" v-if="!loading" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import TerminalForm from "@/components/terminals/CreateEcommTerminalForm.vue";

import { TerminalsActions } from "@/store/modules/terminals";
// import { OfflineTerminalPayload } from "@/api/terminals/terminal.model";

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
    // configData(): OfflineTerminalPayload {
    //   return this.$store.state.terminals.terminalConfig;
    // },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_ECOMM_TERMINALS_REF);
  },
});
</script>
<style lang=""></style>
