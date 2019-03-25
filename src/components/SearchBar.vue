<template>
	<div class="input-group mb-2">
		<div class="input-group-prepend">
			<div class="input-group-text">
				<font-awesome-icon icon="search" />
			</div>
		</div>
        <input type="text" class="form-control" :value="value" @input="updateInput($event.target.value)" placeholder="Search superhero..." />
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
}
</script>
