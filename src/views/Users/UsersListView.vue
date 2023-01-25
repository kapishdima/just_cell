<template>
  <app-layout>
    <template #appTitle>Користувачі</template>
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
            <template #actions>
              <user-edit />
            </template>
            <template #footer>
              <user-statistics />
            </template>
          </user-card>
        </template>
      </users-carousel>

      <users-carousel :users="users">
        <template #item="{ user }">
          <user-card
            :avatar="user.avatar"
            :username="user.username"
            :phone="user.phone"
            :position="user.position"
            :branchName="user.branchName"
          >
            <template #actions>
              <user-edit />
            </template>
            <template #footer>
              <user-statistics />
            </template>
          </user-card>
        </template>
      </users-carousel>
    </template>
  </app-layout>
</template>
<script lang="ts">
import AppLayout from "@/components/layout/AppLayout/AppLayout.vue";
import UserCard from "@/components/user/UserCard.vue";
import UserEdit from "@/components/user/UserEditLink.vue";
import UserStatistics from "@/components/user/UserStatisticsButton.vue";
import UsersCarousel from "@/components/user/UsersCarousel.vue";

export default {
  components: {
    AppLayout,
    UserCard,
    UserEdit,
    UserStatistics,
    UsersCarousel,
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
};
</script>
<style lang=""></style>
