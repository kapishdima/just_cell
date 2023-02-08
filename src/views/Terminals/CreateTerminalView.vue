<template>
  <app-layout>
    <template #appTitle> Додати термінал </template>
    <template #appContent>
      <app-loading :loading="loading" />
      <terminal-form />
    </template>
    <template #appActions>
      <v-button>
        <template #text>Додати термінал</template>
      </v-button>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import TerminalForm from "@/components/terminals/TerminalForm.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { TerminalsActions } from "@/store/modules/terminals";

export default defineComponent({
  components: {
    AppLayout,
    AppLoading,
    TerminalForm,
    VButton,
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
