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
          <qr-scanner-file v-if="showFileScanner" @stop:scan="stopScan" />
          <v-button @click="cancelScan">
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
      loading: false,
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
    async cancelScan() {
      this.stopScan();
      this.$router.back();
    },
    async stopScan() {
      await stop();
    },
    updateLoading(value: boolean) {
      this.loading = value;
    },
  },
});
</script>
<style lang=""></style>
