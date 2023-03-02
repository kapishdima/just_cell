<template>
  <v-popover>
    <template #actions>
      <transaction-reverse />
      <router-link :to="{ name: 'editTerminal' }" class="popover-action"
        >Оновити статус</router-link
      >
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
