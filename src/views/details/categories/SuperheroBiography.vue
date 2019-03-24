<template>
    <div class="row">
		<h1>SuperheroesBiography</h1>

		<div class="col-12">
			<b>Full name</b>
			<p>{{item.biography['full-name']}}</p>
		</div>

		<div class="col-12">
			<b>Alter egos</b>
			<p>{{item.biography['alter-egos']}}</p>
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
