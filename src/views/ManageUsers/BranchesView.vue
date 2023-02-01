<template>
  <app-layout>
    <template #appTitle>Управління користувачами</template>
    <template #appContent>
      <branch-list :branches="branches" route="manageUser" />
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import BranchList from "@/components/branch/BranchList.vue";

export default {
  components: {
    AppLayout,
    BranchList,
  },

  data() {
    return {
      branches: [
        {
          id: "1",
          name: "Точка “Цукерка”",
        },
        {
          id: "2",
          name: "Точка “Цукерка”",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
