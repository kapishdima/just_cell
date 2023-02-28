<template>
  <app-layout>
    <template #appTitle> Додати термінал </template>
    <template #appContent>
      <app-loading :loading="loading" />
      <terminal-form v-if="!loading" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import TerminalForm from "@/components/terminals/CreateTerminalForm.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import { TerminalsActions } from "@/store/modules/terminals";

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
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
  },
});
</script>
<style lang=""></style>
