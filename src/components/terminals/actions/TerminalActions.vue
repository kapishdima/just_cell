<template>
  <edit-action :terminal="terminal" />
  <template v-for="command of commands" :key="command.value">
    <div class="popover-action" @click="sendCommand(command.value)">
      <span v-if="!loading">{{ command.label }}</span>
      <div class="popover-action__loader">
        <v-spinner v-if="loading" color="accent" />
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSpinner from "../../spinner/VSpinner.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import { sendTerminalCommand } from "@/api/terminals/terminals";

import EditAction from "./EditAction.vue";
import { useToast } from "vue-toastification";

export default defineComponent({
  emits: ["close"],
  props: ["terminal"],
  components: {
    VSpinner,
    EditAction,
  },

  setup() {
    const toast = useToast();

    return { toast };
  },

  data() {
    return {
      loading: false,
    };
  },

  computed: {
    commands(): { value: string; label: string }[] {
      const ref: TerminalRef = this.$store.state.terminals.terminalsRef;

      if (!ref) {
        return [];
      }

      const commands = ref.trm_cmd.map((type) => ({
        value: type.id.toString(),
        label: type.name || "",
      }));

      return commands;
    },
  },

  methods: {
    async sendCommand(value: string) {
      try {
        this.loading = true;
        await sendTerminalCommand({
          terminal_id: this.terminal.ID,
          cmd_id: value,
        });

        this.loading = false;
        this.$emit("close");
        this.toast.success("Команду успішно відправлено!");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style scoped></style>
