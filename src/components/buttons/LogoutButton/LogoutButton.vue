<template>
  <v-button
    variant="ghost"
    :hasMaxWidth="false"
    @click="logout"
    class-name="logout-button"
  >
    <template #text><span class="logout-button__text">Exit</span></template>
    <template #afterIcon>
      <img src="@/assets/icons/logout_icon.svg" alt="" />
    </template>
  </v-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import VButton from "../BaseButton/BaseButton.vue";
import { AuthActions } from "@/store/modules/auth";
import { useToast } from "vue-toastification";
export default defineComponent({
  components: {
    VButton,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  methods: {
    logout() {
      this.$store.dispatch(AuthActions.LOGOUT, { toast: this.toast });
    },
  },
});
</script>
<style lang=""></style>
