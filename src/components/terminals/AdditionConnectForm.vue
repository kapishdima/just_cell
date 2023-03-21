<template>
  <div class="terminal-form__extra">
    <div>
      <v-button variant="ghost" :hasMaxWidth="false" @click="duplicateEccom">
        <template #beforeIcon>
          <img src="@/assets/icons/duplicate-icon-accent.svg" alt="" />
        </template>
        <template #text>Дублювати з Ecomm</template>
      </v-button>
    </div>
  </div>
  <form-field
    label="Endpoint для повідомлень про результати транзакцій"
    :error="errors[`${prefix}-callback`]"
  >
    <input-field
      name="ecomm-callback"
      v-model="values[`${prefix}-callback`]"
      placeholder="Наприклад, ?param_name=param_value"
    />
  </form-field>
  <form-field
    label="GET параметри для передачі"
    :error="errors[`${prefix}-callback_get`]"
  >
    <input-field
      name="add_get"
      v-model="values[`${prefix}-callback_get`]"
      placeholder="Наприклад, ?param_name=param_value"
    />
  </form-field>
  <payload-template-field
    v-model="values[`${prefix}-callback_body`]"
    :error="errors[`${prefix}-callback_body`]"
  />
  <form-field label="Redirect url" :error="errors[`${prefix}-redirect`]">
    <input-field
      name="redirect_url"
      v-model="values[`${prefix}-redirect`]"
      placeholder="Введіть Redirect url"
    />
  </form-field>
  <form-field
    label="Secret Key (підпис HmacSHA256)"
    :error="errors[`${prefix}-secret_key`]"
  >
    <password-field
      name="secrey_key"
      v-model="values[`${prefix}-secret_key`]"
      :hasGenerateButton="false"
      placeholder="Введіть або згенеруйте"
    />
    <template #hint>
      Фраза-ключ для підпису запиту через API та перевірки повідомлень від
      системи
    </template>
  </form-field>
  <sign-stract-field v-model="values[`${prefix}-sign_data`]" />
  <commision-type v-model="values[`${prefix}-comis_type`]" />
  <connection-type v-model="values[`${prefix}-request_type`]" />
  <acquirer-type v-model="values[`${prefix}-bank_list`]" />
  <ballance-type
    v-model="values[`${prefix}-balancer_type`]"
    v-if="values[`${prefix}-bank_list`]?.length > 1"
  />
</template>

<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import VButton from "../buttons/BaseButton/BaseButton.vue";

import SignStractField from "./fields/SignStractField.vue";
import PayloadTemplateField from "./fields/PayloadTemplateField.vue";
import CommisionType from "./fields/CommisionType.vue";
import ConnectionType from "./fields/ConnectionType.vue";
import AcquirerType from "./fields/AcquirerType.vue";
import BallanceType from "./fields/BalanceType.vue";

export default {
  props: ["formValues", "formErrors", "prefix"],
  components: {
    FormField,
    InputField,
    SignStractField,
    PayloadTemplateField,
    CommisionType,
    ConnectionType,
    AcquirerType,
    BallanceType,
    PasswordField,
    VButton,
  },

  data(): { values: any; errors: any } {
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
        console.log(values);
        this.errors = values || {};
        console.log(this.errors);
      },
      immediate: true,
    },
  },

  methods: {
    duplicateEccom() {
      const duplicateValues = Object.keys(this.formValues).reduce(
        (acc: any, key) => {
          if (key.startsWith("ecomm")) {
            const [_, property] = key.split("-");
            acc[`${this.prefix}-${property}`] = this.formValues[key];
          }

          return acc;
        },
        {}
      );

      this.values = duplicateValues;
    },
  },
};
</script>

<style lang="scss" scoped></style>
