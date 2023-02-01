<template lang="">
  <div class="schedule-table">
    <div class="schedule-row">
      <div class="schedule-row__checkbox">
        <checkbox-field />
      </div>
      <div class="schedule-row__title">Понеділок</div>
      <div class="schedule-row__time">
        <form-field>
          <input-field size="sm" variant="accent" />
        </form-field>
        <div class="line">-</div>
        <form-field>
          <input-field size="sm" variant="accent" />
        </form-field>
      </div>
      <div class="schedule-row__branch">
        <form-field>
          <input-field />
        </form-field>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CheckboxField from "../CheckboxField/CheckboxField.vue";
import FormField from "../FormField/FormField.vue";
import InputField from "../InputField/InputField.vue";
export default {
  components: {
    CheckboxField,
    FormField,
    InputField,
  },
};
</script>
<style lang=""></style>
