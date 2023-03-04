<template>
  <reverse-action @click="open" />
  <v-modal ref="modal" min-width="30vw">
    <template #title>Сумма для сторнування</template>
    <template #content="{ close }">
      <reverse-form
        :transaction="transaction"
        @success="onSuccess(close)"
        @error="close"
      />
    </template>
  </v-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VModal from "@/components/Modal/VModal.vue";
import { format } from "@/components/fields/DatepickerField/format";
import { TransactionsActions } from "@/store/modules/transactions";

import ReverseAction from "../buttons/ReverseAction.vue";
import ReverseForm from "./ReverseForm.vue";

export default defineComponent({
  props: {
    transaction: Object,
  },
  components: {
    VModal,
    ReverseForm,
    ReverseAction,
  },

  methods: {
    async onSuccess(close: any) {
      await close();

      const transactionType = Object.keys(this.transaction as any).includes(
        "ticket_num"
      )
        ? "TRANSPORT"
        : "PTKS";

      const DateFrom = this.$route.query.DateFrom || format(new Date());
      const DateTo = this.$route.query.DateTo || format(new Date());
      const filters = {
        ...this.$route.query,
        DateFrom,
        DateTo,
      };

      this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
        ...filters,
        type: transactionType,
      });
    },
    open() {
      const modal = this.$refs.modal as typeof VModal;
      modal.open();
    },
  },
});
</script>

<style scoped></style>
