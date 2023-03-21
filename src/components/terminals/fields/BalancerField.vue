<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="balancer">
    <balancer-type v-model="balancer.type" v-if="visible" />
    <div class="fields-row">
      <template v-if="balancer.type === '1'">
        <template v-for="(bank, index) in banks" :key="bank.id">
          <form-field :label="`${bank.name} (%)`">
            <input-field
              name="value"
              :model-value="balancer.data[index]?.value"
              @update:model-value="(value: string) => onSingleValueChange(index, {bank_id: bank.id, value})"
            />
          </form-field>
        </template>
      </template>
      <template v-if="balancer.type === '3'">
        <template v-for="(bank, index) in banks" :key="bank.id">
          <form-field :label="`${bank.name} (грн)`">
            <input-field
              name="value"
              :model-value="balancer.data[index]?.value"
              @update:model-value="(value: string) => onSingleValueChange(index, {bank_id: bank.id, value})"
            />
          </form-field>
        </template>
      </template>
      <template v-if="balancer.type === '4'">
        <div
          v-for="(bank, index) in banks"
          :key="bank.id"
          class="balancer-fields-row"
        >
          <form-field :label="`${bank.name} (від)`">
            <input-field
              name="value"
              :model-value="balancer.data[index]?.value_from"
              @update:model-value="(value: string) => onRangeValueChange(index, {bank_id: bank.id, value_from: value})"
            />
          </form-field>
          <form-field :label="`${bank.name} (до)`">
            <input-field
              name="value"
              :model-value="balancer.data[index]?.value_to"
              @update:model-value="(value: string) => onRangeValueChange(index, {bank_id: bank.id, value_to: value})"
            />
          </form-field>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import set from "lodash.set";
import get from "lodash.get";

import BalancerType from "./BalanceType.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import { EcommTerminalRef } from "@/api/terminals/terminal.model";

export default defineComponent({
  props: ["modelValue", "selectedBanks"],
  emits: ["update:modelValue"],

  components: {
    BalancerType,
    FormField,
    InputField,
  },

  data(): { balancer: any; banks: any } {
    return {
      banks: [],
      balancer: {
        type: null,
        data: [],
      },
    };
  },

  computed: {
    visible() {
      return this.selectedBanks.length > 1;
    },
    banksList() {
      const ref: EcommTerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      return ref.banks_list.map((bank) => ({ id: bank.id, name: bank.name }));
    },
  },

  mounted() {
    this.banks = this.banksList.filter((bank) =>
      this.selectedBanks.includes(bank.id)
    );
  },

  watch: {
    modelValue: {
      handler(value) {
        this.balancer = value;
      },
      immediate: true,
    },
    selectedBanks: {
      handler(value) {
        this.banks = this.banksList.filter((bank) => value.includes(bank.id));
      },
      immediate: true,
    },
    balancer: {
      handler(value) {
        this.$emit("update:modelValue", value);
      },
      deep: true,
    },
  },

  methods: {
    onSingleValueChange(index: number, value: any) {
      set(this.balancer, `data.${index}`, value);
    },
    onRangeValueChange(index: number, value: any) {
      const currentValue = get(this.balancer, `data.${index}`);
      const validatedValues = Object.keys(currentValue).reduce(
        (acc: any, key) => {
          if (key !== "value") {
            acc[key] = currentValue[key];
          }

          return acc;
        },
        {}
      );
      set(this.balancer, `data.${index}`, {
        ...validatedValues,
        ...value,
      });
    },
  },
});
</script>

<style scoped></style>
