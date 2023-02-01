<template>
  <div class="schedule-field">
    <template v-for="day in days" :key="day.value">
      <checkbox-field
        :label="day.label"
        :name="name"
        direction="left"
        :defaultChecked="selected[day.value]"
        @change="(checked) => onChange(day.value, checked)"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
interface ScheduleFieldProps {
  name: string;
}

defineProps<ScheduleFieldProps>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
import CheckboxField from "../CheckboxField/CheckboxField.vue";

type SelectedItem = { [key: string]: boolean };

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

export default defineComponent({
  components: {
    CheckboxField,
  },
  data(): { selected: SelectedItem } {
    return {
      selected: {},
    };
  },

  methods: {
    onChange(item: string, checked: boolean) {
      if (item === ALL_DAYS && checked) {
        this.selected = days.reduce<SelectedItem>((selected, day) => {
          selected[day.value] = true;

          return selected;
        }, {});

        return;
      }

      this.selected[item] = checked;
    },
  },
});
</script>
<style lang=""></style>
