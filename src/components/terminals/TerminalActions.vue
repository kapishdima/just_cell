<template>
  <v-popover>
    <template #actions="{ close }">
      <edit-action :terminal="terminal" />
      <template v-for="command of commands" :key="command.value">
        <div class="popover-action" @click="sendCommand(command.value, close)">
          <span v-if="!loading">{{ command.label }}</span>
          <div class="popover-action__loader">
            <v-spinner v-if="loading" color="accent" />
          </div>
        </div>
      </template>
    </template>
  </v-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VPopover from "@/components/popover/VPopover.vue";
import VSpinner from "../spinner/VSpinner.vue";
import { TerminalRef } from "@/api/terminals/terminal.model";
import { sendTerminalCommand } from "@/api/terminals/terminals";

import EditAction from "./buttons/EditAction.vue";

export default defineComponent({
  props: ["terminal"],
  components: {
    VPopover,
    VSpinner,
    EditAction,
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
    async sendCommand(value: string, close: any) {
      this.loading = true;
      const data = await sendTerminalCommand({
        terminal_id: this.terminal.ID,
        cmd_id: value,
      });
      console.log(data);
      this.loading = false;
      close();
    },
  },
});
</script>

<style scoped></style>
