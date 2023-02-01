<template lang="">
  <form-field>
    <template #beforeIcon>
      <img src="@/assets/icons/search-icon_accent.svg" alt="" />
    </template>
    <input-field name="search" size="sm" variant="accent" />
  </form-field>
</template>
<script lang="ts">
import FormField from "../FormField/FormField.vue";
import InputField from "../InputField/InputField.vue";
export default {
  components: {
    InputField,
    FormField,
  },
};
</script>
<style lang=""></style>
