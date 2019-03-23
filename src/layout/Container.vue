<template>
    <main>
        <SuperheroesList />
    </main>
</template>

<script>
import SuperheroesList from '../views/list/SuperheroesList.vue';

export default {
    components: {
        SuperheroesList,
    },
}
</script>

<style scoped>
    .main {
        background-color: #eeeeeeee;
        height: 500px;
    }
</style>
