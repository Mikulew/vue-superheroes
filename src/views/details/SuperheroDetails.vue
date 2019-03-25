<template>
    <div class="card bg-dark">
		<div class="card-body row">
			<div class="col-4">
				<VSidebar :id="id"/>
			</div>

			<div class="col-8">
				<h1 class="text-center title loading" v-if="loading">Loading...</h1>
				<router-view v-else :item="superhero"></router-view>
			</div>
		</div>

		<div class="card-footer d-flex flex-row-reverse">
			<router-link to="/" class="btn btn-dark btn-return" exact>Return</router-link>
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

<style scoped>
	.card-footer {
		background-color: #27100d;
	}

	.btn-return {
		color: #c2b280;
	}

	.loading {
		color: #c2b280;
		height: 100%;
	}
</style>
