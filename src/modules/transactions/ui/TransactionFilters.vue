<template>
  <div class="filters transactions-filters">
    <div class="filters-row">
      <div
        class="filters-item"
        v-for="tableFilter of tableFilters"
        :key="tableFilter.alias"
      >
        <form-field
          :shadow="true"
          small
          :label="tableFilter.name"
          v-if="tableFilter.filter_type === 'text'"
        >
          <input-field
            :name="tableFilter.alias"
            v-model="filters[tableFilter.alias]"
            :placeholder="tableFilter.name"
            :disabled="false"
            size="sm"
          />
        </form-field>

        <form-field
          :shadow="true"
          small
          :label="tableFilter.name"
          v-if="tableFilter.filter_type === 'date'"
        >
          <datepicker-field
            :name="tableFilter.alias"
            v-model="filters[tableFilter.alias]"
            :placeholder="tableFilter.name"
            :disabled="false"
            size="sm"
          />
        </form-field>

        <ref-select-field
          v-model="filters[tableFilter.alias]"
          :name="tableFilter.name"
          :ref-tag="tableFilter.ref_tag"
          :label="tableFilter.name"
          v-if="tableFilter.filter_type === 'ref_tag'"
        />
      </div>
      <div class="filters-actions" v-if="Boolean(tableFilters.length)">
        <v-button :has-max-width="false" type="button" @click="applyFilter">
          <template #text>Фільтрувати</template>
        </v-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { format } from "@/components/fields/DatepickerField/format";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import DatepickerField from "@/components/fields/DatepickerField/DatepickerField.vue";
import RefSelectField from "@/components/fields/RefSelectField/RefSelectField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { TableFilter, TerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  props: ["allocType"],
  emits: ["update:filters"],
  components: {
    FormField,
    InputField,
    DatepickerField,
    VButton,
    RefSelectField,
  },

  data(): { filters: any } {
    return {
      filters: {},
    };
  },

  watch: {
    "$route.query": {
      handler(value) {
        this.filters = { ...this.filters, ...value };
      },
      deep: true,
      immediate: true,
    },
    tableFilters: {
      handler() {
        this.prepareDefaultFilters();
      },
      immediate: true,
    },
  },

  computed: {
    tableFilters(): TableFilter[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.table_filters.filter(
        (filter) => filter.alloc_type === this.allocType
      );
    },
  },

  methods: {
    applyFilter() {
      const filters = Object.fromEntries(
        Object.entries(this.$data.filters).filter(([_, value]) =>
          Boolean(value)
        )
      );

      const filtersData: any = {
        ...filters,
        alloc_type: this.allocType,
        perPage: filters.perPage || "10",
        page: "0",
      };

      this.$emit("update:filters", filtersData);

      this.$router.replace({
        path: this.$route.path,
        query: filtersData,
      });
    },

    prepareDefaultFilters() {
      const filters = this.tableFilters.reduce((acc, value) => {
        if (value.filter_type === "date") {
          acc[value.alias] = format(new Date());
        } else {
          acc[value.alias] = "";
        }

        return acc;
      }, {} as any);

      this.filters = filters;
    },
  },
});
</script>

<style scoped lang="scss">
@import "./transaction.scss";
</style>
