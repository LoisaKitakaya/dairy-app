<script>
	import { page, rows } from '$lib/store.js';
	import moment from 'moment';

	export let data;

	let rows_per_page;
	let current_page;

	const rowSubscription = rows.subscribe((val) => (rows_per_page = val));
	const pageSubscription = page.subscribe((val) => (current_page = val));

	$: pageCount = current_page - 1;

	$: start = rows_per_page * pageCount;
	$: end = start + rows_per_page;

	$: paginatedItems = data.slice(start, end);

	const nextPage = () => {
		current_page++;

		if (current_page >= paginatedItems.length) {
			current_page = pageCount + 1;
		}
	};

	const previousPage = () => {
		current_page--;

		if (current_page <= 0) {
			current_page = 1;
		}
	};

	let nameUpdate = null;
	let priorityUpdate = null;
	let phoneUpdate = null;
	let tripUpdate = null;
	let packageUpdate = null;

	const updateName = (event) => {
		nameUpdate = event.target.value;
		console.log(nameUpdate);
	};

	const updatePriority = (event) => {
		priorityUpdate = event.target.value;
	};

	const updatePhone = (event) => {
		phoneUpdate = event.target.value;
	};

	const updateTrip = (event) => {
		tripUpdate = event.target.value;
	};

	const updatePackage = (event) => {
		packageUpdate = event.target.value;
	};
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
				<th class="cursor-pointer">Priority</th>
				<th class="cursor-pointer">Phone</th>
				<th class="cursor-pointer">Trip</th>
				<th class="cursor-pointer">Package</th>
				<th class="cursor-pointer">Update</th>
				<th class="cursor-pointer">Delete</th>
			</tr>
		</thead>
		<tbody>
			{#each paginatedItems as item (item.id)}
				<tr class="hover">
					<td
						><input
							type="text"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.name}
							on:change={updateName}
						/></td
					>
					<td>
						<select
							name="priority"
							class="select select-md w-fit sm:w-full max-w-xs"
							bind:value={item.priority}
							on:change={updatePriority}
						>
							<option disabled selected>Select priority</option>
							<option value="High">High</option>
							<option value="Mid">Mid</option>
							<option value="Low">Low</option>
						</select></td
					>
					<td
						><input
							type="text"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.phone}
							on:change={updatePhone}
						/></td
					>
					<td>
						<select
							name="priority"
							class="select select-md w-fit sm:w-full max-w-xs"
							bind:value={item.trip}
							on:change={updateTrip}
						>
							<option disabled selected>Select trip</option>
							<option value="Morning">Morning</option>
							<option value="Afternoon">Afternoon</option>
							<option value="Evening">Evening</option>
						</select></td
					>
					<td
						><input
							type="text"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.package}
							on:change={updatePackage}
						/></td
					>
					<td
						><form method="POST">
							<button
								class="btn btn-sm btn-secondary"
								formaction="?/updateCustomerRecord&id={item.id}&name={nameUpdate
									? nameUpdate
									: item.name}&priority={priorityUpdate
									? priorityUpdate.toString()
									: item.priority}&phone={phoneUpdate
									? phoneUpdate.toString()
									: item.phone}&trip={tripUpdate
									? tripUpdate.toString()
									: item.trip}&package={packageUpdate
									? packageUpdate.toString()
									: item.package.toString()}"><i class="bi bi-arrow-repeat" /></button
							>
						</form></td
					>
					<td
						><form method="POST">
							<button class="btn btn-sm btn-error" formaction="?/deleteCustomerRecord&id={item.id}"
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
