<template>
  <app-layout>
    <template #appLoading>
      <app-loading :loading="loading" />
    </template>
    <template #appExtra v-if="hasTerminals">
      <router-link :to="{ name: 'createTerminal' }" class="terminal-create-btn">
        <v-button :hasMaxWidth="false">
          <template #text>Додати термінал</template>
        </v-button>
      </router-link>
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
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import TerminalsEmptyView from "./TerminalsEmptyView.vue";

import { TerminalsActions } from "@/store/modules/terminals";

export default defineComponent({
  components: {
    AppLayout,
    TerminalTable,
    AppLoading,
    VButton,
    TerminalsEmptyView,
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

  async mounted() {
    this.$store.dispatch(TerminalsActions.GET_TERMINALS);
  },
});
</script>
<style lang=""></style>
