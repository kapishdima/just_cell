<template lang="">
  <div class="terminal-form__container" v-if="Boolean(this.configData)">
    <v-form
      class="terminal-form"
      @submit="sendConfig"
      :schema="offlineTerminal"
      :initial-values="initialValues"
    >
      <template #fields="{ values, errors }">
        <v-tabs>
          <v-tab title="Загальні налаштвання">
            <general-config :form-values="values" :form-errors="errors" />
          </v-tab>
          <v-tab title="Додадкові налаштування">
            <add-config-selector
              v-if="hasAddFields"
              :form-values="{
                add_config: values.add_config,
                add_data: values.add_data || [],
              }"
              :form-errors="errors.add_config"
            />
            <add-config
              v-else
              :form-values="{
                add_config: values.add_config,
                add_data: values.add_data || [],
              }"
              :form-errors="errors.add_config"
            />
          </v-tab>
        </v-tabs>
        <div
          class="form-actions"
          :class="{ 'form-actions--fixed': actionsFixed }"
        >
          <v-button type="submit" :loading="loading">
            <template #text>Додати налаштування</template>
          </v-button>
        </div>
      </template>
    </v-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

import VForm from "@/components/form/VForm.vue";
import VTab from "@/components/tabs/VTab.vue";
import VTabs from "@/components/tabs/VTabs.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";

import { TerminalsActions } from "@/store/modules/terminals";
import { Rules } from "@/contants/rules";
import { offlineTerminal } from "../validation/terminal.schema";

import GeneralConfig from "./GeneralConfig.vue";
import AddConfig from "./AddConfig.vue";
import AddConfigSelector from "./AddConfigSelector.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";

const defaultConfigData = {
  name: "",
  settings: "",
  secret_key: "",
  max_offline_sum: 0,
  is_default_offline: false,
  is_for_all_card: true,
  can_user_add_card: false,
  endpoint_result: "",
  add_get: "",
  headers: "",
  payload: "",
  sign_stract: "",
  card_wait: 30,
  req_type: "",
  need_shift: false,
  sync_type: "",
  sync_period: 30,
  update_all_term: false,
  add_data: [],
  callback_req_type: "",
  regen_key: false,
  allocation_type: "",
  ptks_num: "",
  add_config: [],
};

export default defineComponent({
  props: {
    actionsFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    configData: {
      type: Object,
      required: false,
      default() {
        return defaultConfigData;
      },
    },
  },

  components: {
    VForm,
    VTab,
    VTabs,
    VButton,
    GeneralConfig,
    AddConfig,
    AddConfigSelector,
  },

  setup() {
    const toast = useToast();

    return { toast, Rules, offlineTerminal };
  },

  data(): { initialValues: any } {
    return {
      initialValues: { ...defaultConfigData, ...this.configData },
    };
  },

  watch: {
    configData(value) {
      this.initialValues = { ...this.initialValues, ...value };
    },
  },

  computed: {
    loading(): boolean {
      return this.$store.state.terminals.formLoading;
    },
    allocType(): string {
      return this.$route.query.alloc_type as string;
    },
    terminalRef(): TerminalRef {
      return this.$store.state.terminals.terminalsRef;
    },
    hasAddFields(): boolean {
      return this.terminalRef?.add_data_fields?.some(
        (field) => field.alloc_type === this.allocType
      );
    },
  },

  methods: {
    sendConfig(values: any) {
      console.log({
        ...values,
        // alloc_type: allocType,
        add_data: values.add_config.reduce((acc: any, field: any) => {
          acc[field.name] = field.value;

          return acc;
        }, {}),
      });
      // const allocType = this.$route.query.alloc_type;
      // this.$store.dispatch(TerminalsActions.CREATE_OFFLINE_TERMINAL, {
      //   terminalData: {
      //     ...values,
      //     alloc_type: allocType,
      //     add_data: values.add_config.reduce((acc: any, field: any) => {
      //       acc[field.name] = field.value;

      //       return acc;
      //     }, {}),
      //   },
      //   toast: this.toast,
      // });
    },
  },
});
</script>
<style lang=""></style>
