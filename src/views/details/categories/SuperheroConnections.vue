<template>
	<div class="card">
		<div class="card-body row">
			<div class="col-sm-6 col-12">
				<b>Group affiliation</b>
				<p>{{item.connections['group-affiliation']}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<b>Relatives</b>
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
