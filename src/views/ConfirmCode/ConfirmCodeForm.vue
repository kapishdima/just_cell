<template>
  <div class="confirm-code-content">
    <h3 class="auth-layout__title reset-password-content__title">
      Забули пароль?
    </h3>
    <form class="auth-layout__form">
      <form-field label="Введіть код" :centered="true">
        <input-field name="phone" placeholder="_ _ _ _" />
      </form-field>
      <div class="confirm-code-content__actions">
        <div class="confirm-code-content__phone">
          Код відправлений на номер <b>+380 88 888 888</b> <br />
          <router-link
            class="confirm-code-content__link"
            :to="{ name: 'reset' }"
            >Змінити</router-link
          >
        </div>
        <v-button>
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
  </div>
</template>
<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
export default {
  components: {
    FormField,
    InputField,
    VButton,
  },
};
</script>
<style lang=""></style>
