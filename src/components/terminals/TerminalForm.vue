<template lang="">
  <div class="terminal-form__container">
    <form action="#" class="terminal-form">
      <branch-select />
      <form-field label="Назва терміналу">
        <input-field name="name" placeholder="Введіть назву терміналу" />
      </form-field>
      <type-select />
      <city-select />
      <form-field label="Адреса">
        <input-field name="address" placeholder="Введіть адресу" />
      </form-field>
      <terminals-model-select />
      <div class="checkbox-container">
        <checkbox-field
          name="isOffline"
          label="Чи працює термінал в оффлайні"
        />
      </div>
      <form-field label="Максимальна сума для оффлайн платежу">
        <input-field
          name="max_offline_sum"
          type="number"
          placeholder="Введіть максимальну суму для оффлайн платежу"
        />
      </form-field>
      <div class="checkbox-container">
        <checkbox-field
          name="canReturn"
          label="Чи дозволені повернення напряму з терміналу"
        />
      </div>
      <form-field label="Endpoint для повідомлень про результати транзакцій">
        <input-field
          name="result_endpoint"
          placeholder="Наприклад, https://example.com/callback"
        />
      </form-field>
      <form-field label="GET параметри для передачі">
        <input-field
          name="get_params"
          placeholder="Наприклад, ?param_name=param_value"
        />
      </form-field>
      <form-field label="headers запиту">
        <textarea-field
          name="header"
          placeholder="Наприклад, Content-type: application/json; Host:example.it"
        />
      </form-field>
      <form-field label="Шаблон тіла запиту">
        <textarea-field
          name="template_request"
          placeholder="Наприклад, {\r\n\'status\':${status_code},\r\n\'error_msg\':\'${error_msg}\',\r\n\'terminal_id\':\'${terminal_id}\',\r\n\'transaction_id\':\'${transaction_id}\',\r\n\'amount\':\'${amount}\',\r\n\'transaction_time\':\'${transaction_time}\',\r\n\'tax_num\':\'${tax_num}\',\r\n\'fiscal_transaction_id\':\'${fiscal_transaction_id}\'\r\n}"
        />
        <template #hint>
          <span>${transaction_id} - идентификатор платежа</span>
          <span>${pay_time} – время платежа</span>
        </template>
      </form-field>
      <form-field label="Структура підпису">
        <textarea-field
          name="template_request"
          placeholder="Наприклад, ${transaction_id}${pay_time}${get_time}${device_id}${pay_inst}${pan_mask}${end_pay_time}${code}${transaction_type}${msg}${amount}${ticket_num}"
        />
        <template #hint>
          <span>${transaction_id} - идентификатор платежа</span>
          <span>${pay_time} – время платежа</span>
        </template>
      </form-field>
      <request-type-select />
      <form-field label="Час очікування картки, в секундах">
        <input-field name="timeout" placeholder="Наприклад, 30" type="number" />
      </form-field>
      <form-field label="Суми відображення на терміналі">
        <input-field name="sums" placeholder="Наприклад, 5 10 15" />
      </form-field>
      <terminal-check />
      <terminal-transport />
      <timepicker-field />
      <timepicker-range />
    </form>
  </div>
</template>
<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import BranchSelect from "@/components/branch/BranchSelect.vue";
import CitySelect from "@/components/fields/CitySelect/CitySelect.vue";
import TextareaField from "@/components/fields/TextareaField/TextareaField.vue";
import TimepickerField from "@/components/fields/TimepickerField/TimepickerField.vue";
import TimepickerRange from "@/components/fields/TimepickerField/TimepickerRange.vue";

import TypeSelect from "./TerminalTypeSelect.vue";
import TerminalsModelSelect from "./TerminalsModelSelect.vue";
import RequestTypeSelect from "./RequestTypeSelect.vue";
import TerminalCheck from "./TerminalCheck.vue";
import TerminalTransport from "./TerminalTransport.vue";

export default {
  components: {
    FormField,
    InputField,
    CheckboxField,
    BranchSelect,
    TypeSelect,
    CitySelect,
    TerminalsModelSelect,
    TextareaField,
    RequestTypeSelect,
    TerminalCheck,
    TerminalTransport,
    TimepickerField,
    TimepickerRange,
  },
};
</script>
<style lang=""></style>
