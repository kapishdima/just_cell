<template>
  <v-popover>
    <template #actions="{ hide, close }">
      <update-status-action />
      <transaction-reverse
        :transaction="transaction"
        @opened="hide"
        @closed="close"
        v-if="hasReverse"
      />
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";
import TransactionReverse from "./Reverse/TransactionReverse.vue";
import UpdateStatusAction from "./buttons/UpdateStatusAction.vue";

export default defineComponent({
  props: {
    transaction: Object,
    hasReverse: Boolean,
  },
  components: {
    VPopover,
    TransactionReverse,
    UpdateStatusAction,
  },
});
</script>

<style scoped></style>
