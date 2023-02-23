<template>
  <div class="filters">
    <div class="filters-row">
      <form-field :shadow="true" small label="Темінал">
        <input-field
          name="terminal_name"
          v-model="filters.terminal_name"
          placeholder="Темінал"
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>
      <form-field :shadow="true" small label="ID замовлення">
        <input-field
          name="order_id"
          v-model="filters.order_id"
          placeholder="ID замовлення"
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>

      <form-field :shadow="true" small label="ID термінала">
        <input-field
          name="terminal_id"
          v-model="filters.terminal_id"
          placeholder="ID термінала"
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>

      <form-field :shadow="true" small label="Сума">
        <input-field
          name="amount"
          v-model="filters.amount"
          placeholder="Сума"
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>

      <form-field :shadow="true" small label="Номер ПТКС">
        <input-field
          name="ptks_num"
          v-model="filters.ptks_num"
          placeholder="Номер ПТКС"
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>
    </div>
    <div class="filters-row">
      <form-field :shadow="true" label="Дата початку" small>
        <datepicker-field
          name="dateFrom"
          v-model="filters.DateFrom"
          placeholder="Дата початку"
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>
      <form-field :shadow="true" label="Дата кінця" small>
        <datepicker-field
          name="dateTo"
          v-model="filters.DateTo"
          placeholder="Дата "
          :disabled="false"
          size="sm"
          @blur="onBlur"
        />
      </form-field>
      <div class="filter-select__container">
        <status-select small v-model="filters.status" @blur="onBlur" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import SelectField from "@/components/fields/SelectField/SelectField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import DatepickerField from "@/components/fields/DatepickerField/DatepickerField.vue";
import { format } from "@/components/fields/DatepickerField/format";
import StatusSelect from "./StatusSelect.vue";

export default defineComponent({
  emits: ["change"],
  components: {
    FormField,
    InputField,
    DatepickerField,
    StatusSelect,
  },

  data() {
    return {
      filters: {
        order_id: "",
        amount: "",
        terminal_id: "",
        terminal_name: "",
        ptks_num: "",
        status: "",
        DateFrom: format(new Date()),
        DateTo: format(new Date()),
      },
    };
  },

  methods: {
    onBlur() {
      this.$emit("change", this.$data.filters);
    },
  },
});
</script>

<style scoped></style>
