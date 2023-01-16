<template>
  <div class="app-layout">
    <app-navbar />
    <div class="app-layout__row">
      <app-sidebar />
      <div class="app-layout__content">
        <slot name="appContent"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import AppNavbar from "@/components/AppNavbar/AppNavbar.vue";
import AppSidebar from "@/components/AppSidebar/AppSidebar.vue";
export default {
  components: {
    AppNavbar,
    AppSidebar,
  },
};
</script>
<style lang=""></style>
