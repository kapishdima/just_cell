<template lang="">
  <div class="timepicker-range-field">
    <timepicker-field />
    <div class="timepicker-range__delimetr">-</div>
    <timepicker-field />
  </div>
</template>
<script>
import TimepickerField from "./TimepickerField.vue";
export default {
  components: {
    TimepickerField,
  },
};
</script>
<style lang=""></style>
