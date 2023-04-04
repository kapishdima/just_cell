<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appExtra>
      <div class="terminals-extra-actions" v-if="hasTerminals">
        <qr-scanner-link />
        <qr-scanner-file />
        <add-by-id />
      </div>
    </template>
    <template #appTitle>Перегляд терміналів</template>
    <template #appContent>
      <terminal-filters v-if="!loading" @update:filters="filter" />
      <terminal-table :data="terminals" :empty="!hasTerminals" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import TerminalTable from "@/components/terminals/TerminalTable.vue";
import AddById from "@/components/terminals/buttons/AddById.vue";
import QrScannerFile from "@/components/terminals/QR/QRScannerFile.vue";
import QrScannerLink from "@/components/terminals/QR/QRScannerLink.vue";

import TerminalFilters from "@/components/terminals/TerminalsFilters.vue";

import { TerminalsActions } from "@/store/modules/terminals";

export default defineComponent({
  components: {
    AppLayout,
    TerminalTable,
    AppLoading,
    QrScannerLink,
    AddById,
    QrScannerFile,
    TerminalFilters,
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
    this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
  },

  beforeUnmount() {
    this.$store.dispatch(TerminalsActions.CLEAR_TERMINALS);
  },

  methods: {
    filter(filterData: any) {
      console.log(filterData);
      this.$store.dispatch(TerminalsActions.GET_TERMINALS, filterData);
    },
  },
});
</script>
<style lang=""></style>
