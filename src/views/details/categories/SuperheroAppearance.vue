<template>
	<div class="card bg-secondary">
		<div class="card-body row">
			<div class="col-4">
				<img class="image" :src="item.image.url" :alt="item.name">
			</div>

			<div class="col-8">
				<div class="row">
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

					<div class="col-sm-6 col-12">
						<p class="title">Height</p>
						<p>{{item.appearance.height[1] || '-'}}</p>
					</div>

					<div class="col-sm-6 col-12">
						<p class="title">Weight</p>
						<p>{{item.appearance.weight[1] || '-'}}</p>
					</div>
				</div>
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
