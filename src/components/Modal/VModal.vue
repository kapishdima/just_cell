<template>
  <div class="modal" tabindex="-1" role="dialog" ref="modal">
    <div class="modal-content">
      <slot name="content"></slot>
    </div>
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
  mounted() {
    this.open();
  },

  methods: {
    open() {
      let resolve;
      let reject;
      const popupPromise = new Promise<boolean>((ok, fail) => {
        resolve = ok;
        reject = fail;
      });

      this.$options.popupController = { resolve, reject };
      this.opened = true;

      return popupPromise;
    },
    close() {
      this.$options.popupController.resolve(false);
      this.$router.back();
      this.opened = false;
    },
  },
});
</script>
<style lang=""></style>
