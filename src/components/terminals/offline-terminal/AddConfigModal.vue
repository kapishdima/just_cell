<template>
  <v-button @click="openModal">
    <template #text>Додати налаштвання</template>
  </v-button>
  <v-modal ref="modal" min-width="30vw" max-width="30vw">
    <template #title>Додати налаштвання</template>
    <template #content>
      <v-form
        class="terminal-form"
        @submit="create"
        :initial-values="initialValues"
      >
        <template #fields="{ values, errors }">
          <form-field
            label="Назва налаштування"
            :error="errors.max_offline_sum"
          >
            <input-field
              v-model="values.label"
              name="max_offline_sum"
              type="text"
              placeholder="Наприклад, Протокол спілкування з контролером"
            />
          </form-field>
          <form-field label="Ключ налаштування" :error="errors.name">
            <input-field
              v-model="values.name"
              name="max_offline_sum"
              type="text"
              placeholder="Наприклад, vmc_prot"
            />
            <template #hint
              >Ключ - назва з якою буде збережено поле налаштування</template
            >
          </form-field>
          <form-field label="Значення" :error="errors.value">
            <input-field
              v-model="values.value"
              name="max_offline_sum"
              type="text"
              placeholder="Наприклад, 500"
            />
          </form-field>

          <div class="form-actions">
            <v-button :has-max-width="false" type="submit">
              <template #text>Додати</template>
            </v-button>
          </div>
        </template>
      </v-form>
    </template>
  </v-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VModal from "@/components/Modal/VModal.vue";
import VForm from "@/components/form/VForm.vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";

export default defineComponent({
  props: ["formValues"],
  components: {
    VForm,
    VButton,
    VModal,
    InputField,
    FormField,
  },

  data() {
    return {
      values: this.formValues || {},
      initialValues: {
        name: "",
        label: "",
        value: "",
      },
    };
  },

  watch: {
    formValues: {
      handler(values) {
        this.values = values;
      },
      immediate: true,
    },
  },

  methods: {
    openModal() {
      const modal = this.$refs.modal as typeof VModal;
      modal.open();
    },
    create(values: any) {
      this.values.add_config.push(values);

      this.initialValues = {
        name: "",
        label: "",
        value: "",
      };
      const modal = this.$refs.modal as typeof VModal;
      modal.close();
    },
  },
});
</script>

<style lang="scss" scoped></style>
