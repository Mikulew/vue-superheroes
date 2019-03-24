<template>
	<div class="row">
    	<h1>SuperheroesWork</h1>

		<div class="col-12">
			<b>Base</b>
			<p>{{item.work.base}}</p>
		</div>

		<div class="col-12">
			<b>Alter egos</b>
			<p>{{item.work.occupation}}</p>
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
