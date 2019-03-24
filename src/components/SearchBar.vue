<template>
    <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" :value="value" @input="updateInput($event.target.value)" placeholder="Search superhero...">
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
