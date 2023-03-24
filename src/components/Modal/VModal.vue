<template>
  <Teleport to="body">
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      :class="{
        'modal--opened': opened,
        [`${classNames}`]: Boolean(classNames),
      }"
      @click="close"
      ref="modal"
    >
      <div class="modal-content" :style="{ minWidth, maxWidth }" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <slot name="title"></slot>
          </h4>
          <div class="modal-close-button" v-if="showCloseButton" @click="close">
            <img src="@/assets/icons/close-icon.svg" alt="Close" />
          </div>
        </div>
        <slot name="content" :close="close"></slot>
        <div class="modal-footer">
          <slot name="footer" :close="close"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  modalController: null,
  props: {
    classNames: String,
    showCloseButton: {
      type: Boolean,
      default: false,
    },
    minWidth: String,
    maxWidth: String,
  },
  data() {
    return {
      opened: false,
    };
  },

  mounted() {
    document.addEventListener("keydown", this.onKeydown);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  },

  methods: {
    open() {
      let resolve;
      let reject;

      const popupPromise = new Promise<boolean>((ok, fail) => {
        resolve = ok;
        reject = fail;
      });

      this.$options.modalController = { resolve, reject };
      this.opened = true;

      return popupPromise;
    },
    close() {
      this.$options.modalController.resolve(true);
      this.opened = false;
    },
    onKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        this.close();
      }
    },
  },
});
</script>
<style lang=""></style>
