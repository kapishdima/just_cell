<template>
  <div class="checkbox-container">
    <v-protected :rule="Rules.ALL_OFFLINE_TERMINAL_UPDATE">
      <template #content="{ canRender }">
        <form-field>
          <checkbox-field
            name="update_all_term"
            label="Оновити всі термінали"
            :disabled="!canRender"
            :model-value="modelValue"
            @update:model-value="(value) => $emit('update:modelValue', value)"
          />
          <template #hint
            >При зміні параметрів зазначених вище, налаштування всіх Ваших
            терміналів буде оновлено
          </template>
        </form-field>
      </template>
    </v-protected>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VProtected from "@/components/protected/VProtected.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";

import { Rules } from "@/contants/rules";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  components: {
    VProtected,
    FormField,
    CheckboxField,
  },
  setup() {
    return { Rules };
  },
});
</script>

<style scoped></style>
