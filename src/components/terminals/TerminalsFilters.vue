<template>
  <div class="filters">
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
      <companies-select v-model="filters.child_id" />
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

import CompaniesSelect from "@/components/fields/CompaniesSelectField/CompaniesSelect.vue";

import VButton from "../buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  emits: ["update:filters"],
  components: {
    FormField,
    InputField,
    VButton,
    CompaniesSelect,
  },

  data() {
    return {
      filters: {
        terminal_id: "",
        child_id: "",
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
        Object.entries(this.$data.filters).filter(([_, value]) =>
          Boolean(value)
        )
      );

      const filtersData = {
        ...filters,
        // perPage: filters.perPage || "10",
        // page: "0",
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
