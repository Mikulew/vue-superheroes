<template>
	<div class="row">
		<table class="table table-sm" v-if="status">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Full name</th>
					<th>Alter Egos</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody v-for="(item, index) in items" :key="index">
				<tr>
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.biography['full-name']}}</td>
					<td>{{item.biography['alter-egos']}}</td>
					<td>
						<router-link :to="`/${item.id}`" class="btn btn-outline-primary" title="Show more details">Show</router-link>
					</td>
				</tr>
			</tbody>
		</table>

		<div class="alert alert-danger" v-if="!status && status !== null">Superhero not found</div>
	</div>
</template>

<script>
	export default {
		props: {
			status: {
				required: false,
				default: null,
			},
			items: {
				required: false,
				default: () => [],
			},
		},
	}
</script>
