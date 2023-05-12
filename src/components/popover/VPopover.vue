<template>
  <div class="popover" v-click-outside="close" @click.stop ref="popover">
    <div class="popover-trigger" ref="trigger" @click="toggle">
      <!-- TODO: Move this into slot -->
      <img src="@/assets/icons/kebab-icon.svg" alt="Actions" />
    </div>
    <div class="popover-tooltip" ref="tooltip" :data-show="opened">
      <div class="popover-tooltip__actions" v-if="opened">
        <slot name="actions" :close="close" :hide="hide"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { createPopper } from "@popperjs/core";

export default defineComponent({
  data() {
    return {
      opened: false,
    };
  },

  mounted() {
    const trigger = this.$refs.trigger;
    const tooltip = this.$refs.tooltip;

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
          ...options.modifiers,
          { name: "eventListeners", enabled: this.opened },
        ],
      }));
    },
    close() {
      const tooltip = this.$refs.tooltip;
      tooltip.style.opacity = "1";
      this.opened = false;
    },

    hide() {
      const tooltip = this.$refs.tooltip;
      tooltip.style.opacity = "0";
    },
  },
});
</script>

<style scoped></style>
