<template lang="">
  <div class="user-permissions__list">
    <template v-for="permission in permissions" :key="permission.title">
      <checkbox-field
        :name="permission.value"
        :label="permission.title"
        direction="right"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
interface Permission {
  title: string;
  value: string;
}
interface PermissionsListProps {
  permissions: Permission[];
}

defineProps<PermissionsListProps>();
</script>
<script lang="ts">
import CheckboxField from "../fields/CheckboxField/CheckboxField.vue";
export default {
  components: {
    CheckboxField,
  },
};
</script>
<style lang=""></style>
