<template>
  <div class="app-layout">
    <app-navbar />
    <div class="app-layout__row">
      <app-sidebar />
      <div class="app-layout__content">
        <slot name="appLoading" />
        <div class="app-layout__header">
          <div class="app-layout__link">
            <slot name="appLink"></slot>
          </div>
          <h2 class="app-layout__title">
            <slot name="appTitle"></slot>
          </h2>
          <div class="app-layout__extra">
            <slot name="appExtra"></slot>
          </div>
        </div>
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
