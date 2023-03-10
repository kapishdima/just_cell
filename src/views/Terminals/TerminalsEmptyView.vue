<template lang="">
  <app-empty>
    <template #emptyTitle>У вас ще немає терміналів</template>
    <template #emptyActions>
      <div class="terminals-extra-actions">
        <qr-scanner />
        <add-by-id />
      </div>
    </template>
  </app-empty>
</template>
<script>
import AppEmpty from "@/components/layout/AppLayout/AppEmpty.vue";
import QrScanner from "@/components/terminals/QR/QRScanner.vue";
import AddById from "@/components/terminals/buttons/AddById.vue";
export default {
  components: {
    AppEmpty,
    QrScanner,
    AddById,
  },
};
</script>
<style lang=""></style>
