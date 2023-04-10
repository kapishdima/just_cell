<template>
  <div class="tab-pane" v-show="isActive">
    <slot />
  </div>
</template>

<script>
import { ref, inject, watch, onBeforeMount } from "vue";

export default {
  props: ["title"],
  setup(props) {
    const isActive = ref(false);
    const tabs = inject("TabsProvider");

    watch(
      () => tabs.selectedIndex,
      () => {
        isActive.value = props.title === tabs.selectedIndex;
      }
    );

    onBeforeMount(() => {
      isActive.value = props.title === tabs.selectedIndex;
    });
    return { isActive };
  },
};
</script>

<style lang="scss" scoped></style>
