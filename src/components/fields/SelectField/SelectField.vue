<template>
  <div
    class="select-field"
    :class="{
      'select-field--active': opened,
      'select-field--disabled': disabled,
    }"
    ref="selectField"
    v-click-outside="close"
  >
    <input type="text" :name="name" class="select-input-hidden" />
    <div
      class="select-field__container form-field__input"
      :class="`form-field__input--${size}`"
      @click="!hasSearch ? toggle() : open()"
    >
      <selected-input
        v-if="!hasSearch || !opened"
        :label="selectedLabel"
        :placeholder="inputPlaceholder"
      />
      <search-input
        v-if="opened && hasSearch"
        :placeholder="searchPlaceholder"
        @clear="clear"
        :name="name"
      />
    </div>
    <div class="select-field__dropdown">
      <template v-for="option in options" :key="option.value">
        <option-item
          :option="option"
          :checked="selected?.value === option.value"
          @select="select"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
interface SelectFieldProps {
  name: string;
  options: Option[];
  inputPlaceholder?: string;
  searchPlaceholder?: string;
  hasSearch?: boolean;
  modelValue?: string;
  disabled?: any;
  size?: "md" | "sm";
}

withDefaults(defineProps<SelectFieldProps>(), {
  hasSearch: true,
  size: "md",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "./SelectSearchInput.vue";
import SelectedInput from "./SelectSelectedInput.vue";
import OptionItem from "./OptionItem.vue";

interface Option {
  label: string;
  value: string;
  icon?: string;
  hint?: string;
}

export default defineComponent({
  emits: ["update:modelValue"],
  components: {
    SearchInput,
    SelectedInput,
    OptionItem,
  },
  data(): any {
    return {
      opened: false,
      value: this.modelValue || "",
      selectedLabel: "",
      selected: null,
    };
  },

  mounted() {
    document.addEventListener("keydown", this.onEscapePressed);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.onEscapePressed);
  },

  watch: {
    selected() {
      this.value = this.selected?.label || "";
    },
    options() {
      this.selectedLabel =
        (this.$props.options as any).find(
          ({ value }: any) => value === this.$props.modelValue
        )?.label || "";
    },
    modelValue: {
      handler(selected) {
        this.selectedLabel =
          (this.$props.options as any).find(({ value }: any) => {
            return value === selected;
          })?.label || "";

        this.selected = (this.$props.options as any).find(({ value }: any) => {
          return value === selected;
        });
      },
      immediate: true,
    },
  },

  methods: {
    open() {
      this.opened = true;
    },
    toggle() {
      this.opened = !this.opened;
    },
    close() {
      this.opened = false;
    },
    select(option: Option) {
      this.selected = option;
      this.selectedLabel = option.label;
      this.$emit("update:modelValue", option.value);
      this.close();
    },
    clear() {
      this.value = "";
    },
    onEscapePressed(event: KeyboardEvent) {
      if (event.key === "Escape") this.close();
    },
  },
});
</script>
<style lang=""></style>
