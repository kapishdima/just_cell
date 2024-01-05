<template lang="">
  <form-title v-if="!Boolean(values.add_config.length)">
    <template #title
      >У вас ще немає додадкових налаштувань <br />
      Додайти натиснувши на кнопку нижче</template
    >
  </form-title>
  <AddConfigSelectorModal
    :form-values="{
      add_config: values.add_config,
    }"
  />
  <div class="fields-container">
    <div class="" v-for="field of values.add_config" :key="field.name">
      <form-field
        v-if="field.type === 'text'"
        :label="field.label"
        :error="errors[field.name]"
      >
        <input-field
          v-model="field.value"
          :name="field.name"
          type="text"
          :disabled="!field.canEdit"
        />
      </form-field>
      <form-field
        v-if="field.type === 'tag'"
        :label="field.label"
        :error="errors[field.name]"
      >
        <input-field
          v-model="field.value"
          :name="field.name"
          type="text"
          :disabled="!field.canEdit"
        />
      </form-field>
      <div class="checkbox-container">
        <checkbox-field
          v-if="field.type === 'bool'"
          :label="field.label"
          :error="errors[field.name]"
          v-model="field.value"
          :disabled="!field.canEdit"
        />
      </div>
      <form-field :label="field.label" v-if="field.type === 'select'">
        <field-select v-modal="field.value" :data="field.data" />
      </form-field>
      <ArrayField
        v-if="field.type === 'array_text'"
        :values="field"
        :label="field.label"
        :min="field.data.min"
        :max="field.data.max"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import FieldSelect from "./FieldSelect.vue";
import ArrayField from "./ArrayField.vue";

import AddConfigSelectorModal from "./AddConfigSelectorModal.vue";
import FormTitle from "@/components/form/FormTitle.vue";

export default defineComponent({
  props: ["formValues", "formErrors"],

  components: {
    FormTitle,
    FormField,
    InputField,
    CheckboxField,
    FieldSelect,
    ArrayField,
    AddConfigSelectorModal,
  },

  data() {
    return {
      values: this.formValues || {},
      errors: this.formErrors || {},
    };
  },

  watch: {
    formValues: {
      handler(values) {
        this.values = values;
      },
      immediate: true,
    },
    formErrors: {
      handler(values) {
        this.errors = values || {};
      },
      immediate: true,
    },
  },
});
</script>
<style lang="scss">
.fields-container {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 24px;

  width: 50%;
}

.checkbox-container {
}
</style>
