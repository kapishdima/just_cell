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
        v-show="!hasSearch || !opened"
        :label="selectedLabel"
        :placeholder="inputPlaceholder"
      />
      <search-input
        v-show="opened && hasSearch"
        :placeholder="searchPlaceholder"
        @clear="clear"
        :name="name"
      />
    </div>
    <div class="select-field__dropdown">
      <template v-for="option in options" :key="option.value">
        <option-item
          :option="option"
          :checked="selected?.includes(option.value)"
          @select="select"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { createPopper } from "@popperjs/core";
interface SelectFieldProps {
  name: string;
  options: Option[];
  inputPlaceholder?: string;
  searchPlaceholder?: string;
  hasSearch?: boolean;
  modelValue?: any;
  disabled?: any;
  size?: "md" | "sm";
}

// const tooltip = ref<any>(null);
// const trigger = ref<any>(null);
// const popper = ref<any>(null);

// onMounted(() => {
//   popper.value = createPopper(trigger.value, tooltip.value, {
//     placement: "right-start",
//     modifiers: [
//       {
//         name: "offset",
//         options: {
//           offset: [0, 8],
//         },
//       },
//     ],
//   });
// });

withDefaults(defineProps<SelectFieldProps>(), {
  hasSearch: true,
  size: "md",
});
</script>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import SearchInput from "./SelectSearchInput.vue";
import SelectedInput from "./SelectSelectedInput.vue";
import OptionItem from "./OptionItemWithCheckbox.vue";

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
      selected: [],
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
      this.selectedLabel = this.setSelectedLabel(this.modelValue);
    },
    modelValue: {
      handler(selected) {
        this.selectedLabel = this.setSelectedLabel(selected);
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
      if (this.selected.includes(option.value)) {
        this.selected = this.selected.filter(
          (item: any) => item !== option.value
        );
      } else {
        this.selected = [...this.selected, option.value];
      }
      this.selectedLabel = this.setSelectedLabel(this.selected);
      this.$emit("update:modelValue", this.selected);
    },
    clear() {
      this.value = "";
    },
    onEscapePressed(event: KeyboardEvent) {
      if (event.key === "Escape") this.close();
    },
    setSelectedLabel(selected: any = []) {
      const labels = this.options
        .filter(({ value }: any) => selected.includes(value))
        .map((item: any) => item.label);

      if (labels.length > 2) {
        return `Selected ${labels.length}`;
      }

      return labels.join(",");
    },
  },
});
</script>
<style lang=""></style>
