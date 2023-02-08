<template>
  <div class="checkbox-container">
    <checkbox-field name="can_print" label="Друкувати чек" v-model="canPrint" />
  </div>
  <textarea-field v-if="canPrint" placeholder="Шаблон чека" />
</template>
<script>
import CheckboxField from "../fields/CheckboxField/CheckboxField.vue";
import TextareaField from "../fields/TextareaField/TextareaField.vue";
export default {
  data() {
    return {
      canPrint: false,
    };
  },
  components: {
    CheckboxField,
    TextareaField,
  },
};
</script>
<style lang=""></style>
