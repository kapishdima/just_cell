<template lang="">
  <div class="loader">Loading...</div>
</template>
<script>
export default {};
</script>
<style lang="css">
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
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  border-left: 2px solid #ffffff;
  transform: translateZ(0);
  animation: loading 1.1s infinite linear;
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
