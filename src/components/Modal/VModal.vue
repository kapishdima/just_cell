<template>
  <div
    class="modal"
    :class="{ 'modal--opened': opened }"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-content">
      <slot name="content" :close="close"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  modalController: null,
  data() {
    return {
      opened: false,
    };
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
  },
});
</script>
<style lang=""></style>
