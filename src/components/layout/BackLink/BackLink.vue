<template lang="">
  <div class="app-back-link" @click="back">
    <img src="@/assets/icons/chevron-left.svg" alt="" />
    {{ label }}
  </div>
</template>
<script setup lang="ts">
interface BackLinkProps {
  label: string;
}

defineProps<BackLinkProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    back() {
      this.$router.back();
    },
  },
});
</script>
<style lang=""></style>
