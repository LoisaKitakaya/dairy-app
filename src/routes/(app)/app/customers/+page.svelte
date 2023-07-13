<script>
	import { toggle } from '$lib/store.js';
	import EditMode from '$lib/components/globals/EditMode.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import NewRecord from '$lib/components/customers/NewRecord.svelte';
	import CustomersTable from '$lib/components/customers/CustomersTable.svelte';
	import TableEditable from '$lib/components/customers/TableEditable.svelte';

	export let data;
	export let form;

	if (form) {
		form.success === true ? toast.success(form.message) : toast.error(form.message);
	}

	const { customers } = data;

	let earningsData;
	let error;

	let td = [];

	if (customers.data !== null) {
		earningsData = customers.data.get_all_customer_records;

		td = earningsData.map((item) => {
			return {
				id: item._id,
				name: item.name,
				priority: item.priority,
				phone: item.phone,
				trip: item.trip,
				package: item.package
			};
		});
	} else {
		error = customers.errors[0].message;
	}
</script>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<div class="flex justify-between items-center my-4 gap-4 sm:gap-0">
		<h1 class="text-xl font-semibold text-center sm:text-left">Business Customers</h1>
		<div class="flex justify-end items-center gap-4">
			<EditMode />
			<button class="btn btn-sm btn-active btn-ghost" onclick="new_prod_record.showModal()"
				><i class="bi bi-plus-lg" /> New</button
			>
		</div>
	</div>

	{#if !error}
		{#if earningsData.length > 0}
			{#if !$toggle}
				<CustomersTable data={td} />
			{:else}
				<TableEditable data={td} />
			{/if}
		{:else}
			<h1 class="text-center text-xl my-36">
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
