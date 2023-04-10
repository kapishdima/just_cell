<!-- eslint-disable vue/no-mutating-props -->
<template lang="">
  <v-form
    class-names="loyalty-form"
    :initial-values="initialValues"
    @submit="submitLoyalty"
  >
    <template #fields="{ values }">
      <v-tabs>
        <v-tab title="Фіксована знижка">
          <div class="loyalty-form">
            <form-field label="Введіть номер карти">
              <card-field name="card_number" />
            </form-field>
            <form-field label="Введіть назву знижки">
              <input-field name="name" />
            </form-field>
          </div>
        </v-tab>
        <v-tab title="Динамічний бонус">
          <div class="terminal-form">
            <addition-connect-form
              :form-values="values"
              :form-errors="errors"
              prefix="A2C"
            />
          </div>
        </v-tab>
      </v-tabs>
      <div
        class="form-actions"
        :class="{ 'form-actions--fixed': actionsFixed }"
      >
        <v-button
          type="button"
          :loading="loading"
          @click="sendConfig"
          v-if="canEdit"
        >
          <template #text>Додати налаштування термінала</template>
        </v-button>
        <v-button
          type="button"
          :loading="loading"
          @click="activeTerminal"
          fixed
        >
          <template #text>Додати термінал</template>
        </v-button>
      </div>
    </template>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import VForm from "@/components/form/VForm.vue";
import VTab from "@/components/tabs/VTab.vue";
import VTabs from "@/components/tabs/VTabs.vue";
import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import CardField from "@/components/fields/CardField/CardField.vue";

import { useToast } from "vue-toastification";

const createInitialData = (id: string) => ({
  id,
  //   name: "Name",
  //   settings: "",
  //   max_offline_sum: 0,
  //   is_default_offline: false,
  //   is_for_all_card: true,
  //   can_user_add_card: false,
  //   endpoint_result: "",
  //   add_get: "",
  //   headers: "",
  //   payload: "",
  //   sign_stract: "",
  //   card_wait: 30,
  //   req_type: "",
  //   need_shift: false,
  //   sync_type: "",
  //   sync_period: 30,
  //   update_all_term: false,
});

export default defineComponent({
  inject: ["rules"],
  props: {
    actionsFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  components: {
    FormField,
    InputField,
    VButton,
    VForm,
    VTab,
    VTabs,
    CardField,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  data() {
    return {
      initialValues: createInitialData(""),
    };
  },

  //   mounted() {
  //     const id = this.$route.query.id as string;
  //     this.initialValues = createInitialData(id || "");
  //   },

  //   computed: {
  //     loading(): boolean {
  //       return this.$store.state.terminals.formLoading;
  //     },
  //   },

  methods: {
    submitLoyalty(values: any) {
      console.log(values);
    },
  },
});
</script>
<style lang=""></style>
