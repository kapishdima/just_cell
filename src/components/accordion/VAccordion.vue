<template>
  <div class="accordion" :class="{ 'accordion--opened': opened }">
    <div class="accordion-title" @click="toggle">
      <slot name="title"></slot>
      <img
        src="@/assets/icons/chevron-down-accent.svg"
        alt="Open"
        class="accordion-icon"
      />
    </div>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion-content" v-show="opened">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      opened: false,
    };
  },

  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    start(el: HTMLDivElement) {
      el.style.height = `${el.scrollHeight}px`;
    },
    end(el: HTMLDivElement) {
      el.style.height = "";
    },
  },
});
</script>
<style lang=""></style>
