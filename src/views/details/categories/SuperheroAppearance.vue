<template>
	<div class="card">
    	<div class="card-body row">
			<div class="col-sm-6 col-12">
				<b>Gender</b>
				<p>{{item.appearance.gender}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<b>Race</b>
				<p>{{item.appearance.race}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<b>Eye color</b>
				<p>{{item.appearance['eye-color']}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<b>Hair color</b>
				<p>{{item.appearance['hair-color']}}</p>
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
