<template>
  <app-layout>
    <template #appLink> <back-link label="Обрати іншу точку" /> </template>
    <template #appTitle> Точка “Цекурка” </template>
    <template #appExtra>
      <search-user />
    </template>
    <template #appContent>
      <users-carousel :users="users">
        <template #item="{ user }">
          <user-card
            :avatar="user.avatar"
            :username="user.username"
            :phone="user.phone"
            :position="user.position"
            :branchName="user.branchName"
          >
            <template #footer>
              <router-link
                :to="{
                  name: 'userSchedule',
                  params: { id: user.id || '1', name: 'Точка “Цекурка”' },
                }"
              >
                <v-button :hasMaxWidth="false">
                  <template #beforeIcon>
                    <img src="@/assets/icons/schedule_icon.svg" alt="" />
                  </template>
                  <template #text>Перейти до розкладу</template>
                </v-button>
              </router-link>
            </template>
          </user-card>
        </template>
      </users-carousel>
    </template>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UsersCarousel from "@/components/user/UsersCarousel.vue";
import UserCard from "@/components/user/UserCard.vue";
import SearchUser from "@/components/fields/SearchUser/SearchUser.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import BackLink from "@/components/layout/BackLink/BackLink.vue";

export default defineComponent({
  components: {
    AppLayout,
    UsersCarousel,
    UserCard,
    SearchUser,
    VButton,
    BackLink,
  },

  data() {
    return {
      users: [
        {
          avatar: require("@/assets/avatar.png"),
          username: "Микола",
          phone: "+380 667 435 634",
          position: "Директор",
          branchName: "Точка 'Цукерка'",
        },
        {
          avatar: require("@/assets/avatar.png"),
          username: "Микола",
          phone: "+380 667 435 634",
          position: "Директор",
          branchName: "Точка 'Цукерка'",
        },
        {
          avatar: require("@/assets/avatar.png"),
          username: "Микола",
          phone: "+380 667 435 634",
          position: "Директор",
          branchName: "Точка 'Цукерка'",
        },
        {
          avatar: require("@/assets/avatar.png"),
          username: "Микола",
          phone: "+380 667 435 634",
          position: "Директор",
          branchName: "Точка 'Цукерка'",
        },
      ],
    };
  },
});
</script>
<style lang=""></style>
