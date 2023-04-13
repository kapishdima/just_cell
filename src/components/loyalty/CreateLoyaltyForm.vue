<template lang="">
  <v-form
    class-names="loyalty-form"
    :initial-values="initialValues"
    @submit="submitLoyalty"
  >
    <template #fields="{ values }">
      <v-tabs>
        <v-tab title="Фіксована знижка">
          <div class="loyalty-form__description">
            <img src="@/assets/icons/warn-icon.svg" alt="" />
            <p>
              Даний тип знижки дає змогу додати до системи лояльності конкретні
              номери карт. Карти можна безпосередньо на будь якому терміналі
              системи JustSell. З інструкцією можете ознайомитись
              <a href="#">тут</a>
            </p>
          </div>
          <div class="loyalty-form">
            <form-field label="Введіть назву знижки">
              <input-field name="name" placeholder="Назва знижки" />
            </form-field>
            <form-field label="Введіть сумму для активації бонуса">
              <input-field placeholder="Наприклад, 300" />
            </form-field>

            <!-- <form-field label="Введіть номер карти">
              <card-field name="card_number" />
            </form-field>
            <v-caption> або знайдіть картку за номером телефону </v-caption>
            <card-select /> -->
            <terminals-select />
            <companies-select />
          </div>
        </v-tab>
        <v-tab title="Динамічний бонус">
          <div class="loyalty-form">
            <div class="checkbox-container">
              <form-field>
                <checkbox-field
                  v-model="values.all_terms"
                  name="need_shift"
                  label="Єдиний бонус для всіх терміналів"
                />
                <template #hint>
                  Користувач накопичивши бонус на одному терміналі може
                  використати його на будь якому іншому терміналі з вибраної
                  групи
                </template>
              </form-field>
            </div>
            <terminals-select v-if="!values.all_terms" />

            <form-title direction="top">
              <template #title>За кількістю покупок </template>
            </form-title>

            <form-field label="Кожен продаж безкоштовний">
              <input-field placeholder="Наприклад, кожна 5-а безкоштовний" />
            </form-field>
            <form-title direction="top">
              <template #title>Бонус при покупці</template>
            </form-title>
            <form-field label="Нараховується % від суми товару">
              <input-field placeholder="Наприклад, 10%" />
            </form-field>
            <form-field label="Фіксований бонус">
              <input-field placeholder="Наприклад, 400" />
            </form-field>
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
          <template #text>Додати знижку</template>
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
import VCaption from "../layout/Caption/VCaption.vue";
// import CardField from "@/components/fields/CardField/CardField.vue";
import CardSelect from "@/components/fields/CardSelect/CardSelect.vue";
import FormTitle from "../form/FormTitle.vue";

import TerminalsSelect from "../terminals/fields/TerminalsSelect.vue";
import CompaniesSelect from "../fields/CompaniesSelectField/CompaniesSelect.vue";

import { useToast } from "vue-toastification";
// import { TerminalsActions } from "@/store/modules/terminals";

const createInitialData = (id: string) => ({
  id,
  all_terms: false,
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
    FormTitle,
    InputField,
    VButton,
    VForm,
    VTab,
    VTabs,
    // VCaption,
    // CardField,
    // CardSelect,
    TerminalsSelect,
    CompaniesSelect,
    CheckboxField,
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

  mounted() {
    // this.$store.dispatch(TerminalsActions.GET_TERMINALS_REF);
  },

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
