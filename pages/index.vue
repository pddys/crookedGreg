<template>
  <loading />
  <main class="snap-y snap-proximity o-wrapper">
    <div class="overlay"></div>
    <masthead />
    <menuSection />
    <aboutSection />
    <faqSection />
    <employeeSection />
    <footerSection />
    <svgFilter />
  </main>
</template>

<style lang="scss">
/* @import url("~/assets/sass/main.scss"); */
section {
  max-width: 1600px;
  margin: 0 auto;
}

main {
  position: relative;
}
</style>

<script>
import masthead from "~/components/masthead.vue";
export default {
  components: { masthead },
  name: "IndexPage",
  props: ["pizzas"],
};
</script>
