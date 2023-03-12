<template>
  <app-layout>
    <template #appTitle>Додати нову точку/відділення</template>
    <template #appContent>
      <div class="department-content">
        <create-department />
      </div>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import CreateDepartment from "./CreateDepartmentForm.vue";

export default defineComponent({
  components: {
    AppLayout,
    CreateDepartment,
  },
});
</script>
<style lang=""></style>
