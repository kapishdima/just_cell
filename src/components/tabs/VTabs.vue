<template>
  <div class="tabs">
    <div class="tabs-pills">
      <div
        class="tab-pill"
        :class="{ active: selectedIndex === tab.props.title }"
        v-for="tab of tabs"
        :key="tab.props.title"
        @click="selectedIndex = tab.props.title"
      >
        {{ tab.props.title }}
      </div>
    </div>
    <div class="tabs-panes">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  provide,
  reactive,
  toRefs,
} from "vue";

export default defineComponent({
  setup(_, { slots }) {
    const state = reactive({
      selectedIndex: null as number | null,
      tabs: [] as any,
      count: 0,
    });

    provide("TabsProvider", state);

    const selectTab = (tab: number) => {
      state.selectedIndex = tab;
    };

    const update = () => {
      if (slots.default) {
        state.tabs = slots.default();
      }
    };

    onBeforeMount(() => update());
    onBeforeUpdate(() => update());

    onMounted(() => {
      selectTab(state.tabs.at(0).props.title);
    });

    return { ...toRefs(state), selectTab };
  },
});
</script>

<style scoped></style>
