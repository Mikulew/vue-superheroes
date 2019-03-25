<template>
    <div class="card">
		<div class="card-body row">
			<div class="col-sm-6 col-12">
				<b>Full name</b>
				<p>{{item.biography['full-name']}}</p>
			</div>

			<div class="col-sm-6 col-12">
				<b>Alter egos</b>
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
