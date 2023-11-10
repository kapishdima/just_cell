<template>
  <div class="points-list">
    <div class="point-card" v-for="(point, index) of points" :key="point.id">
      <h4 class="point-card__name">Точка {{ point.id }}</h4>
      <checkbox-field
        label="Обрати точку"
        name="point"
        direction="left"
        v-model="selectedPoints[index].selected"
      />
      <edit-fiscal-point-modal />
    </div>
  </div>
  <div class="points-list__actions">
    <v-button type="button">
      <template #text>Додати точки</template>
    </v-button>
  </div>
</template>

<script>
import CheckboxField from "@/components/fields/CheckboxField/CheckboxField.vue";
import VButton from "@/components/buttons/BaseButton/BaseButton.vue";
import EditFiscalPointModal from "./EditFiscalPointModal.vue";

const points = Array(10)
  .fill(0)
  .map((_, index) => ({ id: index + 1, selected: true }));

export default {
  components: {
    CheckboxField,
    VButton,
    EditFiscalPointModal,
  },

  data() {
    return {
      points,
      selectedPoints: points,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./points.scss";
</style>
