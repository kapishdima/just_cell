<template>
  <v-button
    type="button"
    @click="openModal"
    variant="ghost"
    :has-max-width="false"
    size="sm"
  >
    <template #beforeIcon>
      <img src="@/assets/icons/plus-icon.svg" alt="" />
    </template>
    <template #text>Додати компанію</template>
  </v-button>
  <v-modal
    ref="createAffiliation"
    class="create-affilication__form"
    min-width="30vw"
    showCloseButton
  >
    <template #title>Додати компанію</template>
    <template #content>
      <v-form
        :initial-values="initialValues"
        class-names="affiliation-form"
        @submit="add"
      >
        <template #fields="{ values }">
          <form-field label="Назва компанії">
            <input-field
              name="name"
              v-model="values.name"
              placeholder="Введіть назву компанії"
            />
          </form-field>
          <div class="affiliation-form__actions">
            <v-button type="submit">
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
import VForm from "@/components/form/VForm.vue";
import VModal from "@/components/Modal/VModal.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";

export default defineComponent({
  emits: ["success"],
  components: {
    VForm,
    VModal,
    VButton,
    FormField,
    InputField,
  },

  data() {
    return {
      initialValues: {
        name: "",
      },
    };
  },

  methods: {
    openModal() {
      const modal = this.$refs.createAffiliation as typeof VModal;
      modal.open();
    },
    add(values: any) {
      const modal = this.$refs.createAffiliation as typeof VModal;
      modal.close();
      this.initialValues.name = "";
      this.$emit("success", values.name);
    },
  },
});
</script>

<style scoped></style>
