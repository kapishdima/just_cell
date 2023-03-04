<!-- eslint-disable vue/no-mutating-props -->
<template lang="">
  <v-form
    class-names="terminal-form"
    :initial-values="values"
    :schema="editTerminalSchema"
    @submit="editConfig"
  >
    <template #fields="{ values, errors }">
      <form-field label="ID терміналу" :error="errors.terminal_id">
        <input-field
          v-model="values.terminal_id"
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
      <form-field label="Адреса">
        <input-field
          v-model="values.address"
          name="address"
          type="string"
          placeholder="Введіть адресу"
        />
      </form-field>
      <status-select v-model="values.status" />
      <div class="checkbox-container">
        <checkbox-field
          name="can_offline"
          v-model="values.can_offline"
          label="Чи працює термінал оффлайн"
          :error="errors.can_offline"
        />
      </div>
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
          name="can_user_reversal"
          v-model="values.can_user_reversal"
          label="Чи може користувач робити відміну"
          :error="errors.can_user_reversal"
        />
      </div>
      <form-field label="URL-адреса зворотного виклику">
        <input-field
          v-model="values.callback_url"
          name="callback_url"
          placeholder="Наприклад, https://example.com/callback"
        />
      </form-field>
      <request-method-select
        label="Тип запиту зворотного виклику"
        v-model="values.callback_type"
        :error="errors.callback_type"
      />
      <payload-field
        v-model="values.callback_req_tmpl"
        label="Шаблон зворотного виклику"
      />
      <request-type-select
        label="Тип зворотного виклику"
        v-model="values.callback_req_type"
        :error="errors.callback_req_type"
      />
      <form-field label="Заголовки зворотного виклику">
        <textarea-field
          v-model="values.callback_headers"
          name="headers"
          placeholder="Наприклад, Content-type: application/json; Host:example.it"
        />
      </form-field>
      <sign-stract-field v-model="sign_stract" />
      <form-field label="Час тайм-ауту, в секундах">
        <input-field
          v-model="values.timeout"
          name="timeout"
          placeholder="Наприклад, 30"
          type="number"
        />
      </form-field>
      <form-field label="Час повторної відправки, в секундах">
        <input-field
          v-model="values.resendPeriod"
          name="resendPeriod"
          placeholder="Наприклад, 30"
          type="number"
        />
      </form-field>
      <div class="checkbox-container">
        <checkbox-field
          v-model="values.inShifts"
          name="inShifts"
          label="Необхідне відкриття зміни"
          :error="errors.inShifts"
        />
      </div>
      <form-field label="Час відкриття зміни">
        <timepicker-field v-model="values.shift_start" />
      </form-field>

      <form-field label="Час закриття зміни">
        <timepicker-field v-model="values.shift_end" />
      </form-field>

      <div
        class="form-actions"
        :class="{ 'form-actions--fixed': actionsFixed }"
      >
        <v-button type="submit" :loading="loading" fixed>
          <template #text>Редагувати</template>
        </v-button>
      </div>
    </template>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

import VForm from "@/components/form/VForm.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import PayloadField from "@/components/terminals/PayloadTemplateField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import TimepickerField from "@/components/fields/TimepickerField/TimepickerField.vue";
import StatusSelect from "../transactions/StatusSelect.vue";

import RequestTypeSelect from "./RequestTypeSelect.vue";
import RequestMethodSelect from "./RequestMethodSelect.vue";
import { EditTerminalData } from "@/api/terminals/terminal.model";
import { TerminalsActions } from "@/store/modules/terminals";

import SignStractField from "./SignStractField.vue";

import { editTerminalSchema } from "./validation/edit-terminal.schema";

const createInitialData = (terminal: EditTerminalData) => ({
  terminal_id: terminal.ID || "",
  status: terminal.status_code || "",
  name: terminal.name || "",
  address: terminal.address || "",
  can_offline: terminal.can_offline || false,
  max_offline_sum: terminal.max_offline_sum || "",
  can_user_reversal: terminal.can_user_reversal || false,
  callback_url: terminal.callback_url || "",
  callback_type: terminal.callback_type || "",
  callback_headers: terminal.callback_headers || "",
  callback_req_tmpl: terminal.callback_req_tmpl || "",
  sign_stract: terminal.sign_stract || "",
  callback_req_type: terminal.callback_req_type || "",
  inShifts: terminal.inShifts || false,
  timeout: terminal.timeout || "",
  resendPeriod: terminal.resendPeriod || "",
  shift_start: terminal.shift_start || "00:00",
  shift_end: terminal.shift_end || "00:00",
});

export default defineComponent({
  inject: ["rules"],
  props: {
    actionsFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    terminal: {
      type: Object,
    },
  },

  components: {
    FormField,
    InputField,
    CheckboxField,
    TextareaField,
    RequestTypeSelect,
    PayloadField,
    RequestMethodSelect,
    VButton,
    VForm,
    TimepickerField,
    StatusSelect,
    SignStractField,
  },

  setup() {
    const toast = useToast();

    return { toast, editTerminalSchema };
  },

  data() {
    return {
      values: createInitialData(this.terminal as EditTerminalData),
    };
  },

  watch: {
    terminal(value: EditTerminalData) {
      this.values = createInitialData(value);
    },
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.formLoading;
    },
  },

  methods: {
    editConfig(values: any) {
      this.$store.dispatch(TerminalsActions.EDIT_TERMINAL, {
        terminal: this.values,
        toast: this.toast,
      });
    },
  },
});
</script>
<style lang=""></style>
