<template>
  <div id="app">
    <div class="container-fluid d-flex flex-column">
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
  components: {
    Header,
    Container,
    Footer,
  }
}
</script>

<style scoped>
	.container-fluid {
		padding: 0px;
		min-height: 100vh;
	}
</style>
