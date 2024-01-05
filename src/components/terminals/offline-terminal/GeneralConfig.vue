<template lang="">
  <settings-select v-model="values.settings" :error="errors.settings" />
  <div class="checkbox-container">
    <form-field>
      <checkbox-field
        name="is_default_offline"
        v-model="values.is_default_offline"
        label="Оффлайн за замовчуванням"
      />
      <template #hint>
        У всіх нових терміналах буде дозволена робота в режимі offline
      </template>
    </form-field>
  </div>
  <form-field
    label="Максимальна сума для оффлайн платежу"
    :error="errors.max_offline_sum"
  >
    <input-field
      v-model="values.max_offline_sum"
      name="max_offline_sum"
      type="number"
      placeholder="Введіть максимальну суму для оффлайн платежу"
    />
  </form-field>
  <alloc-type-field v-model="values.allocation_type" />
  <form-field
    label="Ідентифікатор ПТКС"
    :error="errors.ptks_num"
    v-if="values.allocation_type === '1'"
  >
    <input-field
      v-model="values.ptks_num"
      name="ptks_num"
      type="number"
      placeholder="Введіть ідентифікатор ПТКС"
    />
  </form-field>
  <form-field label="Secret Key (підпис HmacSHA256)" :error="errors.secret_key">
    <password-field
      name="secrey_key"
      v-model="values.secret_key"
      :hasGenerateButton="true"
      placeholder="Введіть або згенеруйте"
    />
    <template #hint>
      Потрібне для підпису запитів зі сторони клієнтів (наприклад запит статусу
      транзакції)
    </template>
  </form-field>

  <form-title>
    <template #title
      >Ви можете отримувати результати транзакцій на свій backend. <br />
      Для цього заповніть поля нижче</template
    >
  </form-title>

  <form-field
    label="Endpoint для повідомлень про результати транзакцій"
    :error="errors.endpoint_result"
  >
    <input-field
      v-model="values.endpoint_result"
      name="endpoint_result"
      placeholder="Наприклад, https://example.com/callback"
    />
  </form-field>
  <form-field label="GET параметри для передачі">
    <input-field
      v-model="values.add_get"
      name="add_get"
      placeholder="Наприклад, ?param_name=param_value"
    />
  </form-field>
  <form-field label="Заголовки запиту">
    <textarea-field
      v-model="values.headers"
      name="headers"
      placeholder="Наприклад, Content-type: application/json; Host:example.it"
    />
  </form-field>
  <payload-field v-model="values.payload" :error="errors.payload" />

  <sign-stract-field v-model="values.sign_stract" :error="errors.sign_stract" />
  <div class="checkbox-container">
    <form-field>
      <checkbox-field
        v-model="values.regen_key"
        name="regen_key"
        label="Згенерувати новий приватний ключ підпису"
      />
    </form-field>
  </div>
  <request-method-select
    label="Тип запиту зворотного виклику"
    v-model="values.req_type"
    :error="errors.req_type"
  />
  <request-type-select
    label="Тип зворотного виклику"
    v-model="values.callback_req_type"
    :error="errors.callback_req_type"
  />
  <form-field
    label="Час очікування картки, в секундах"
    :error="errors.card_wait"
  >
    <input-field
      v-model="values.card_wait"
      name="card_wait"
      placeholder="Наприклад, 30"
      type="number"
    />
    <template #hint>
      Час, який термінал очікує, що клієнт прикладе платіжний пристрій
    </template>
  </form-field>
  <synctype-select v-model="values.sync_type" :error="errors.sync_type" />
  <div class="checkbox-container">
    <form-field>
      <checkbox-field
        v-model="values.need_shift"
        name="need_shift"
        label="Необхідне відкриття зміни"
      />
      <template #hint>
        Робота на терміналі не почнеться, якщо не буде користувач не проведе
        авторизацію по відкриттю зміни
      </template>
    </form-field>
  </div>
  <form-field label="Час синхронізації, в секундах" :error="errors.sync_period">
    <input-field
      v-model="values.sync_period"
      name="sync_period"
      placeholder="Наприклад, 30"
      type="number"
    />
    <template #hint>
      Як часто термінал буде виходити на зв’язок з сервером для передачі та
      отримання даних
    </template>
  </form-field>
  <!-- <form-field label="Додаткова інформація">
    <textarea-field
      v-model="values.add_data"
      :maxLength="1500"
      placeholder="Введіть додадкову інформацію"
    />
    <template #hint>
      Будь-які додаткові дані, які необхідні для роботи або інтеграції з іншими
      додатками, наприклад, токен для авторизації на сторонньому сервері. Їх
      можна отримувати на самому терміналі запитом /Config/get
    </template>
  </form-field> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import PayloadField from "@/components/terminals/fields/PayloadTemplateField.vue";
import FormTitle from "@/components/form/FormTitle.vue";
import PasswordField from "../../fields/PasswordField/PasswordField.vue";

import AllocTypeField from "../fields/AllocTypeField.vue";
import SignStractField from "../fields/SignStractField.vue";
import SettingsSelect from "../fields/SettingsSelect.vue";
import RequestMethodSelect from "../fields/RequestMethodSelect.vue";
import RequestTypeSelect from "../fields/RequestTypeSelect.vue";
import SynctypeSelect from "../fields/SyncTypeSelect.vue";

export default defineComponent({
  props: ["formValues", "formErrors"],

  components: {
    FormField,
    InputField,
    CheckboxField,
    TextareaField,
    RequestMethodSelect,
    RequestTypeSelect,
    PayloadField,
    SettingsSelect,
    SynctypeSelect,
    SignStractField,
    FormTitle,
    PasswordField,
    AllocTypeField,
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
<style lang=""></style>
