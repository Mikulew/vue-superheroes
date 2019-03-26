<template>
	<div class="card bg-secondary">
		<div class="card-body row">
			<div class="col-12">
				<VChart :chartData="verticalBarChartData" />
			</div>

			<div class="col-2">
				<span class="title">Intelligence</span>
			</div>
			<div class="col-2">
				<span class="title">Strength</span>
			</div>
			<div class="col-2">
				<span class="title">Speed</span>
			</div>
			<div class="col-2">
				<span class="title">Durability</span>
			</div>
			<div class="col-2">
				<span class="title">Power</span>
			</div>
			<div class="col-2">
				<span class="title">Combat</span>
			</div>
		</div>
	</div>
</template>

<script>
import VChart from '../../../components/VChart/VChart.vue';

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
				title: "",
				subtitle: "",
				width: 600,
				height: 400,
				metric: ["intelligence", "strength", "speed", "durability", "power", "combat"],
				palette: {
					fill:  ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
				},
				data: [this.item.powerstats],
				legends: {
					enabled: false,
					height: 25,
					width: 50
				},
			},
		};
	},
	components: {
		VChart,
	},
}
</script>

