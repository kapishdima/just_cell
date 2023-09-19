<template>
  <app-layout>
    <template #appTitle>Додати нову точку/відділення</template>
    <template #appContent>
      <div class="department-content">
        <upload-fiscal-key @upload="onSubmit" />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UploadFiscalKey from "../ui/UploadFiscalKey.vue";

export default defineComponent({
  components: {
    AppLayout,
    UploadFiscalKey,
  },
  methods: {
    onSubmit(values: any) {
      console.log(values);
    },
  },
});
</script>
<style lang=""></style>
