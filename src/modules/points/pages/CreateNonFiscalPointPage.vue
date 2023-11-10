<template>
  <app-layout>
    <template #appTitle>Додати нову точку/відділення</template>
    <template #appContent>
      <div class="department-content">
        <fiscal-form @upload="onSubmit" />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import FiscalForm from "../ui/FiscalForm.vue";

export default defineComponent({
  components: {
    AppLayout,
    FiscalForm,
  },
  methods: {
    onSubmit(values: any) {
      console.log(values);
    },
  },
});
</script>
<style lang=""></style>
