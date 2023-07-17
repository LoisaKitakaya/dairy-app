<script>
	import moment from 'moment'
	import { toggle } from '$lib/store.js'
	import EditMode from '$lib/components/globals/EditMode.svelte'
	import toast, { Toaster } from 'svelte-french-toast'
	import NewRecord from '$lib/components/earnings/NewRecord.svelte'
	import EarningsTable from '$lib/components/earnings/EarningsTable.svelte'
	import TableEditable from '$lib/components/earnings/TableEditable.svelte'
	import * as config from '$lib/config'

	export let data
	export let form

	if (form) {
		form.success === true ? toast.success(form.message) : toast.error(form.message)
	}

	const { earnings } = data
	const { customers } = data

	let earningsData
	let customersData
	let error

	let td = []

	if (earnings.data !== null) {
		earningsData = earnings.data.get_all_payment_records

		td = earningsData.map((item) => {
			return {
				id: item._id,
				name: item.name,
				amount: item.amount.toFixed(2),
				method: item.payment_method,
				quantity: item.quantity.toFixed(2),
				date: moment.unix(item.payment_date).format('YYYY-MM-DD').toString()
			}
		})
	} else {
		error = earnings.errors[0].message
	}

	if (customers.data !== null) {
		customersData = customers.data.get_all_customer_records
	} else {
		error = customers.errors[0].message
	}
</script>

<svelte:head>
	<title>{config.title} | Earnings</title>
</svelte:head>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<div class="flex justify-between items-center my-4 gap-4 sm:gap-0">
		<h1 class="text-xl font-semibold text-center sm:text-left">Business Earnings</h1>
		<div class="flex justify-end items-center gap-4">
			<EditMode />
			<button class="btn btn-sm btn-active btn-ghost" onclick="new_record.showModal()"
				><i class="bi bi-plus-lg" /> New</button
			>
		</div>
	</div>

	{#if !error}
		{#if earningsData.length > 0}
			{#if !$toggle}
				<EarningsTable data={td} />
			{:else}
				<TableEditable data={td} customers={customersData} />
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

<dialog id="new_record" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<button
			class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
			onclick="new_record.close()">✕</button
		>
		<NewRecord customers={customersData} />
	</div>
</dialog>

<Toaster />
