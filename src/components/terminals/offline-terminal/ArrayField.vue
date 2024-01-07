<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form-field :label="label">
    <div class="container">
      <div class="record" v-for="(field, index) of records" :key="index">
        <InputField
          name="name"
          v-model="values.value[index]"
          :disabled="!canEdit"
        />
        <div v-if="canRemove" class="button" @click="remove(index)">-</div>
        <div
          v-if="canAdd && records.length - 1 === index"
          class="button"
          @click="add"
        >
          +
        </div>
      </div>
    </div>
  </form-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";

export default defineComponent({
  props: ["label", "values", "min", "max", "canEdit", "name"],
  components: {
    FormField,
    InputField,
  },

  data() {
    return {
      records: [""],
      canAdd: true,
      canRemove: false,
    };
  },

  watch: {
    values: {
      handler(value) {
        console.log(value);
        if (!value.value || !value.value.length) {
          return;
        }
        this.records = value.value;
      },
      immediate: true,
    },
    "records.length": {
      handler(length) {
        this.canAdd = this.canEdit && length < parseInt(this.max || Infinity);
        this.canRemove = this.canEdit && length > parseInt(this.min || 1);
      },
      immediate: true,
    },
  },

  methods: {
    add() {
      this.records.push("");
    },
    remove(index: number) {
      this.records = this.records.filter((_, item) => item !== index);
    },
  },
});
</script>

<style scoped>
.button {
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #ff7a2e;
  font-size: 18px;
  color: #fff;

  cursor: pointer;
}

.record {
  display: flex;
  align-items: center;
  column-gap: 8px;
}

.container {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>
