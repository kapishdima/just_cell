<template>
  <div
    class="app-locales"
    :class="`${opened ? 'active' : ''} app-locales--${direction}`"
  >
    <div class="app-locales__current" @click="toggleOpened">
      <div class="app-locales__item">
        <img :src="current.icon" alt="UK" />
        <div class="app-locales__item-label">{{ current.name }}</div>
        <img
          class="app-locales__icon"
          src="@/assets/icons/chevron-down.svg"
          alt="open"
        />
      </div>
    </div>
    <div class="app-locales__dropdown">
      <div
        class="app-locales__item"
        v-for="locale in locales"
        :key="locale.name"
        @click="select(locale)"
      >
        <img :src="locale.icon" alt="UK" />
        {{ locale.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface AppLocalesProps {
  direction?: "top" | "bottom";
}

withDefaults(defineProps<AppLocalesProps>(), {
  direction: "bottom",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

type Locale = {
  icon: string;
  name: string;
};

const _locales: Locale[] = [
  {
    icon: require("@/assets/flags/uk.svg"),
    name: "Укр",
  },
  {
    icon: require("@/assets/flags/ru.svg"),
    name: "Рус",
  },
  {
    icon: require("@/assets/flags/eng.svg"),
    name: "Eng",
  },
];

export default defineComponent({
  data() {
    return {
      opened: false,
      current: _locales[0],
    };
  },

  computed: {
    locales(): Locale[] {
      return _locales.filter((locale) => locale.name !== this.current.name);
    },
  },

  methods: {
    toggleOpened() {
      this.opened = !this.opened;
    },
    close() {
      this.opened = false;
    },
    select(locale: Locale) {
      this.current = locale;
      this.close();
    },
  },
});
</script>
<style lang=""></style>
