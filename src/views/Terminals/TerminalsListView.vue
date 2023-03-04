<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appExtra>
      <div class="terminals-extra-actions" v-if="hasTerminals">
        <qr-scanner />
        <add-by-id />
      </div>
    </template>
    <template #appTitle>Перегляд терміналів</template>
    <template #appContent>
      <terminals-empty-view v-if="!hasTerminals" />
      <terminal-table v-else :data="terminals" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import TerminalTable from "@/components/terminals/TerminalTable.vue";
import QrScanner from "@/components/terminals/QR/QRScanner.vue";
import AddById from "@/components/terminals/buttons/AddById.vue";

import { TerminalsActions } from "@/store/modules/terminals";
import TerminalsEmptyView from "./TerminalsEmptyView.vue";

export default defineComponent({
  components: {
    AppLayout,
    TerminalTable,
    AppLoading,
    TerminalsEmptyView,
    QrScanner,
    AddById,
  },

  computed: {
    loading() {
      return this.$store.state.terminals.loading;
    },
    terminals() {
      return this.$store.state.terminals.terminals;
    },
    hasTerminals() {
      return (
        this.$store.state.terminals.terminals &&
        this.$store.state.terminals.terminals.length > 0
      );
    },
  },

  mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS);
  },

  beforeUnmount() {
    this.$store.dispatch(TerminalsActions.CLEAR_TERMINALS);
  },
});
</script>
<style lang=""></style>
