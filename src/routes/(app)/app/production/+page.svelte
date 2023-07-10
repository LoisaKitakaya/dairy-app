<script>
	import moment from 'moment';
	import ProductionTable from '$lib/components/production/ProductionTable.svelte';

	export let data;

	const { production } = data;

	let productionData;
	let error;

	let td = [];

	if (production.data !== null) {
		productionData = production.data.get_all_production_records;

		td = productionData.map((item) => {
			const total = item.morning_production + item.afternoon_production + item.evening_production;

			return {
				id: item._id,
				name: item.name,
				morning: item.morning_production.toFixed(2),
				noon: item.afternoon_production.toFixed(2),
				evening: item.evening_production.toFixed(2),
				total: total.toFixed(2),
				date: moment.unix(item.production_date).format('YYYY-MM-DD')
			};
		});
	} else {
		error = production.errors[0].message;
	}
</script>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<div class="flex justify-between items-center my-4 gap-4 sm:gap-0">
		<h1 class="text-xl font-semibold text-center sm:text-left">Milk Production</h1>
		<button class="btn btn-sm btn-active btn-ghost"><i class="bi bi-plus-lg" /> New</button>
	</div>

	{#if !error}
		{#if productionData.length > 0}
			<ProductionTable data={td} />
		{:else}
			<h1 class="text-center text-xl underline my-36">
				0 records found. Click the '<i class="bi bi-plus-lg" /> New' button to create new records.
			</h1>
		{/if}
	{:else}
		<h1 class="text-center text-xl underline my-36 text-error">Error: {error}</h1>
	{/if}
</section>
