<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	import { organizeByName, getColor } from '$lib/charts.js';

	export let data;
	export let labels;

	let ctx;

	let dataArr = organizeByName(data, labels);

	onMount(() => {
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: dataArr[dataArr.length - 1].map(() => '🔥'),
				datasets: dataArr.map((dataset) => {
					return {
						label: dataset[0].name,
						data: dataset.map((item) => item.total),
						borderColor: getColor(),
						pointBackgroundColor: getColor(),
						fill: false,
						radius: 6,
						tension: 0.3,
						borderWidth: 5,
						pointHoverRadius: 6
					};
				})
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					},
					x: {
						grid: { display: false }
					}
				}
			}
		});
	});
</script>

<canvas class="mx-auto w-full text-base-content" bind:this={ctx} />
