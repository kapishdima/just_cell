<template>
  <v-form
    :initial-values="initialValues"
    @submit="sendReversal"
    class-names="reverse-form"
    ref="form"
  >
    <template #fields="{ values }">
      <v-protected :rule="Rules.REVERSE_TRANSACTION_SUM">
        <template #content="{ canRender }">
          <input-field
            name="amount"
            placeholder="Введіть сумму"
            :disabled="!canRender"
            v-model="values.amount"
          />
        </template>
      </v-protected>
      <v-button :loading="loading" @click="confirm">
        <template #text>Сторнувати</template>
      </v-button>
      <v-modal ref="modal" max-width="30vw">
        <template #title
          >Впевнені, що хочете провести скасування операції на суму
          {{ values.amount }}?
        </template>
        <template #content="{ close }">
          <div class="modal-actions">
            <v-button
              :has-max-width="false"
              @click="onOk(close)"
              variant="success"
            >
              <template #text>Так</template>
            </v-button>
            <v-button
              :has-max-width="false"
              @click="onCancel(close)"
              variant="error"
            >
              <template #text>Ні</template>
            </v-button>
          </div>
        </template>
      </v-modal>
    </template>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

import VForm from "@/components/form/VForm.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import VModal from "@/components/Modal/VModal.vue";
import VProtected from "@/components/protected/VProtected.vue";

import { Rules } from "@/contants/rules";

import { refundPayment } from "@/api/payments/payments";

export default defineComponent({
  emits: ["success", "error"],
  props: {
    transaction: Object,
  },

  components: {
    VForm,
    VButton,
    InputField,
    VModal,
    VProtected,
  },

  setup() {
    const toast = useToast();

    return { toast, Rules };
  },

  data() {
    return {
      loading: false,
      initialValues: {},
    };
  },

  watch: {
    transaction: {
      handler(values) {
        if (!values) {
          return;
        }

        this.initialValues = {
          order_id: values?.order_id,
          amount: values?.amount,
          data: values?.add_time.split(" ")[0],
          term: values?.bank_name.split("/")[1],
        };
      },
      immediate: true,
    },
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
        this.initialValues = {
          ...this.initialValues,
          amount: this.transaction?.amount,
        };
      }
    },
    confirm() {
      const modal = this.$refs.modal as typeof VModal;
      modal.open();
    },
    onOk(close: any) {
      const form = this.$refs.form as typeof VForm;
      close();
      form.onSubmit();
    },
    onCancel(close: any) {
      close();
      this.initialValues = {
        ...this.initialValues,
        amount: this.transaction?.amount,
      };
      this.$emit("error");
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
