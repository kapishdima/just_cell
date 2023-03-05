<template lang="">
  <div class="selected-input">
    <div class="selected-input__field">
      <span v-if="!label && placeholder" class="selected-input__placeholder">{{
        placeholder
      }}</span>
      {{ isMobile ? truncateLabel : label }}
    </div>
    <img src="@/assets/icons/chevron-down-accent.svg" />
  </div>
</template>

<script lang="ts">
import { ellipsis } from "@/utils/ellipsis";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["placeholder", "label"],

  data() {
    return {
      truncateLabel: ellipsis(this.label),
    };
  },

  computed: {
    isMobile(): boolean {
      return window.matchMedia("(max-width: 768px)").matches;
    },
  },

  watch: {
    label(value) {
      this.truncateLabel = ellipsis(value);
    },
  },
});
</script>
<style lang=""></style>
