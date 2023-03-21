<template>
  <div class="terminal-form__container">
    <v-form :initial-values="initialValues" @submit="send">
      <template #fields="{ values, errors }">
        <v-tabs>
          <v-tab title="Ecomm">
            <div class="terminal-form ecomm-form__container">
              <form-field label="Назва" :error="errors.name">
                <input-field
                  name="name"
                  v-model="values.name"
                  placeholder="Введіть назву термінала"
                />
              </form-field>
              <form-field label="Сайт" :error="errors['ecomm-site']">
                <input-field
                  name="ecomm-site"
                  v-model="values['ecomm-site']"
                  placeholder="Введіть адресу сайта"
                />
              </form-field>
              <form-field
                label="Endpoint для повідомлень про результати транзакцій"
                :error="errors['ecomm-callback']"
              >
                <input-field
                  name="ecomm-callback"
                  v-model="values['ecomm-callback']"
                  placeholder="Наприклад, ?param_name=param_value"
                />
              </form-field>
              <form-field
                label="GET параметри для передачі"
                :error="errors['ecomm-callback_get']"
              >
                <input-field
                  name="ecomm-callback_get"
                  v-model="values['ecomm-callback_get']"
                  placeholder="Наприклад, ?param_name=param_value"
                />
              </form-field>
              <payload-template-field
                v-model="values['ecomm-callback_body']"
                :error="errors['ecomm-callback_body']"
              />
              <form-field
                label="Redirect url"
                :error="errors['ecomm-redirect']"
              >
                <input-field
                  name="ecomm-redirect"
                  v-model="values['ecomm-redirect']"
                  placeholder="Введіть Redirect url"
                />
              </form-field>
              <form-field
                label="Secret Key (підпис HmacSHA256)"
                :error="errors['ecomm-secret_key']"
              >
                <password-field
                  name="ecomm-secret_key"
                  v-model="values['ecomm-secret_key']"
                  :hasGenerateButton="false"
                  placeholder="Введіть або згенеруйте"
                />
                <template #hint>
                  Фраза-ключ для підпису запиту через API та перевірки
                  повідомлень від системи
                </template>
              </form-field>

              <sign-stract-field v-model="values['ecomm-sign_data']" />
              <commision-type v-model="values['ecomm-comis_type']" />
              <div v-if="values['ecomm-comis_type'] === '3'" class="fields-row">
                <form-field label="Комісія клієнта">
                  <input-field
                    type="number"
                    name="client_comis"
                    placeholder="Введіть комісію клієнта"
                    v-model="values['ecomm-client_comis']"
                  />
                </form-field>
                <form-field label="Комісія мерчента">
                  <input-field
                    type="number"
                    name="merch_comis"
                    placeholder="Введіть комісію мерчента"
                    v-model="values['ecomm-merch_comis']"
                  />
                </form-field>
              </div>
              <connection-type v-model="values['ecomm-request_type']" />
              <form-field
                label="Час очікування на введення картки клієнтом"
                :error="errors['ecomm-time_out']"
              >
                <input-field
                  name="ecomm-time_out"
                  v-model="values['ecomm-time_out']"
                  placeholder="Наприклад, 30"
                />
              </form-field>
              <acquirer-type v-model="values['ecomm-bank_list']" />
              <balancer-field
                :model-value="values['ecomm-balancer']"
                :selected-banks="values['ecomm-bank_list']"
              />
            </div>
          </v-tab>
          <v-tab title="Account to Card">
            <div class="terminal-form">
              <addition-connect-form
                :form-values="values"
                :form-errors="errors"
                prefix="A2C"
              />
            </div>
          </v-tab>
          <v-tab title="Card to Account">
            <div class="terminal-form">
              <addition-connect-form
                :form-values="values"
                :form-errors="errors"
                prefix="C2A"
              />
            </div>
          </v-tab>
        </v-tabs>
        <div
          class="form-actions"
          :class="{ 'form-actions--fixed': actionsFixed }"
        >
          <v-button type="submit">
            <template #text>Додати налаштування</template>
          </v-button>
        </div>
      </template>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VForm from "@/components/form/VForm.vue";
import VButton from "../buttons/BaseButton/BaseButton.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";
import VTab from "@/components/tabs/VTab.vue";
import VTabs from "@/components/tabs/VTabs.vue";

import SignStractField from "./fields/SignStractField.vue";
import PayloadTemplateField from "./fields/PayloadTemplateField.vue";
import CommisionType from "./fields/CommisionType.vue";
import ConnectionType from "./fields/ConnectionType.vue";
import AcquirerType from "./fields/AcquirerType.vue";
import BalancerField from "./fields/BalancerField.vue";
import AdditionConnectForm from "./AdditionConnectForm.vue";

export default defineComponent({
  props: {
    actionsFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    // configData: {
    //   type: Object,
    //   required: false,
    //   default() {
    //     return defaultConfigData;
    //   },
    // },
  },
  components: {
    VForm,
    VTabs,
    VTab,
    VButton,
    FormField,
    InputField,
    SignStractField,
    PayloadTemplateField,
    CommisionType,
    ConnectionType,
    AcquirerType,
    BalancerField,
    PasswordField,
    AdditionConnectForm,
  },

  data() {
    return {
      initialValues: {
        name: "",
        "ecomm-site": "",
        "ecomm-callback": "",
        "ecomm-callback_get": "",
        "ecomm-callback_body": "",
        "ecomm-redirect": "",
        "ecomm-secret_key": "",
        "ecomm-sign_data": "",
        "ecomm-comis_type": "",
        "ecomm-request_type": "",
        "ecomm-time_out": "",
        "ecomm-bank_list": [],
        "ecomm-balancer": {
          type: null,
          data: [],
        },
        "ecomm-client_comis": "",
        "ecomm-merch_comis": "",
        "A2C-callback": "",
        "A2C-callback_get": "",
        "A2C-callback_body": "",
        "A2C-redirect": "",
        "A2C-secret_key": "",
        "A2C-sign_data": "",
        "A2C-comis_type": "",
        "A2C-request_type": "",
        "A2C-bank_list": "",
        "A2C-balancer": {
          type: null,
          data: [],
        },
        "C2A-callback": "",
        "C2A-callback_get": "",
        "C2A-callback_body": "",
        "C2A-redirect": "",
        "C2A-secret_key": "",
        "C2A-sign_data": "",
        "C2A-comis_type": "",
        "C2A-request_type": "",
        "C2A-bank_list": "",
        "C2A-balancer": {
          type: null,
          data: [],
        },
      },
    };
  },

  methods: {
    send(values: any) {
      console.log(values);
    },
  },
});
</script>

<style scoped></style>
