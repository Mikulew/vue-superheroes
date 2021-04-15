<template>
	<div class="row">
		<div class="col-12" v-if="status">
			<table class="table table-sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Full name</th>
						<th>Alter Egos</th>
						<th>Gender</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody v-for="(item, index) in items" :key="index">
					<tr>
						<td>
							<router-link :to="`/${item.id}`" class="link">
								{{item.id}}
							</router-link>
						</td>
						<td>{{item.name}}</td>
						<td>{{item.biography['full-name']}}</td>
						<td>{{item.biography['alter-egos']}}</td>
						<td>{{item.appearance.gender}}</td>
						<td>
							<router-link
								:to="`/${item.id}`"
								class="btn btn-sm btn-action"
								title="Show more details"
							>
								Show more
							</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="col-12" v-else>
			<div class="card bg-dark mb-3">
				<div class="card-body text-center" v-if="!status && status === null">
					<p class="text">Choose the superhero by typing the text above</p>
				</div>
				<div class="card-body text-center" v-if="!status && status !== null">
					<p class="text-error">Superhero not found</p>
				</div>
			</div>
		</div>
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
};
</script>
