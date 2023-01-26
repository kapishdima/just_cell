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
        <div
          class="accordion-list"
          v-for="[name, permissions] in Object.entries(permissions)"
          :key="name"
        >
          <v-accordion>
            <template #title>{{ name }} </template>
            <template #content>
              <permissions-list :permissions="permissions" />
            </template>
          </v-accordion>
        </div>
        <div class="user-permissions__title">Шаблони</div>
        <div class="user-permissions__template">
          <checkbox-field name="payment" direction="right" label="Шаблон 1" />
        </div>
      </template>
    </v-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "../fields/FormField/FormField.vue";
import VModal from "../Modal/VModal.vue";
import VAccordion from "../accordion/VAccordion.vue";
import CheckboxField from "../fields/CheckboxField/CheckboxField.vue";
import PermissionsList from "./PermissionsList.vue";

export default defineComponent({
  components: {
    VModal,
    VAccordion,
    FormField,
    CheckboxField,
    PermissionsList,
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
