<template>
  <div id="app">
    <img class="super-heroes" alt="superheroes image" src="./assets/super-heroes.jpg">
    <Header msg="Super herores"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.super-heroes {
  width: auto;
  height: 200px;
}
</style>
