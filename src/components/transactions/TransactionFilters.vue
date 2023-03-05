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
        <form-field :shadow="true" small label="ID замовлення">
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
import VButton from "../buttons/BaseButton/BaseButton.vue";
import StatusSelect from "./StatusSelect.vue";
import { format } from "@/components/fields/DatepickerField/format";

export default defineComponent({
  emits: ["change"],
  components: {
    FormField,
    InputField,
    DatepickerField,
    StatusSelect,
    VButton,
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
        DateFrom: format(new Date()),
        DateTo: format(new Date()),
      },
    };
  },

  mounted() {
    this.filters = { ...this.filters, ...this.$route.query };
  },

  computed: {
    isPTKS(): boolean {
      console.log(this.$route.path);
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
      this.$router.replace({
        path: this.$route.path,
        query: filters,
      });
      this.$emit("change", filters);
    },
  },
});
</script>

<style scoped></style>
