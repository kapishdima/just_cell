<template>
  <input
    type="file"
    class="qr-scanner-file"
    ref="fileInput"
    @change="onFileGet"
  />
  <v-protected :rule="Rules.ADD_TERMINAL">
    <template #content="{ canRender }">
      <v-button @click="openScan" :disabled="!canRender">
        <template #text>Додати через фото</template>
      </v-button>
    </template>
  </v-protected>

  <div class="qr-scanner-file__loader" :class="{ opened: loading }">
    <app-loading :loading="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VProtected from "@/components/protected/VProtected.vue";
import AppLoading from "@/components/layout/AppLoading/AppLoading.vue";

import { Rules } from "@/contants/rules";

import { scanQr } from "@/api/qr/qr.api";
import { useToast } from "vue-toastification";

export default defineComponent({
  emits: ["stop:scan"],
  components: {
    VButton,
    AppLoading,
    VProtected,
  },

  setup() {
    const toast = useToast();
    return { toast, Rules };
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

        return;
      }

      this.toast.error("Не вдалося розпізнати код. Спробуйте ще раз");
      this.loading = false;
    },
  },
});
</script>

<style scoped></style>
