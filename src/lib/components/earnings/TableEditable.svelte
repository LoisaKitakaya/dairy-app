<script>
	import { page, rows } from '$lib/store.js'
	import moment from 'moment'

	export let data
	export let customers

	let rows_per_page
	let current_page

	const rowSubscription = rows.subscribe((val) => (rows_per_page = val))
	const pageSubscription = page.subscribe((val) => (current_page = val))

	$: pageCount = current_page - 1

	$: start = rows_per_page * pageCount
	$: end = start + rows_per_page

	$: paginatedItems = data.slice(start, end)

	const nextPage = () => {
		current_page++

		if (current_page >= paginatedItems.length) {
			current_page = pageCount + 1
		}
	}

	const previousPage = () => {
		current_page--

		if (current_page <= 0) {
			current_page = 1
		}
	}

	let nameUpdate = null
	let amountUpdate = null
	let methodUpdate = null
	let quantityUpdate = null
	let dateUpdate = null

	const updateName = (event) => {
		nameUpdate = event.target.value
	}

	const updateAmount = (event) => {
		morningUpdate = event.target.value
	}

	const updateMethod = (event) => {
		afternoonUpdate = event.target.value
	}

	const updateQuantity = (event) => {
		eveningUpdate = event.target.value
	}

	const updateDate = (event) => {
		let newDate = event.target.value.replace(/-/g, '')

		dateUpdate = moment(newDate, 'YYYYMMDD').format('YYYY-MM-DDTHH:MM')
	}

	const sameDate = (oldDate) => {
		let newDate = oldDate.replace(/-/g, '')

		return moment(newDate, 'YYYYMMDD').format('YYYY-MM-DDTHH:MM')
	}
</script>

<table class="table">
	<thead>
		<tr>
			<th>
				<input
					class="input input-bordered input-md w-full"
					type="text"
					disabled
					placeholder="Search rows..."
				/>
			</th>
		</tr>
	</thead>
</table>

<div class="overflow-x-auto">
	<table class="table table-pin-rows text-center mb-4">
		<thead>
			<tr class="bg-base-300 text-base-content">
				<th class="cursor-pointer">Name</th>
				<th class="cursor-pointer">Amount</th>
				<th class="cursor-pointer">Method</th>
				<th class="cursor-pointer">Quantity</th>
				<th class="cursor-pointer">Date</th>
				<th class="cursor-pointer">Update</th>
				<th class="cursor-pointer">Delete</th>
			</tr>
		</thead>
		<tbody>
			{#each paginatedItems as item (item.id)}
				<tr class="hover">
					<td>
						<select
							name="priority"
							class="select select-md w-fit sm:w-full max-w-xs"
							bind:value={item.name}
							on:change={updateName}
						>
							<option disabled selected>Select customer</option>
							{#if customers.length > 0}
								{#each customers as customer}
									<option value={customer.name}>{customer.name}</option>
								{/each}
							{:else}
								<option disabled>No customers recorded</option>
							{/if}
						</select></td
					>
					<td
						><input
							type="number"
							step="0.01"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.amount}
							on:change={updateAmount}
						/></td
					>
					<td
						><input
							type="text"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.method}
							on:change={updateMethod}
						/></td
					>
					<td
						><input
							type="number"
							step="0.01"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.quantity}
							on:change={updateQuantity}
						/></td
					>
					<td
						><input
							type="text"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.date}
							on:change={updateDate}
						/></td
					>
					<td
						><form method="POST">
							<button
								class="btn btn-sm btn-secondary"
								formaction="?/updatePayRecord&id={item.id}&name={nameUpdate
									? nameUpdate
									: item.name}&amount={amountUpdate
									? amountUpdate.toString()
									: item.amount}&method={methodUpdate
									? methodUpdate.toString()
									: item.method}&quantity={quantityUpdate
									? quantityUpdate.toString()
									: item.quantity}&date={dateUpdate
									? dateUpdate.toString()
									: (dateUpdate = sameDate(item.date).toString())}"
								><i class="bi bi-arrow-repeat" /></button
							>
						</form></td
					>
					<td
						><form method="POST">
							<button class="btn btn-sm btn-error" formaction="?/deletePayRecord&id={item.id}"
								><i class="bi bi-trash" /></button
							>
						</form></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div
	class="flex justify-between sm:justify-center gap-4 items-center flex-col sm:flex-row mt-4 sm:mt-0"
>
	<div class="flex justify-end items-center gap-2">
		<label for="page-size">Page size:</label>
		<input
			id="page-size"
			class="input input-bordered input-sm w-24 max-w-xs"
			type="number"
			readonly
			min={1}
			bind:value={rows_per_page}
		/>
	</div>
	<div class="flex justify-start items-center gap-2">
		<button class="btn btn-xs btn-active btn-ghost" on:click={previousPage}>Prev</button>
		<span class="text-base">Page {pageCount + 1}</span>
		<button class="btn btn-xs btn-active btn-ghost" on:click={nextPage}>Next</button>
	</div>
</div>
