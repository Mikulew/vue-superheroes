<template>
	<div class="card bg-secondary">
    	<div class="card-body row">
			<div class="col-sm-6 col-12">
				<p class="title">Gender</p>
				<p>{{item.appearance.gender}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<p class="title">Race</p>
				<p>{{item.appearance.race}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<p class="title">Eye color</p>
				<p>{{item.appearance['eye-color']}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<p class="title">Hair color</p>
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
