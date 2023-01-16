<template lang="">
  <div class="user-stats">
    <div class="user-stats__bonuses">Ви маєте <span>56</span> бонусів</div>
    <product-stats />
  </div>
</template>
<script lang="ts">
import ProductStats from "./ProductStats.vue";
export default {
  components: {
    ProductStats,
  },
};
</script>
<style lang=""></style>
