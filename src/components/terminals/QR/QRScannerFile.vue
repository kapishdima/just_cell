<template>
  <input
    type="file"
    class="qr-scanner-file"
    ref="fileInput"
    @change="onFileGet"
  />
  <v-button @click="openScan" :loading="loading">
    <template #text>Додати через фото</template>
  </v-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { scanQr } from "@/api/qr/qr.api";

export default defineComponent({
  components: {
    VButton,
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    openScan() {
      const fileInput = this.$refs.fileInput as any;
      fileInput.click();
    },
    async onFileGet(event: any) {
      this.loading = true;
      const file = event.target.files[0];

      const data = await scanQr(file);
      if (data.code === 0) {
        const isBarcode = !data.id.startsWith("https");

        const url = new URL(
          isBarcode
            ? `https://localhost/Terminal/Activate?id=${data.id}`
            : data.id
        );
        const path = url.pathname + url.search;
        this.loading = false;

        this.$router.replace(path);
      }
    },
  },
});
</script>

<style scoped></style>
