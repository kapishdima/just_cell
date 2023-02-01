<template>
  <div class="branch-list">
    <template v-for="branch in branches" :key="branch.id">
      <branch-card :id="branch.id" :name="branch.name" :route="route" />
    </template>
  </div>
</template>
<script setup lang="ts">
interface Branch {
  id: string;
  name: string;
}
interface BranchListProps {
  branches: Branch[];
  route: string;
}

defineProps<BranchListProps>();
</script>
<script lang="ts">
import BranchCard from "./BranchCard.vue";
export default {
  components: {
    BranchCard,
  },
};
</script>
<style lang=""></style>
