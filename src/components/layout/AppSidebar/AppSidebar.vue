<template>
  <aside class="app-sidebar">
    <div class="app-menu">
      <div class="app-menu__item">
        <router-link :to="{ name: 'dashboard' }">
          <div class="app-menu__item-icon">
            <img src="@/assets/icons/menu/dashboard_icon.svg" alt="dashboard" />
          </div>
          Dashboard
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link :to="{ name: 'terminals' }">
          <div class="app-menu__item-icon">
            <img
              src="@/assets/icons/menu/transactions_icon.svg"
              alt="dashboard"
            />
          </div>
          Перегляд терміналів
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link to="/">
          <div class="app-menu__item-icon">
            <img
              src="@/assets/icons/menu/transactions_icon.svg"
              alt="dashboard"
            />
          </div>
          Перегляд транзакцій
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link to="/">
          <div class="app-menu__item-icon">
            <img
              src="@/assets/icons/menu/promitions_icon.svg"
              alt="dashboard"
            />
          </div>
          Налаштування акцій
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link to="/">
          <div class="app-menu__item-icon">
            <img src="@/assets/icons/menu/crm_icon.svg" alt="dashboard" />
          </div>
          СРМ система
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link to="/">
          <div class="app-menu__item-icon">
            <img src="@/assets/icons/menu/products_icon.svg" alt="dashboard" />
          </div>
          Каталог товарів і послуг
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link :to="{ name: 'users' }">
          <div class="app-menu__item-icon">
            <img src="@/assets/icons/menu/users_icon.svg" alt="dashboard" />
          </div>
          Користувачі
        </router-link>
      </div>
      <div class="app-menu__item">
        <router-link :to="{ name: 'manageUsers' }">
          Управління користувачами
        </router-link>
      </div>
    </div>
    <div class="app-sidebar__footer">
      <div class="app-sidebar__footer">
        <div class="app-sidebar__footer-item">
          <router-link :to="{ name: 'departmentCreate' }">
            Додати нове відділення
            <img src="@/assets/icons/filled_plus_icon.svg" alt="" />
          </router-link>
        </div>

        <div class="app-sidebar__footer-item">
          <router-link :to="{ name: 'usersCreate' }" class="">
            Додати нового користувача
            <img src="@/assets/icons/filled_plus_icon.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang=""></style>
