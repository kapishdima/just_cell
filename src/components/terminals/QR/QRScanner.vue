<template>
  <div class="terminal-create-btn">
    <v-button :hasMaxWidth="false" @click="openScanner">
      <template #text>Додати термінал через QR-code</template>
    </v-button>
  </div>
  <div class="qr-scanner" :class="{ 'qr-scanner--opened': isScanning }">
    <div id="reader"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createScanner } from "./qr-scanner";

import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: { VButton },
  data() {
    return {
      isScanning: false,
    };
  },

  methods: {
    async openScanner() {
      this.isScanning = true;
      createScanner("reader", (decodedUrl) => {
        this.isScanning = false;

        const url = new URL(decodedUrl);
        const path = url.pathname + url.search;
        this.$router.push(path);
      });
    },
  },
});
</script>

<style scoped></style>
