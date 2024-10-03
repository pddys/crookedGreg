<template>
  <div>
    <div class="preloader">
      <div class="preloader-percent h1">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
const nuxtApp = useNuxtApp();
const loading = ref(false);
const percentage = ref(0);

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  const tl = gsap.timeline();

  tl.to(percentage, {
    progress: 100,
    duration: 1,
    onUpdate() {
      percentage.value = Math.floor(percentage.progress);
    },
  });

  tl.fromTo(
    ".preloader",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
    }
  );
});
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $black;
  color: $white;
}
</style>
