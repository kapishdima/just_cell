<template>
  <div class="schedule-field">
    <template v-for="day in days" :key="day.value">
      <checkbox-field
        :label="day.label"
        :name="name"
        direction="left"
        v-model="selected[day.value]"
        @change="(checked) => onChange(day.value, checked)"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckboxField from "../CheckboxField/CheckboxField.vue";

type SelectedItem = { [key: string]: boolean };

export default defineComponent({
  emits: ["update:modelValue"],
  props: ["name", "modelValue"],
  components: {
    CheckboxField,
  },
  setup() {
    const ALL_DAYS = "all";

    const days = [
      { label: "Пн", value: "Пн" },
      { label: "Вт", value: "Вт" },
      { label: "Ср", value: "Ср" },
      { label: "Чт", value: "Чт" },
      { label: "Пт", value: "Пт" },
      { label: "Сб", value: "Сб" },
      { label: "Нд", value: "Нд" },
      { label: "Усі дні", value: ALL_DAYS },
    ];
    return { days, ALL_DAYS };
  },

  data(): { selected: SelectedItem } {
    return {
      selected: this.modelValue || {},
    };
  },

  watch: {
    selected(value: any) {
      this.$emit("update:modelValue", value);
    },
  },

  methods: {
    onChange(item: string, checked: boolean) {
      if (item === this.ALL_DAYS) {
        this.selected = this.days.reduce<SelectedItem>((selected, day) => {
          selected[day.value] = checked;

          return selected;
        }, {});

        return;
      }

      this.selected[this.ALL_DAYS] = false;
      this.selected[item] = checked;
    },
  },
});
</script>
<style lang=""></style>
