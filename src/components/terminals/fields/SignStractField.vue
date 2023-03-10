<template>
  <form-field
    :label="label || 'Структура підпису (SHA256WithRSA)'"
    :error="error"
  >
    <textarea-field
      :model-value="modelValue"
      @update:model-value="input"
      @update:selection="changeSelection"
      name="sign_stract"
      placeholder="Наприклад, ${transaction_id}${pay_time}${get_time}"
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
import { decodeHtml } from "@/utils/htmlParser";

export default defineComponent({
  props: {
    modelValue: String,
    label: String,
    error: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      payload: "",
      hintOpened: false,
      selectionStart: 0,
      selectionEnd: 0,
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
        { name: "${pan_mask}", message: "- маскований номер карти" },
        { name: "${code}", message: " - код результату транзакції" },
        { name: "${msg}", message: " - повідомлення коду помилки" },
        { name: "${rrn}", message: " - інтифікатор в системах МПС" },
        {
          name: "${is_test}",
          message: " - тип транзакції, тестова чи продова",
        },
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

  watch: {
    payload(value) {
      const decoded = decodeHtml(value);
      this.payload = decodeHtml(value);
      this.$emit("update:modelValue", decoded);
    },
  },

  methods: {
    input(value: string) {
      this.payload = value;
    },
    addTemplateElement(value: string) {
      if (this.payload.includes(value)) {
        this.payload = this.payload.replace(value, "");
      } else {
        this.payload.substring(this.selectionEnd, this.payload.length);
        this.payload =
          this.payload.substring(0, this.selectionStart) +
          value +
          this.payload.substring(this.selectionEnd, this.payload.length);
      }
      this.$emit("update:modelValue", this.payload);
    },
    changeSelection(selection: any) {
      this.selectionStart = selection.start;
      this.selectionEnd = selection.end;
    },
  },

  components: {
    FormField,
    TextareaField,
  },
});
</script>
<style lang=""></style>
