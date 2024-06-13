<template>
  <Head>
    <title>Chatev</title>
    <meta vmid="og:title" property="og:title" content="Chatev" />
    <meta vmid="description" name="description" content="Chatev"
  /></Head>
  <router-view />
  <Footer_ />
</template>

<script>
import Footer_ from './components/Footer_.vue'
import {Head} from '@vueuse/head'

export default {
  name: 'App',
  components: {Footer_, Head},
  computed: {
    env() {
      return process.env.VUE_APP_BACKEND_DOMAIN
    },
  },
  methods: {},
}
</script>
<style>
body {
  margin: 0;
  overflow-x: hidden;
  background-image: url(./assets/img/background.svg);
  background-size: cover;
  background-repeat: no-repeat;
}
h2,
div {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Arsenal', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
