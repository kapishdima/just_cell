<template>
  <div class="app-empty">
    <div class="app-empty__content">
      <h4 class="app-empty__title">
        <slot name="emptyTitle"></slot>
      </h4>
      <div class="app-empty__actions">
        <slot name="emptyActions"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
