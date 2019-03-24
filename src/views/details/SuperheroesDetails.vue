<template>
    <div class="row">
        <div class="col-4">
            <VSidebar :id="id"/>
        </div>

        <div class="col-8">
            <router-view></router-view>
        </div>

        <div class="col-12">
            <router-link to="/" class="btn btn-outline-secondary" exact>Return</router-link>
        </div>
    </div>
</template>

<script>
import VSidebar from '../../components/VSidebar.vue';

export default {
    data() {
        return {
            id: Number(this.$route.params.id),
        };
    },
    components: {
        VSidebar,
    }
}
</script>