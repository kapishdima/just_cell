<template>
  <slot name="content" :canRender="canRender"></slot>
</template>

<script lang="ts">
import { getUserRulesFromSession } from "@/api/user/user";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    rule: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      canRender: false,
    };
  },

  mounted() {
    this.canRender = this.init();
  },

  methods: {
    init() {
      const rulesList = getUserRulesFromSession();
      if (!rulesList) {
        return false;
      }

      const rules = rulesList.map((rule: any) => rule.tag);
      return rules?.includes(this.rule) || false;
    },
  },
});
</script>

<style scoped></style>
