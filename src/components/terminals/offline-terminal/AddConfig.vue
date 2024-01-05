<template lang="">
  <form-title v-if="!Boolean(values.add_config.length)">
    <template #title
      >У вас ще немає додадкових налаштувань <br />
      Додайти натиснувши на кнопку нижче</template
    >
  </form-title>
  <add-config-modal
    :form-values="{ add_config: values.add_config, add_data: values.add_data }"
  />
  <div class="fields-container">
    <form-field
      v-for="field of values.add_config"
      :key="field.name"
      :label="field.label"
      :error="errors[field.name]"
    >
      <input-field v-model="field.value" :name="field.name" type="text" />
    </form-field>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import AddConfigModal from "./AddConfigModal.vue";
import FormTitle from "@/components/form/FormTitle.vue";

export default defineComponent({
  props: ["formValues", "formErrors"],

  components: {
    FormTitle,
    FormField,
    InputField,
    AddConfigModal,
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
  margin-top: 24px;
}
</style>
