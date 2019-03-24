<template>
	<div class="row">
    	<h1>SuperheroesConnections</h1>

		<div class="col-12">
			<b>Group affiliation</b>
			<p>{{item.connections['group-affiliation']}}</p>
		</div>

		<div class="col-12">
			<b>Relatives</b>
			<p>{{item.connections.relatives}}</p>
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
