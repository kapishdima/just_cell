<template>
  <div class="popover" v-click-outside="close" @click.stop ref="popover">
    <div class="popover-trigger" ref="trigger" @click="toggle">
      <img src="@/assets/icons/kebab-icon.svg" alt="Actions" />
    </div>
    <div class="popover-tooltip" ref="tooltip" :data-show="opened">
      <div class="popover-tooltip__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createPopper, Instance as PopoverInstance } from "@popperjs/core";

export default defineComponent({
  data(): { opened: boolean; popover: PopoverInstance | null } {
    return {
      opened: false,
      popover: null,
    };
  },
  mounted() {
    const trigger = this.$refs.trigger as HTMLDivElement;
    const tooltip = this.$refs.tooltip as HTMLDivElement;

    this.popover = createPopper(trigger, tooltip, {
      placement: "left-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [-10, 10],
          },
        },
      ],
    });
  },

  methods: {
    toggle() {
      this.opened = !this.opened;

      this.popover?.update();

      this.popover?.setOptions((options) => ({
        ...options,
        modifiers: [
          ...(options.modifiers as any),
          { name: "eventListeners", enabled: this.opened },
        ],
      }));
    },
    close() {
      this.opened = false;
    },
  },
});
</script>

<style scoped></style>
