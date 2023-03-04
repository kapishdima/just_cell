<!-- eslint-disable vue/no-mutating-props -->
<template lang="">
  <v-form
    class-names="terminal-form"
    :initial-values="initialValues"
    @submit="submitPassword"
  >
    <template #fields="{ values }">
      <form-field label="ID терміналу">
        <input-field
          v-model="values.id"
          name="name"
          type="text"
          placeholder="Введіть id термінала"
        />
      </form-field>
      <form-field label="Назва терміналу">
        <input-field
          v-model="values.name"
          name="name"
          type="text"
          placeholder="Введіть назву термінала"
        />
      </form-field>
      <settings-select v-model="values.settings" />
      <form-field label="Максимальна сума для оффлайн платежу">
        <input-field
          v-model="values.max_offline_sum"
          name="max_offline_sum"
          type="number"
          placeholder="Введіть максимальну суму для оффлайн платежу"
        />
      </form-field>
      <div class="checkbox-container">
        <checkbox-field
          name="is_default_offline"
          v-model="values.is_default_offline"
          label="Оффлайн по замовченню"
        />
      </div>
      <div class="checkbox-container">
        <checkbox-field
          v-model="values.is_for_all_card"
          name="is_for_all_card"
          label="Чи для всіх карт"
        />
      </div>
      <div class="checkbox-container">
        <checkbox-field
          v-model="values.can_user_add_card"
          name="can_user_add_card"
          label="Чи може користувач додавати карту"
        />
      </div>
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
      <form-field label="headers запиту">
        <textarea-field
          v-model="values.headers"
          name="headers"
          placeholder="Наприклад, Content-type: application/json; Host:example.it"
        />
      </form-field>
      <payload-field v-model="values.payload" />
      <sign-stract-field v-model="values.sign_stract" />
      <request-type-select v-model="values.req_type" />
      <form-field label="Час очікування картки, в секундах">
        <input-field
          v-model="values.card_wait"
          name="card_wait"
          placeholder="Наприклад, 30"
          type="number"
        />
      </form-field>
      <synctype-select v-model="values.sync_type" />
      <div class="checkbox-container">
        <checkbox-field
          v-model="values.need_shift"
          name="need_shift"
          label="Необхідне відкриття зміни"
        />
      </div>
      <form-field label="Час синхронізації, в секундах">
        <input-field
          v-model="values.sync_period"
          name="sync_period"
          placeholder="Наприклад, 30"
          type="number"
        />
      </form-field>

      <div class="checkbox-container">
        <checkbox-field
          v-model="values.update_all_term"
          name="need_shift"
          label="Оновити всі термінали"
        />
      </div>

      <div
        class="form-actions"
        :class="{ 'form-actions--fixed': actionsFixed }"
      >
        <v-button
          type="button"
          :loading="loading"
          @click="sendConfig"
          v-if="canEdit"
        >
          <template #text>Додати налаштування термінала</template>
        </v-button>
        <v-button
          type="button"
          :loading="loading"
          @click="activeTerminal"
          fixed
        >
          <template #text>Додати термінал</template>
        </v-button>
      </div>
    </template>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import PayloadField from "@/components/terminals/PayloadTemplateField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import { TerminalsActions } from "@/store/modules/terminals";

import SettingsSelect from "./SettingsSelect.vue";
import RequestTypeSelect from "./RequestMethodSelect.vue";
import SynctypeSelect from "./SyncTypeSelect.vue";
import { useToast } from "vue-toastification";

const createInitialData = (id: string) => ({
  id,
  name: "Name",
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
});

export default defineComponent({
  inject: ["rules"],
  props: {
    actionsFixed: {
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
    PayloadField,
    SettingsSelect,
    VButton,
    SynctypeSelect,
    VForm,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  data() {
    return {
      initialValues: createInitialData(""),
    };
  },

  mounted() {
    const id = this.$route.query.id as string;
    this.initialValues = createInitialData(id || "");
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.formLoading;
    },
  },

  methods: {
    sendConfig() {
      this.$store.dispatch(
        TerminalsActions.CREATE_OFFLINE_TERMINAL,
        (this.$props as any).configData
      );
    },
  },
});
</script>
<style lang=""></style>
