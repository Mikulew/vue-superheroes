<template>
    <div class="card bg-secondary">
		<div class="card-body row">
			<div class="col-sm-6 col-12">
				<p class="title">Full name</p>
				<p>{{item.biography['full-name']}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<p class="title">Alter egos</p>
				<p>{{item.biography['alter-egos']}}</p>
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
