<template>
  <div class="reset-password-content">
    <h3 class="auth-layout__title reset-password-content__title">
      Забули пароль?
    </h3>
    <form class="auth-layout__form">
      <form-field label="Введіть ваш номер телефону" :centered="true">
        <tel-field
          v-model="tel"
          name="phone"
          placeholder="+38 (0_ _) _ _ _-_ _-_ _"
        />
      </form-field>
      <div class="reset-password-content__actions">
        <v-button @click="sendCode">
          <template #text>Надіслати код</template>
        </v-button>
        <router-link :to="{ name: 'signin' }">
          <v-button variant="secondary">
            <template #text>Відмінити</template>
          </v-button>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import FormField from "@/components/fields/FormField/FormField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FormField,
    TelField,
    VButton,
  },

  data() {
    return {
      tel: this.$route.query.tel?.toString() || "",
    };
  },

  mounted() {
    this.tel = this.$route.query.tel?.toString() || "";
  },

  methods: {
    sendCode() {
      this.$router.push({ name: "confirm", query: { tel: this.tel } });
    },
  },
});
</script>
<style lang=""></style>
