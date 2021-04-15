<template>
	<div class="input-group my-3">
		<div class="input-group-prepend">
			<div class="input-group-text">
				<font-awesome-icon class="search-bar-icon" icon="search" />
			</div>
		</div>

		<input
			type="text"
			spellcheck="false"
			class="search-bar form-control"
			:value="value"
			@input="updateInput($event.target.value)"
			placeholder="Search superhero..."
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: {
				type: String,
				required: true,
		},
	},
	methods: {
		updateInput(text) {
			this.$emit('input', text);
		},
	},
};
</script>

<style scoped>
	.search-bar.form-control {
		background-color: #c2b280;
		color: #27100d;
		font-weight: 700;
	}

	.input-group-text {
		background-color: #27100d;
		border: 1px solid #c2b280;
	}

	.search-bar-icon {
		color: #c2b280;
	}
</style>
