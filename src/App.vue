<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <Header msg="Super heroes"/>
        </div>

        <div class="col-12">
          <Container />
        </div>

        <div class="col-12">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './layout/Header.vue';
import Container from './layout/Container.vue';
import Footer from './layout/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Container,
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
</style>
