<template>
  <v-form
    :initialValues="initialValues"
    class-names="create-user__form app-layout-form__row"
  >
    <template #fields="{ values }">
      <div class="app-layout-form">
        <form-field shadow label="Номер телефона*:">
          <tel-field name="phone" v-model="values.phone" />
        </form-field>
        <form-field shadow label="Ім’я*:">
          <input-field
            name="fullName"
            placeholder="Введіть ім’я користувача"
            v-model="values.fullName"
          />
        </form-field>
        <form-field shadow label="Посада*:">
          <input-field
            name="job"
            placeholder="Введіть посаду користувача"
            v-model="values.jon"
          />
        </form-field>

        <!-- <form-field shadow label="Точка роботи*:">
        <select-field
          name="name"
          inputPlaceholder="Оберіть точку"
          searchPlaceholder="Точка"
          :options="options"
        />
      </form-field> -->
        <!-- <form-field shadow label="Точки, до яких користувач має доступ*:">
        <select-field
          name="name"
          inputPlaceholder="Оберіть точку"
          searchPlaceholder="Точка"
          :options="options"
        />
      </form-field> -->
        <affiliation-select />
        <form-field shadow label="ЄДРПОУ:">
          <input-field
            name="job"
            placeholder="Введіть код ЄДРПОУ"
            v-model="values.jon"
          />
        </form-field>
        <user-permissions />
      </div>
      <div class="app-layout-form">
        <form-field shadow label="Додати фото нового користувача*:">
          <file-field
            name="file"
            label="Фото користувача:"
            accept="images/*"
            v-model="values.file"
          />
        </form-field>
      </div>
    </template>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import FormField from "@/components/fields/FormField/FormField.vue";
import InputField from "@/components/fields/InputField/InputField.vue";
import TelField from "@/components/fields/TelField/TelField.vue";
import FileField from "@/components/fields/FileField/FileField.vue";
import UserPermissions from "@/components/persmission/UserPermissions.vue";

import VForm from "@/components/form/VForm.vue";
import AffiliationSelect from "@/components/user/Affilication/AffiliationSelect.vue";

export default defineComponent({
  components: {
    VForm,
    FormField,
    InputField,
    TelField,
    FileField,
    UserPermissions,
    AffiliationSelect,
  },

  data() {
    return {
      initialValues: {
        phone: "",
        fullName: "",
        job: "",
        file: "",
        affiliation: "",
      },
      options: [
        { label: "Option1", value: "Value1" },
        { label: "Option2", value: "Value2" },
        { label: "Option3", value: "Value3" },
      ],
    };
  },
});
</script>
<style lang=""></style>
