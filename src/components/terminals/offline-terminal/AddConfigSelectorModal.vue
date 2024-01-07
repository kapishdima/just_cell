<template>
  <v-button @click="openModal">
    <template #text>Додати налаштвання</template>
  </v-button>
  <v-modal ref="modal" min-width="40vw" max-width="40vw" min-height="80vh">
    <template #title>Додати налаштвання</template>
    <template #content>
      <v-form
        class="terminal-form"
        @submit="create"
        :initial-values="initialValues"
      >
        <template #fields="{ values }">
          <AddDataFieldsSelect :values="values" />

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
import AddDataFieldsSelect from "./AddDataFieldsSelect.vue";

export default defineComponent({
  props: ["formValues"],
  components: {
    VForm,
    VButton,
    VModal,
    AddDataFieldsSelect,
  },

  data() {
    return {
      values: this.formValues || {},
      initialValues: {
        type: "",
        name: "",
        label: "",
        value: "",
        data: null,
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
        type: "",
        name: "",
        label: "",
        value: "",
        data: null,
      };
      const modal = this.$refs.modal as typeof VModal;
      modal.close();
    },
  },
});
</script>

<style lang="scss" scoped></style>
