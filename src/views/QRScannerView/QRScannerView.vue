<template>
  <app-layout>
    <template #appContent>
      <div class="qr-scanner">
        <h4 class="qr-scanner__title">
          Будь ласка, тримайте камеру та термінал нерухомо. Намагайтеся
          помістити код у білу область
        </h4>
        <div class="reader-container">
          <div id="reader"></div>
        </div>
        <div class="qr-scanner__actions">
          <qr-scanner-file v-if="showFileScanner" />
          <v-button @click="stopScan">
            <template #text>Відмінити</template>
          </v-button>
        </div>
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { createScanner, stop } from "./qr-scanner";

import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import QrScannerFile from "@/components/terminals/QR/QRScannerFile.vue";

export default defineComponent({
  components: {
    AppLayout,
    VButton,
    QrScannerFile,
  },

  data() {
    return {
      showFileScanner: false,
    };
  },

  mounted() {
    createScanner(
      "reader",
      (path: string) => {
        this.$router.push(path);
      },
      () => {
        this.showFileScanner = true;
      }
    );
  },

  methods: {
    async stopScan() {
      await stop();
      this.$router.back();
    },
  },
});
</script>
<style lang=""></style>
