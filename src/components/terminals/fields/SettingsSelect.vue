<template>
  <form-field label="Тип налаштування" :error="error">
    <select-field
      :options="settings"
      name="settings"
      input-placeholder="Оберіть тип налаштування"
      search-placeholder="Введіть тип налаштування"
      :has-search="false"
      :model-value="modelValue"
      @update:model-value="select"
    />
    <template #hint>
      <p>
        Параметр вказує, як будуть застосовуватись налаштування то терміналів.
        <br />
        <br />
        <b>Всі термінали</b> – вказані параметри автоматично застосовуються для
        всіх нових терміналів. <br />
        <b>Кожний термінал окремо</b> – вказані параметри не застосовуються до
        нових терміналів. Кожний термінал налаштовуються окремо
      </p>
    </template>
  </form-field>
</template>
<script lang="ts">
import FormField from "../../fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    error: String,
  },
  emits: ["update:modelValue"],
  components: {
    FormField,
    SelectField,
  },

  computed: {
    settings(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.offline_settings.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
      }));
    },
  },

  methods: {
    select(value: string) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
