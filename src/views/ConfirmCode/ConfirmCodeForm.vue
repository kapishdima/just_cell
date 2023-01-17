<template>
  <div class="confirm-code-content">
    <h3 class="auth-layout__title reset-password-content__title">
      Забули пароль?
    </h3>
    <form class="auth-layout__form" @submit.prevent @submit="submitCode">
      <form-field label="Введіть код" centered>
        <code-field
          v-model="code"
          name="phone"
          placeholder="_ _ _ _"
          required
        />
      </form-field>
      <div class="confirm-code-content__actions">
        <div class="confirm-code-content__phone">
          Код відправлений на номер <b>{{ tel }}</b> <br />
          <router-link
            class="confirm-code-content__link"
            :to="{ name: 'reset', query: { tel } }"
            >Змінити</router-link
          >
        </div>
        <v-button type="submit">
          <template #text>Надіслати</template>
        </v-button>
        <router-link :to="{ name: 'signin' }">
          <v-button variant="secondary">
            <template #text>Відмінити</template>
          </v-button>
        </router-link>
        <p class="confirm-code-content__resend">
          Не отримали код? <span>Надіслати ще раз</span>
        </p>
      </div>
    </form>
    <v-modal ref="successModal">
      <template #content="{ close }">
        <success-modal :close="close" />
      </template>
    </v-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import CodeField from "@/components/fields/CodeField/CodeField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VModal from "@/components/Modal/VModal.vue";

import SuccessModal from "./SuccessModal.vue";

export default defineComponent({
  components: {
    FormField,
    CodeField,
    VButton,
    SuccessModal,
    VModal,
  },

  data() {
    return {
      code: "",
      tel: this.$route.query.tel,
    };
  },

  methods: {
    async submitCode() {
      const modal = this.$refs.successModal as typeof VModal;
      const confirmed = await modal.open();

      if (confirmed) {
        this.$router.push({ name: "confirmPassword" });
      }
    },
  },
});
</script>
<style lang=""></style>
