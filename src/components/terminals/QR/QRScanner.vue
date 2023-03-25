<template>
  <div class="terminal-create-btn">
    <add-by-qr @click="openScanner" />
  </div>
  <div class="qr-scanner" :class="{ 'qr-scanner--opened': isScanning }">
    <div id="reader"></div>
    <div class="qr-scanner__actions">
      <v-button @click="stopScan">
        <template #text>Відмінити</template>
      </v-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createScanner, stop } from "./qr-scanner";
import { Rules } from "@/contants/rules";

import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import AddByQr from "../buttons/AddByQr.vue";

export default defineComponent({
  components: { VButton, AddByQr },
  data() {
    return {
      isScanning: false,
    };
  },

  setup() {
    return { Rules };
  },

  methods: {
    async openScanner() {
      this.isScanning = true;
      createScanner("reader", (decodedUrl) => {
        this.isScanning = false;
        this.$router.push(decodedUrl);
      });
    },

    async stopScan() {
      await stop();
      this.isScanning = false;
    },
  },
});
</script>

<style scoped></style>
