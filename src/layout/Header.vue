<template>
  <header class="row">
		<div class="col-12 header-container">
			<h1 class="header-title title">{{ text }}</h1>
		</div>
  </header>
</template>

<script>
export default {
  props: {
    text: {
			required: false,
			default: '',
		},
  },
};
</script>

<style scoped>
	.header-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('../assets/superheroes.jpg');
		background-color: #222222;
		background-size: cover;
		background-position: 100% center;
		background-repeat: no-repeat;
		height: 300px;
	}

	.header-title {
		font-size: 100px;
	}
</style>
