<template>
	<div class="card bg-secondary">
		<div class="card-body row">
			<div class="col-sm-6 col-12">
				<p class="title">Group affiliation</p>
				<p>{{item.connections['group-affiliation']}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<p class="title">Relatives</p>
				<p>{{item.connections.relatives}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			required: true,
			type: Object
		}
	}
}
</script>
