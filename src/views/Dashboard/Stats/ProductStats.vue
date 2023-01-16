<template>
  <div class="products-stats">
    <h4 class="products-stats__title">Сума проданих товарів</h4>
    <div class="products-stats__list">
      <div class="products-stats__list-item">
        <div class="products-stats__list-item__title">За сьогодні:</div>
        <div class="products-stats__list-item__value">{{ month }}</div>
      </div>
      <div class="products-stats__list-item">
        <div class="products-stats__list-item__title">За місяць:</div>
        <div class="products-stats__list-item__value">{{ today }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      month: 78,
      today: 78,
    };
  },
});
</script>
<style lang=""></style>
