<template lang="">
  <div class="terminal-form__container" v-if="Boolean(this.configData)">
    <v-form
      action="#"
      class="terminal-form"
      :schema="activateTerminalSchema"
      :initial-values="initialValues"
      @submit="activeTerminal"
    >
      <template #fields="{ values, errors }">
        <form-field label="ID терміналу" :error="errors.id">
          <input-field
            v-model="values.id"
            name="id"
            type="text"
            placeholder="Введіть id термінала"
          />
        </form-field>
        <form-field label="Назва терміналу" v-if="showTerminalName">
          <input-field
            v-model="values.name"
            name="name"
            type="text"
            placeholder="Введіть назву термінала"
          />
        </form-field>
        <div class="checkbox-container">
          <form-field>
            <checkbox-field
              name="is_default_offline"
              v-model="values.is_default_offline"
              label="Оффлайн"
            />
            <template #hint>
              У всіх нових терміналах буде дозволена робота в режимі offline
            </template>
          </form-field>
        </div>
        <form-field label="Максимальна сума для оффлайн платежу">
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
        <form-field
          label="Secret Key (підпис HmacSHA256)"
          :error="errors.secret_key"
        >
          <password-field
            name="secrey_key"
            v-model="values.secret_key"
            :hasGenerateButton="true"
            placeholder="Введіть або згенеруйте"
          />
          <template #hint>
            Потрібне для підпису запитів зі сторони клієнтів (наприклад запит
            статусу транзакції)
          </template>
        </form-field>
        <form-title>
          <template #title
            >Ви можете отримувати результати транзакцій на свій backend. <br />
            Для цього заповніть поля нижче</template
          >
        </form-title>

        <form-field label="Endpoint для повідомлень про результати транзакцій">
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
        <form-field label="Headers запиту">
          <textarea-field
            v-model="values.headers"
            name="headers"
            placeholder="Наприклад, Content-type: application/json; Host:example.it"
          />
        </form-field>
        <payload-field v-model="values.payload" />
        <sign-stract-field v-model="values.sign_stract" />
        <request-method-select
          v-model="values.req_type"
          label="Тип запиту зворотного виклику"
        />
        <request-type-select
          label="Тип зворотного виклику"
          v-model="values.callback_req_type"
          :error="errors.callback_req_type"
        />
        <form-field label="Час очікування картки, в секундах">
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
        <div class="checkbox-container">
          <form-field>
            <checkbox-field
              v-model="values.need_shift"
              name="need_shift"
              label="Необхідне відкриття зміни"
            />
            <template #hint>
              Робота на терміналі не почнеться, якщо не буде користувач не
              проведе авторизацію по відкриттю зміни
            </template>
          </form-field>
        </div>
        <form-field label="Час синхронізації, в секундах">
          <input-field
            v-model="values.sync_period"
            name="sync_period"
            placeholder="Наприклад, 30"
            type="number"
          />
          <template #hint>
            Як часто термінал буде виходити на зв’язок з сервером для передачі
            та отримання даних
          </template>
        </form-field>

        <form-field label="Додаткова інформація">
          <textarea-field
            v-model="values.add_data"
            :maxLength="1500"
            placeholder="Введіть додадкову інформацію"
          />
          <template #hint>
            Будь-які додаткові дані, які необхідні для роботи або інтеграції з
            іншими додатками, наприклад, токен для авторизації на сторонньому
            сервері. Їх можна отримувати на самому терміналі запитом /Config/get
          </template>
        </form-field>

        <div
          class="form-actions"
          :class="{ 'form-actions--fixed': actionsFixed }"
        >
          <v-protected :rule="Rules.ADD_TERMINAL">
            <template #content="{ canRender }">
              <v-button
                type="submit"
                :loading="loading"
                fixed
                :disabled="!canRender"
              >
                <template #text>Активувати термінал</template>
              </v-button>
            </template>
          </v-protected>
        </div></template
      >
    </v-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import PayloadField from "@/components/terminals/fields/PayloadTemplateField.vue";
import SignStractField from "@/components/terminals/fields/SignStractField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VForm from "@/components/form/VForm.vue";
import VProtected from "../protected/VProtected.vue";
import FormTitle from "@/components/form/FormTitle.vue";
import PasswordField from "@/components/fields/PasswordField/PasswordField.vue";

import AllocTypeField from "./fields/AllocTypeField.vue";

import { activateTerminalSchema } from "./validation/terminal.schema";
import { TerminalsActions } from "@/store/modules/terminals";

import RequestMethodSelect from "./fields/RequestMethodSelect.vue";
import RequestTypeSelect from "./fields/RequestTypeSelect.vue";

import { Rules } from "@/contants/rules";

const defaultConfigData = {
  id: "",
  name: "",
  secret_key: "",
  max_offline_sum: 0,
  is_default_offline: false,
  is_for_all_card: true,
  can_user_add_card: false,
  endpoint_result: "",
  add_get: "",
  headers: "",
  payload: "",
  sign_stract: "",
  card_wait: 30,
  req_type: "",
  need_shift: false,
  sync_period: 30,
  add_data: "",
  callback_req_type: "",
  allocation_type: "",
  ptks_num: "",
};

export default defineComponent({
  inject: ["rules"],
  props: {
    actionsFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    showTerminalName: {
      type: Boolean,
      required: false,
      default: false,
    },
    configData: {
      type: Object,
      required: false,
      default() {
        return defaultConfigData;
      },
    },
    isActivateForm: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  components: {
    FormField,
    InputField,
    CheckboxField,
    TextareaField,
    RequestTypeSelect,
    RequestMethodSelect,
    PayloadField,
    VButton,
    SignStractField,
    VForm,
    FormTitle,
    PasswordField,
    VProtected,
    AllocTypeField,
  },

  setup() {
    const toast = useToast();

    return { toast, activateTerminalSchema, Rules };
  },

  data(): { canEdit: boolean; canEditId: boolean; initialValues: any } {
    return {
      canEdit: false,
      canEditId: false,
      initialValues: this.configData,
    };
  },

  mounted() {
    const id = this.$route.query.id;
    this.initialValues = {
      ...(this.$props as any).configData,
      id,
    };
    this.canEdit = Boolean(this.rules !== null);
    this.canEditId = Boolean(id?.length);
  },

  watch: {
    configData(value) {
      this.initialValues = { ...this.initialValues, ...value };
    },
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.formLoading;
    },
  },

  methods: {
    activeTerminal(terminalConfig: any) {
      this.$store.dispatch(TerminalsActions.ACTIVATE_TERMINAL, {
        terminalConfig,
        toast: this.toast,
      });
    },
  },
});
</script>
<style lang=""></style>
