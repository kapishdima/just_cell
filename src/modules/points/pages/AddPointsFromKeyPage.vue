<template>
  <app-layout>
    <template #appTitle>Додати нову точку/відділення</template>
    <template #appContent>
      <div class="department-content">
        <points-by-key />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import PointsByKey from "../ui/PointsByKey.vue";

export default defineComponent({
  components: {
    AppLayout,
    PointsByKey,
  },
  methods: {
    onSubmit(values: any) {
      console.log(values);
    },
  },
});
</script>
<style lang=""></style>
