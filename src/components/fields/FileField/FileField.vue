<template lang="">
  <div class="file-field">
    <input
      ref="fileInput"
      type="file"
      hidden
      :accept="accept"
      :name="name"
      @change="selectFile"
    />
    <div class="file-field__label">
      {{ label }}
      <div v-if="file" class="file-field__value">{{ fileName }}</div>
    </div>
    <div class="file-field__preview">
      <img
        v-if="canShowPreview"
        :src="preview"
        class="file-field__preview-img"
      />
      <button
        class="file-field__button"
        type="button"
        @click="openFileSelector"
      >
        Завантажити файл
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { isImage } from "./file.service";

export default defineComponent({
  emits: ["update:modelValue"],
  props: ["modelValue", "name", "label", "accept"],

  data(): { file: File | null } {
    return {
      file: this.modelValue || null,
    };
  },

  computed: {
    canShowPreview(): boolean {
      return this.file !== null && isImage(this.file);
    },
    preview(): string {
      if (!this.file) {
        return "";
      }

      return URL.createObjectURL(this.file);
    },
    fileName(): string {
      if (!this.file) {
        return "";
      }

      const name = this.file?.name;
      return name?.length <= 25 ? name : `${name?.slice(0, 15)}...`;
    },
  },

  watch: {
    file(value: File) {
      this.$emit("update:modelValue", value);
    },
  },

  methods: {
    openFileSelector() {
      const input = this.$refs.fileInput as HTMLInputElement;
      input.click();
    },
    selectFile(event: Event) {
      const target = event.target as EventTarget & { files: FileList };
      this.file = target.files[0];
    },
  },
});
</script>
<style lang=""></style>
