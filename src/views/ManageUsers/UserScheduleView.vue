<template lang="">
  <app-layout>
    <template #appTitle>Точка “Цекурка”</template>
    <template #appContent>
      <center>
        <user-card
          :avatar="user.avatar"
          :username="user.username"
          :phone="user.phone"
          :position="user.position"
          :branchName="user.branchName"
        />
      </center>
      <center>
        <!-- <schedule-field /> -->
      </center>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UserCard from "@/components/user/UserCard.vue";
// import ScheduleField from "@/components/fields/ScheduleTableField/ScheduleTableField.vue";

export default {
  components: {
    AppLayout,
    UserCard,
    // ScheduleField,
  },
  data() {
    return {
      user: {
        avatar: require("@/assets/avatar.png"),
        username: "Микола",
        phone: "+380 667 435 634",
        position: "Директор",
        branchName: "Точка 'Цукерка'",
      },
    };
  },
};
</script>
<style lang=""></style>
