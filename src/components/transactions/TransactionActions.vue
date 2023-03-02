<template>
  <v-popover>
    <template #actions>
      <transaction-reverse />
      <div class="popover-action">Оновити статус</div>
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";
import TransactionReverse from "./TransactionReverse.vue";

export default defineComponent({
  components: {
    VPopover,
    TransactionReverse,
  },
});
</script>

<style scoped></style>
