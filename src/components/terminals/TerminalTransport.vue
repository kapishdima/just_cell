<template>
  <div class="checkbox-container">
    <checkbox-field
      name="can_print"
      label="Використовується як транспортний термінал"
      v-model="hasTransport"
    />
  </div>
  <template v-if="hasTransport">
    <terminal-transports-select />
    <form-field label="№ транспортного засобу">
      <input-field
        name="transport_number"
        placeholder="Введіть транспортного засобу"
      />
    </form-field>
  </template>
</template>
<script>
import CheckboxField from "../fields/CheckboxField/CheckboxField.vue";
import FormField from "../fields/FormField/FormField.vue";
import InputField from "../fields/InputField/InputField.vue";
import TerminalTransportsSelect from "./TerminalTransportsSelect.vue";

export default {
  data() {
    return {
      hasTransport: false,
    };
  },
  components: {
    CheckboxField,
    FormField,
    InputField,
    TerminalTransportsSelect,
  },
};
</script>
<style lang=""></style>
