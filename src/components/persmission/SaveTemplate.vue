<template lang="">
  <div class="user-permissions__save" v-if="permissions.length > 0">
    <checkbox-field
      name="save"
      direction="right"
      label="Зберегти як шаблон"
      variant="secondary"
    />
  </div>
</template>
<script setup lang="ts">
interface SaveTemplateProps {
  permissions: string[];
}

defineProps<SaveTemplateProps>();
</script>

<script lang="ts">
import { defineComponent } from "vue";
import CheckboxField from "../fields/CheckboxField/CheckboxField.vue";
export default defineComponent({
  components: {
    CheckboxField,
  },
});
</script>
<style lang=""></style>
