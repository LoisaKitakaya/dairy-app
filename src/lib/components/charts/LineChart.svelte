<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data;

	let ctx;

	onMount(() => {
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data,
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<canvas class="w-full" aria-label="Chart canvas" bind:this={ctx} />
