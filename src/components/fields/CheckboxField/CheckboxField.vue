<template>
  <input
    type="checkbox"
    class="checkbox-field__input"
    :checked="checked"
    :name="name"
  />
  <div
    class="checkbox-field"
    :class="{
      'checkbox-field--checked': checked,
      [`checkbox-field--${direction}`]: true,
    }"
    @click="check"
  >
    <label
      v-if="Boolean(label)"
      for="#checkbox-field"
      class="checkbox-field__label"
      >{{ label }}</label
    >
    <div id="checkbox-field" class="checkbox-field__box">
      <img v-if="checked" src="@/assets/icons/check-icon.svg" alt="Checked" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface CheckboxFieldProps {
  name: string;
  label?: string;
  direction?: "right" | "left";
  defaultChecked?: boolean;
}

withDefaults(defineProps<CheckboxFieldProps>(), {
  direction: "right",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["change"],
  data() {
    return {
      checked: false,
    };
  },

  methods: {
    check() {
      this.checked = !this.checked;
      this.$emit("change", this.checked);
    },
  },
});
</script>
<style lang=""></style>
