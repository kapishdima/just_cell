<template>
  <div class="popover-action" @click="open">Сторнувати</div>
  <v-modal ref="modal" min-width="30vw">
    <template #title>Сумма для сторнування</template>
    <template #content>
      <input-field
        name="amount"
        placeholder="Введіть сумму"
        :disabled="false"
      />
    </template>
    <template #footer="{ close }">
      <v-button @click="close">
        <template #text>Сторнувати</template>
      </v-button>
    </template>
  </v-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "../fields/InputField/InputField.vue";
import VModal from "@/components/Modal/VModal.vue";
import VButton from "../buttons/BaseButton/BaseButton.vue";

export default defineComponent({
  components: {
    VModal,
    VButton,
    InputField,
  },

  methods: {
    open() {
      const modal = this.$refs.modal as typeof VModal;
      modal.open();
    },
  },
});
</script>

<style scoped></style>
