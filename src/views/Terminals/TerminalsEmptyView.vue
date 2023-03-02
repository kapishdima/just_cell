<template lang="">
  <app-empty>
    <template #emptyTitle>У вас ще немає терміналів</template>
    <template #emptyActions>
      <div class="terminals-extra-actions">
        <qr-scanner />
        <router-link
          :to="{ name: 'activateTerminal' }"
          class="terminal-create-btn"
        >
          <v-button :hasMaxWidth="false">
            <template #text>Додати термінал по номеру</template>
          </v-button>
        </router-link>
      </div>
    </template>
  </app-empty>
</template>
<script>
import AppEmpty from "@/components/layout/AppLayout/AppEmpty.vue";
import QrScanner from "@/components/terminals/QR/QRScanner.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
export default {
  components: {
    AppEmpty,
    VButton,
    QrScanner,
  },
};
</script>
<style lang=""></style>
