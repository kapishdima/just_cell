<template>
  <div class="app-loading" v-if="loading">
    <v-spinner color="accent" />
  </div>
</template>

<script lang="ts">
import VSpinner from "@/components/spinner/VSpinner.vue";
export default {
  components: {
    VSpinner,
  },
  props: {
    loading: Boolean,
  },
};
</script>
<style lang="scss">
.app-loading {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
}
</style>
