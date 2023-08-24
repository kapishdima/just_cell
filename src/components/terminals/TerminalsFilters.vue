<template>
  <div class="filters terminal-filters">
    <div class="filters-row">
      <div class="filters-item">
        <form-field :shadow="true" small label="Темінал">
          <input-field
            name="terminal_name"
            v-model="filters.terminal_id"
            placeholder="Темінал ID"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <div class="filters-item">
        <form-field :shadow="true" small label="ID ПТКС">
          <input-field
            name="ptks_num"
            v-model="filters.ptks_num"
            placeholder="ID ПТКС"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <companies-filter v-model="filters.company_id" />
      <div class="filters-item">
        <form-field :shadow="true" small label="SN пристрою">
          <input-field
            name="serial_number"
            v-model="filters.serial_number"
            placeholder="SN пристрою"
            :disabled="false"
            size="sm"
          />
        </form-field>
      </div>
      <div class="checkbox-container">
        <checkbox-field
          name="test_mode"
          v-model="filters.test_mode"
          label="У тестовому режимі"
          direction="left"
        />
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

import CompaniesFilter from "@/components/fields/CompaniesSelectField/CompaniesFilter.vue";
import CheckboxField from "../fields/CheckboxField/CheckboxField.vue";

import VButton from "../buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  emits: ["update:filters"],
  components: {
    FormField,
    InputField,
    VButton,
    CompaniesFilter,
    CheckboxField,
  },

  data() {
    return {
      filters: {
        terminal_id: "",
        ptks_num: "",
        company_id: "",
        test_mode: "false",
        serial_number: "",
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

  methods: {
    applyFilter() {
      const filters = Object.fromEntries(
        Object.entries(this.$data.filters).filter(
          ([_, value]) => typeof value === "boolean" || Boolean(value)
        )
      );

      this.$router.replace({
        path: this.$route.path,
        query: filters,
      });

      this.$emit("update:filters", filters);
    },
  },
});
</script>

<style scoped></style>
