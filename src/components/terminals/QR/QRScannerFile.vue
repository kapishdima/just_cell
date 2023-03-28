<template>
  <input
    type="file"
    class="qr-scanner-file"
    ref="fileInput"
    @change="onFileGet"
  />
  <v-button @click="openScan">
    <template #text>Додати через фото</template>
  </v-button>

  <div class="qr-scanner-file__loader" :class="{ opened: loading }">
    <app-loading :loading="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import { scanQr } from "@/api/qr/qr.api";

export default defineComponent({
  emits: ["stop:scan"],
  components: {
    VButton,
    AppLoading,
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

        this.$emit("stop:scan");
        this.$router.push(path);
      }

      this.loading = false;
    },
  },
});
</script>

<style scoped></style>
