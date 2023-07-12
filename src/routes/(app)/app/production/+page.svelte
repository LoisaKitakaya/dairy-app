<script>
	import moment from 'moment';
	import { toggle } from '$lib/store.js';
	import ProductionTable from '$lib/components/production/ProductionTable.svelte';
	import EditMode from '$lib/components/globals/EditMode.svelte';
	import TableEditable from '$lib/components/production/TableEditable.svelte';
	import NewRecord from '$lib/components/production/NewRecord.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import LineChart from '$lib/components/charts/LineChart.svelte';
	import { getUniqueNames } from '$lib/charts.js';

	export let data;
	export let form;

	if (form) {
		form.success === true ? toast.success(form.message) : toast.error(form.message);
	}

	const { production } = data;

	let productionData;
	let error;

	let td = [];
	let uniqueNames = [];

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
				date: moment.unix(item.production_date).format('YYYY-MM-DD').toString()
			};
		});

		uniqueNames = getUniqueNames(productionData);
	} else {
		error = production.errors[0].message;
	}
</script>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<div class="flex justify-between items-center my-4 gap-4 sm:gap-0">
		<h1 class="text-xl font-semibold text-center sm:text-left">Milk Production</h1>
		<div class="flex justify-end items-center gap-4">
			<EditMode />
			<button class="btn btn-sm btn-active btn-ghost" onclick="new_prod_record.showModal()"
				><i class="bi bi-plus-lg" /> New</button
			>
		</div>
	</div>

	{#if !error}
		{#if productionData.length > 0}
			{#if !$toggle}
				<ProductionTable data={td} />
				<div class="mt-8">
					<details class="collapse bg-base-200">
						<summary class="collapse-title text-lg"
							>Milk Production Chart - Click to open/close</summary
						>
						<div class="collapse-content">
							<LineChart data={td} labels={uniqueNames} />
						</div>
					</details>
				</div>
			{:else}
				<TableEditable data={td} />
			{/if}
		{:else}
			<h1 class="text-center text-xl underline my-36">
				0 records found. Click the '<i class="bi bi-plus-lg" /> New' button to create new records.
			</h1>
		{/if}
	{:else}
		<h1 class="text-center text-xl underline my-36 text-error">Error: {error}</h1>
	{/if}
</section>

<dialog id="new_prod_record" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<button
			class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
			onclick="new_prod_record.close()">✕</button
		>
		<NewRecord />
	</div>
</dialog>

<Toaster />
