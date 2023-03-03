<template>
  <v-form
    :initial-values="initialValues"
    @submit="sendReversal"
    class-names="reverse-form"
  >
    <template #fields="{ values }">
      <input-field
        name="amount"
        placeholder="Введіть сумму"
        :disabled="false"
        v-model="values.amount"
      />
      <v-button type="submit" :loading="loading">
        <template #text>Сторнувати</template>
      </v-button>
    </template>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VForm from "@/components/form/VForm.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import { refundPayment } from "@/api/payments/payments";
import { useToast } from "vue-toastification";

export default defineComponent({
  emits: ["success", "error"],
  props: {
    transaction: Object,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  components: {
    VForm,
    VButton,
    InputField,
  },

  data() {
    return {
      loading: false,
      initialValues: {},
    };
  },

  mounted() {
    if (!this.initialValues) {
      return;
    }

    this.initialValues = {
      order_id: this.transaction?.order_id,
      amount: this.transaction?.amount,
      data: this.transaction?.add_time.split(" ")[0],
      term: this.transaction?.bank_name.split("/")[1],
    };
  },

  methods: {
    async sendReversal(values: any) {
      try {
        this.loading = true;
        const data = await refundPayment(values);
        if (data.code !== 0) {
          this.$emit("error");
        } else {
          this.toast.success("Операція пройшла успішно!");
          this.$emit("success");
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped>
.reverse-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
}
</style>
