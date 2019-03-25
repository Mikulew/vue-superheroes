<template>
  <div id="app">
    <div class="container-fluid no-getter">
			<Header text="Super heroes" />
			<Container />
			<Footer />
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
