<template>
  <form-field :label="label || 'Шаблон тіла запиту'">
    <textarea-field
      :model-value="modelValue"
      @update:model-value="input"
      name="payload"
      placeholder="Наприклад, 
  {
    'status': ${status_code},
    'error_msg':'${error_msg}',
  }"
    />
    <template #hint>
      <div class="hint-more">
        <div class="hint-more__title">
          Натисніть на потрібний елемент, щоб додати до шаблону
        </div>

        <div
          v-for="{ name, message } in hint"
          :key="name"
          class="hint-more__item"
          :class="{ 'hint-more__item--selected': payload.includes(name) }"
          @click="addTemplateElement(name)"
        >
          <span>{{ name }} {{ message }}</span>
        </div>
        <div class="hint-more-btn" @click="hintOpened = !hintOpened">
          {{ hintOpened ? "Показати меньше" : "Показати більше" }}
        </div>
      </div>
    </template>
  </form-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormField from "../../fields/FormField/FormField.vue";
import TextareaField from "../../fields/TextareaField/TextareaField.vue";

export default defineComponent({
  props: {
    modelValue: String,
    label: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      payload: "",
      hintOpened: false,
      canEdit: false,
      hintMessages: [
        { name: "${transaction_id}", message: " - ідентифікатор платежу" },
        { name: "${pay_time}", message: " – час платежу" },
        { name: "${get_time}", message: " - час отримання" },
        { name: "${device_id}", message: " – ідентифікатор пристрою" },
        { name: "${pay_inst}", message: " - идентификатор платежа" },
        { name: "${pay_mask}", message: " – маска платежу" },
        { name: "${end_pay_time}", message: " - час закінчення платежу" },
        { name: "${transaction_type}", message: " – тип транзакції" },
        { name: "${amount}", message: " – кількість" },
        { name: "${ticket_num}", message: " – номер квитка" },
        { name: "${sign}", message: " – підпис" },
      ],
    };
  },

  mounted() {
    if (this.modelValue) {
      this.payload = this.modelValue;
    }
  },

  computed: {
    hint() {
      return this.hintOpened
        ? this.hintMessages
        : this.hintMessages.slice(0, 3);
    },
  },

  methods: {
    input(value: string) {
      this.$emit("update:modelValue", value);
    },
    addTemplateElement(value: string) {
      if (this.payload.includes(value)) {
        this.payload = this.payload.replace(value, "");
      } else {
        this.payload = this.payload + value;
      }
      this.$emit("update:modelValue", this.payload);
    },
  },

  components: {
    FormField,
    TextareaField,
  },
});
</script>
<style lang=""></style>
