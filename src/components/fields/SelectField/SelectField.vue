<template>
  <div
    class="select-field"
    :class="{ 'select-field--active': opened }"
    ref="selectField"
  >
    <div
      class="select-field__container form-field__input"
      @click="!hasSearch ? toggle() : open()"
    >
      <selected-input
        v-if="!hasSearch || !opened"
        :value="value"
        :placeholder="inputPlaceholder"
      />
      <search-input
        v-if="opened && hasSearch"
        :name="name"
        :placeholder="searchPlaceholder"
        @clear="clear"
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
}

withDefaults(defineProps<SelectFieldProps>(), {
  hasSearch: true,
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
  data(): { opened: boolean; value: string; selected: Option | null } {
    return {
      opened: false,
      value: "",
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
      this.close();
      this.$emit("update:modelValue", option.value);
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
