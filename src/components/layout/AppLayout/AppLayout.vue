<template>
  <div class="app-layout">
    <app-navbar />
    <div class="app-layout__row">
      <app-sidebar />
      <div class="app-layout__content">
        <h2 class="app-layout__title">
          <slot name="appTitle"></slot>
        </h2>
        <slot name="appContent"></slot>
        <div class="app-layout__actions">
          <slot name="appActions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import AppNavbar from "../AppNavbar/AppNavbar.vue";
import AppSidebar from "../AppSidebar/AppSidebar.vue";
export default {
  components: {
    AppNavbar,
    AppSidebar,
  },
};
</script>
<style lang=""></style>
