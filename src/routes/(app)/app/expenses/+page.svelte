<script>
	import moment from 'moment'
	import { toggle } from '$lib/store.js'
	import ExpensesTable from '$lib/components/expenses/ExpensesTable.svelte'
	import EditMode from '$lib/components/globals/EditMode.svelte'
	import TableEditable from '$lib/components/expenses/TableEditable.svelte'
	import NewRecord from '$lib/components/expenses/NewRecord.svelte'
	import toast, { Toaster } from 'svelte-french-toast'
	import * as config from '$lib/config'

	export let data
	export let form

	if (form) {
		form.success === true ? toast.success(form.message) : toast.error(form.message)
	}

	const { expenses } = data
	const { categories } = data

	let expensesData
	let error

	let td = []

	if (expenses.data !== null) {
		expensesData = expenses.data.get_all_expense_records

		td = expensesData.map((item) => {
			return {
				id: item._id,
				item: item.item,
				category: item.category,
				amount: item.amount.toFixed(2),
				date: moment.unix(item.date_of_action).format('YYYY-MM-DD').toString()
			}
		})
	} else {
		error = expenses.errors[0].message
	}
</script>

<svelte:head>
	<title>{config.title} | Expenses</title>
</svelte:head>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<div class="flex justify-between items-center my-4 gap-4 sm:gap-0">
		<h1 class="text-xl font-semibold text-center sm:text-left">Business Expenses</h1>
		<div class="flex justify-end items-center gap-4">
			<EditMode />
			<button class="btn btn-sm btn-active btn-ghost" onclick="new_record.showModal()"
				><i class="bi bi-plus-lg" /> New</button
			>
		</div>
	</div>

	{#if !error}
		{#if expensesData.length > 0}
			{#if !$toggle}
				<ExpensesTable data={td} />
			{:else}
				<TableEditable data={td} {categories} />
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
		<NewRecord {categories} />
	</div>
</dialog>

<Toaster />
