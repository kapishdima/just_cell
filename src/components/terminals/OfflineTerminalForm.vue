<template lang="">
  <div class="terminal-form__container">
    <form
      action="#"
      class="terminal-form"
      @submit.prevent
      @submit.stop
      @submit="onSubmit"
    >
      <settings-select v-model="settings" />
      <form-field label="Максимальна сума для оффлайн платежу">
        <input-field
          v-model="max_offline_sum"
          name="max_offline_sum"
          type="number"
          placeholder="Введіть максимальну суму для оффлайн платежу"
        />
      </form-field>
      <div class="checkbox-container">
        <checkbox-field
          name="is_default_offline"
          v-model="is_default_offline"
          label="Оффлайн по замовченню"
        />
      </div>
      <div class="checkbox-container">
        <checkbox-field
          v-model="is_for_all_card"
          name="is_for_all_card"
          label="Чи для всіх карт"
        />
      </div>
      <div class="checkbox-container">
        <checkbox-field
          v-model="can_user_add_card"
          name="can_user_add_card"
          label="Чи може користувач додавати карту"
        />
      </div>
      <form-field label="Endpoint для повідомлень про результати транзакцій">
        <input-field
          v-model="endpoint_result"
          name="endpoint_result"
          placeholder="Наприклад, https://example.com/callback"
        />
      </form-field>
      <form-field label="GET параметри для передачі">
        <input-field
          v-model="add_get"
          name="add_get"
          placeholder="Наприклад, ?param_name=param_value"
        />
      </form-field>
      <form-field label="headers запиту">
        <textarea-field
          v-model="headers"
          name="headers"
          placeholder="Наприклад, Content-type: application/json; Host:example.it"
        />
      </form-field>
      <payload-field v-model="payload" />
      <form-field label="Структура підпису">
        <textarea-field
          v-model="sign_stract"
          name="sign_stract"
          placeholder="Наприклад, ${transaction_id}${pay_time}${get_time}${device_id}${pay_inst}${pan_mask}${end_pay_time}${code}${transaction_type}${msg}${amount}${ticket_num}"
        />
      </form-field>
      <request-type-select v-model="req_type" />
      <form-field label="Час очікування картки, в секундах">
        <input-field
          v-model="card_wait"
          name="card_wait"
          placeholder="Наприклад, 30"
          type="number"
        />
      </form-field>
      <synctype-select v-model="sync_type" />
      <div class="checkbox-container">
        <checkbox-field
          v-model="need_shift"
          name="need_shift"
          label="Необхідне відкриття зміни"
        />
      </div>
      <form-field label="Час синхронізації, в секундах">
        <input-field
          v-model="sync_period"
          name="sync_period"
          placeholder="Наприклад, 30"
          type="number"
        />
      </form-field>

      <div class="checkbox-container">
        <checkbox-field
          v-model="update_all_term"
          name="need_shift"
          label="Оновити всі термінали"
        />
      </div>

      <v-button type="submit" :loading="loading">
        <template #text>Додати термінал</template>
      </v-button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import PayloadField from "@/components/terminals/PayloadTemplateField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import { TerminalsActions } from "@/store/modules/terminals";

import SettingsSelect from "./SettingsSelect.vue";
import RequestTypeSelect from "./RequestTypeSelect.vue";
import SynctypeSelect from "./SyncTypeSelect.vue";

export default defineComponent({
  components: {
    FormField,
    InputField,
    CheckboxField,
    TextareaField,
    RequestTypeSelect,
    PayloadField,
    SettingsSelect,
    VButton,
    SynctypeSelect,
  },

  data() {
    return {
      settings: "",
      max_offline_sum: 0,
      is_default_offline: false,
      is_for_all_card: false,
      can_user_add_card: false,
      endpoint_result: "",
      add_get: "",
      headers: "",
      payload: "",
      sign_stract: "",
      card_wait: 30,
      req_type: "",
      need_shift: false,
      sync_type: "",
      sync_period: 30,
      update_all_term: false,
    };
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.loading;
    },
  },

  methods: {
    onSubmit() {
      this.$store.dispatch(
        TerminalsActions.CREATE_OFFLINE_TERMINAL,
        this.$data
      );
    },
  },
});
</script>
<style lang=""></style>
