<template>
  <v-popover>
    <template #actions>
      <transaction-reverse :transaction="transaction" />
      <div class="popover-action">Оновити статус</div>
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";
import TransactionReverse from "./Reverse/TransactionReverse.vue";

export default defineComponent({
  props: {
    transaction: Object,
  },
  components: {
    VPopover,
    TransactionReverse,
  },
});
</script>

<style scoped></style>
