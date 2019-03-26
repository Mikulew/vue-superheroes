<template>
	<div class="card bg-secondary">
		<div class="card-body row">
			<p>{{ item.powerstats }}</p>
			<div class="col-12">
				<v-chart :chartData="verticalBarChartData"></v-chart>
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
	},
	data() {
		return {
			verticalBarChartData: {
				chartType: "vBarChart",
				selector: "vChart",
				title: "Powerstats",
				subtitle: this.item.name,
				width: 600,
				height: 500,
				metric: ["total", "forecast"],
				dim: "month",
				data: this.item.powerstats,
				legends: {
					enabled: false,
					height: 25,
					width: 50
				},
			},
		}
	},
	created() {
		//
	},
	methods: {
		//
	},
}
</script>

<style scoped>
	.bar-chart {
		background-color: red;
		fill: yellow;
	}
	.bar {
		fill: steelblue;
	}
</style>
