<template>
    <div class="row">
        <div class="col-4">
            <VSidebar :id="id"/>
        </div>

        <div class="col-8">
			<h1 v-if="loading">Loading...</h1>
            <router-view v-else :item="superhero"></router-view>
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
			superhero: {},
			loading: true,
        };
	},
	created() {
		this.$http.get(`/api/info/${this.id}`)
			.then(({data}) => {
				this.loading = false;
				this.superhero = {
					appearance: data.appearance,
					biography: data.biography,
					connections: data.connections,
					work: data.work,
				};
			});
	},
    components: {
        VSidebar,
    }
}
</script>
