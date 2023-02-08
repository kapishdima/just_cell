<template lang="">
  <div class="loader" :class="`loader--${this.size} loader--${this.color}`">
    Loading...
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: "sm",
    },
    color: {
      type: String,
      required: false,
      default: "white",
    },
  },
};
</script>
<style lang="scss">
.loader,
.loader:after {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;

  transform: translateZ(0);
  animation: loading 1.1s infinite linear;
}

.loader {
  &--sm {
    font-size: 10px;
    &:after {
      width: 24px;
      height: 24px;
    }
  }
  &--lg {
    font-size: 14px;
    &:after {
      width: 32px;
      height: 32px;
    }
  }

  &--white {
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-right: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    border-left: 2px solid #ffffff;
  }

  &--accent {
    border-top: 2px solid rgba($accent-primary, 0.2);
    border-right: 2px solid rgba($accent-primary, 0.2);
    border-bottom: 2px solid rgba($accent-primary, 0.2);
    border-left: 2px solid $accent-primary;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
