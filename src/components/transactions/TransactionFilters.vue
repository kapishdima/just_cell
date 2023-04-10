<template>
  <div class="filters">
    <div class="filters-row">
      <div class="filters-item">
        <form-field :shadow="true" small label="Темінал">
          <input-field
            name="terminal_name"
            v-model="filters.terminal_name"
            placeholder="Темінал"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <div class="filters-item">
        <form-field :shadow="true" small label="Order ID">
          <input-field
            name="order_id"
            v-model="filters.order_id"
            placeholder="Order ID"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>

      <div class="filters-item">
        <form-field :shadow="true" small label="ID термінала">
          <input-field
            name="terminal_id"
            v-model="filters.terminal_id"
            placeholder="ID термінала"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>

      <div class="filters-item">
        <form-field :shadow="true" small label="Сума">
          <input-field
            name="amount"
            v-model="filters.amount"
            placeholder="Сума"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>

      <div class="filters-item" v-if="isPTKS">
        <form-field :shadow="true" small label="№ ПТКС">
          <input-field
            name="ptks_num"
            v-model="filters.ptks_num"
            placeholder="№ ПТКС"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <div class="filters-item" v-else>
        <form-field :shadow="true" small label="№ квитка">
          <input-field
            name="ptks_num"
            v-model="filters.ticket_num"
            placeholder="№ квитка"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
    </div>
    <div class="filters-row">
      <div class="filters-item">
        <form-field :shadow="true" label="RRN" small>
          <input-field
            name="rrn"
            v-model="filters.rrn"
            placeholder="RRN"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <div class="filters-item">
        <form-field :shadow="true" label="Дата початку" small>
          <datepicker-field
            name="dateFrom"
            v-model="filters.DateFrom"
            placeholder="Дата початку"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <div class="filters-item">
        <form-field :shadow="true" label="Дата кінця" small>
          <datepicker-field
            name="dateTo"
            v-model="filters.DateTo"
            placeholder="Дата "
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <companies-select v-model="filters.child_id" />
      <div class="filters-item filter-select__container">
        <status-select small v-model="filters.status" :disabled="false" />
      </div>
      <div class="filters-item filters-actions">
        <v-button :has-max-width="false" type="button" @click="applyFilter">
          <template #text>Фільтрувати</template>
        </v-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import DatepickerField from "@/components/fields/DatepickerField/DatepickerField.vue";
import { format } from "@/components/fields/DatepickerField/format";
import CompaniesSelect from "@/components/fields/CompaniesSelectField/CompaniesSelect.vue";

import VButton from "../buttons/BaseButton/BaseButton.vue";
import StatusSelect from "./fields/StatusSelect.vue";

export default defineComponent({
  emits: ["update:filters"],
  components: {
    FormField,
    InputField,
    DatepickerField,
    StatusSelect,
    VButton,
    CompaniesSelect,
  },

  data() {
    return {
      filters: {
        order_id: "",
        amount: "",
        terminal_id: "",
        terminal_name: "",
        ptks_num: undefined,
        ticket_num: "",
        status: "",
        rrn: "",
        child_id: "",
        DateFrom: format(new Date()),
        DateTo: format(new Date()),
      },
    };
  },

  mounted() {
    this.filters = { ...this.filters, ...this.$route.query };
  },

  watch: {
    "$route.query": {
      handler(value) {
        this.filters = { ...this.filters, ...value };
      },
      deep: true,
      immediate: true,
    },
  },

  computed: {
    isPTKS(): boolean {
      return this.$route.path === "/transac_ptks";
    },
  },

  methods: {
    applyFilter() {
      const filters = Object.fromEntries(
        Object.entries(this.$data.filters).filter(([_, value]) =>
          Boolean(value)
        )
      );

      const filtersData = {
        ...filters,
        perPage: filters.perPage || "10",
        page: "0",
      };

      this.$emit("update:filters", filtersData);

      this.$router.replace({
        path: this.$route.path,
        query: filtersData,
      });
    },
  },
});
</script>

<style scoped></style>
