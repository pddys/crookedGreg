<template>
  <main class="snap-y snap-proximity o-wrapper">
    <masthead />
    <menuSection />
    <aboutSection />
  </main>
  <footerSection />
</template>

<style>
  /* @import url("~/assets/sass/main.scss"); */
  section {
    max-width: 1600px;
    margin: 0 auto;
  }
</style>

<script>
import masthead from '~/components/masthead.vue'
export default {
  components: { masthead },
  name: 'IndexPage',
  props: ['pizzas']
}
</script>