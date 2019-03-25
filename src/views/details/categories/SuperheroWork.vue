<template>
	<div class="card">
    	<div class="card-body row">
			<div class="col-sm-6 col-12">
				<b>Base</b>
				<p>{{item.work.base}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<b>Alter egos</b>
				<p>{{item.work.occupation}}</p>
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
