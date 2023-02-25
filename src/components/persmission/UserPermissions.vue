<template lang="">
  <div class="user-permissions">
    <form-field label="Права доступу*:">
      <div class="user-permissions__field">
        <div class="user-permissions__field-label">
          Права доступу користувача*:
        </div>
        <button
          class="user-permissions__field-button"
          @click="open"
          type="button"
        >
          Обрати
        </button>
      </div>
    </form-field>
    <v-modal
      ref="userPermissions"
      class="user-permissions__modal"
      showCloseButton
    >
      <template #title>Права користувача</template>
      <template #content>
        <div class="user-permissions__title">Тип системи</div>
        <template
          v-for="[name, permissions] in Object.entries(permissions)"
          :key="name"
        >
          <v-accordion>
            <template #title>{{ name }} </template>
            <template #content>
              <permissions-list :permissions="permissions" />
            </template>
          </v-accordion>
        </template>
        <div class="user-permissions__title">Шаблони</div>
        <div class="user-permissions__template">
          <checkbox-field name="payment" direction="right" label="Шаблон 1" />
        </div>
        <save-template :permissions="selected"></save-template>
      </template>
      <template #footer>
        <v-button type="button">
          <template #text> Зберегти </template>
        </v-button>
      </template>
    </v-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import VModal from "@/components/Modal/VModal.vue";
import VAccordion from "@/components/accordion/VAccordion.vue";

import PermissionsList from "./PermissionsList.vue";
import SaveTemplate from "./SaveTemplate.vue";

export default defineComponent({
  components: {
    VModal,
    VAccordion,
    FormField,
    CheckboxField,
    VButton,
    PermissionsList,
    SaveTemplate,
  },

  data() {
    return {
      permissions: {
        Термінали: [
          {
            title: "Приймати платежі",
            value: "payment",
          },
          {
            title: "Приймати платежі",
            value: "payment",
          },
        ],
        "Каталог товаров": [
          {
            title: "Приймати платежі",
            value: "payment",
          },
          {
            title: "Приймати платежі",
            value: "payment",
          },
        ],
      },
      selected: ["Приймати платежі"],
    };
  },

  methods: {
    open() {
      const modal = this.$refs.userPermissions as typeof VModal;
      modal.open();
    },
  },
});
</script>
<style lang=""></style>
