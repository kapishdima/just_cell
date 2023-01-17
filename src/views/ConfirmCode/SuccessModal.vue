<template>
  <div class="success-modal__content">
    <img
      class="success-modal__content-icon"
      src="@/assets/icons/succes-circle-icon.svg"
      alt="Success"
    />
    <h3 class="success-modal__content-title">
      Тепер ви можете ввести новий пароль!
    </h3>
    <v-button @click="close">
      <template #text>Продовжити</template>
    </v-button>
  </div>
</template>

<script setup lang="ts">
interface SuccessModalProps {
  close: () => void;
}

defineProps<SuccessModalProps>();
</script>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    VButton,
  },
});
</script>
