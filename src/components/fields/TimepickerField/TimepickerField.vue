<template lang="">
  <div class="timepicker" ref="timepicker">
    <div class="timepicker-field" @click="toggle">
      <input
        type="text"
        name="time"
        class="timepicker-field__input"
        v-model="time"
        readonly
      />
    </div>
    <div class="timepicker-dropdown" :class="{ opened: opened }">
      <h4 class="timepicker-dropdown__title">Оберіть час</h4>
      <div class="timepicker-dropdown__row">
        <div class="timepicker-dropdown__values">
          <div class="timepicker-dropdown__icon" @click="increment('hour')">
            <img
              src="@/assets/icons/chevron-top.svg"
              alt="Top"
              class="timepicker-dropdown__icon"
            />
          </div>
          <div class="timepicker-dropdown__value">{{ formattedHour }}</div>
          <div class="timepicker-dropdown__icon" @click="decrement('hour')">
            <img
              src="@/assets/icons/chevron-bottom.svg"
              alt="Bottom"
              class="timepicker-dropdown__icon"
            />
          </div>
        </div>
        <div class="timepicker-dropdown__delimetr">:</div>
        <div class="timepicker-dropdown__values">
          <img
            src="@/assets/icons/chevron-top.svg"
            alt="Top"
            class="timepicker-dropdown__icon"
            @click="increment('minuts')"
          />
          <div class="timepicker-dropdown__value">{{ formattedMinuts }}</div>
          <img
            src="@/assets/icons/chevron-bottom.svg"
            alt="Bottom"
            class="timepicker-dropdown__icon"
            @click="decrement('minuts')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const MAX_HOUR = 23;
const MAX_MINUTS = 58;

const prepareTime = (value: number) => {
  return value < 9 ? `0${value + 1}` : `${value + 1}`;
};

export default defineComponent({
  emits: ["update:modelValue"],
  props: ["modelValue"],
  data() {
    return {
      opened: false,
      hour: 0,
      minuts: 0,
      time: "00:00",
    };
  },

  computed: {
    formattedHour(): string {
      return prepareTime(this.hour);
    },
    formattedMinuts(): string {
      return prepareTime(this.minuts);
    },
  },

  watch: {
    hour() {
      this.time = this.formattedHour + ":" + this.formattedMinuts;
      this.$emit("update:modelValue", this.time);
    },
    minuts() {
      this.time = this.formattedHour + ":" + this.formattedMinuts;
      this.$emit("update:modelValue", this.time);
    },
  },

  methods: {
    increment(key: "hour" | "minuts") {
      const value = this[key];
      const canIncrementHour = key === "hour" && value < MAX_HOUR;
      const canIncrementMinuts = key === "minuts" && value < MAX_MINUTS;

      if (canIncrementHour || canIncrementMinuts) this[key] = value + 1;
    },
    decrement(key: "hour" | "minuts") {
      const value = this[key];
      if (value > 0) this[key] = value - 1;
    },
    toggle() {
      this.opened = !this.opened;
    },
    close() {
      this.opened = false;
    },
  },
});
</script>
<style lang=""></style>
