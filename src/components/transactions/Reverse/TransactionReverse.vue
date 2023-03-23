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
import { TransactionsActions } from "@/store/modules/transactions";

import ReverseAction from "../buttons/ReverseAction.vue";
import ReverseForm from "./ReverseForm.vue";

export default defineComponent({
  emits: ["opened"],
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

      this.$store.dispatch(TransactionsActions.GET_TRANSACTIONS, {
        ...this.$route.query,
        type: transactionType,
      });
    },
    open() {
      const modal = this.$refs.modal as typeof VModal;
      console.log(modal);
      modal.open();
      this.$emit("opened");
    },
  },
});
</script>

<style scoped></style>
