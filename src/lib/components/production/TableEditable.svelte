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
	let morningUpdate = null;
	let afternoonUpdate = null;
	let eveningUpdate = null;
	let dateUpdate = null;

	const updateName = (event) => {
		nameUpdate = event.target.value;
	};

	const updateMorning = (event) => {
		morningUpdate = event.target.value;
	};

	const updateAfternoon = (event) => {
		afternoonUpdate = event.target.value;
	};

	const updateEvening = (event) => {
		eveningUpdate = event.target.value;
	};

	const updateDate = (event) => {
		let newDate = event.target.value.replace(/-/g, '');

		dateUpdate = moment(newDate, 'YYYYMMDD').format('YYYY-MM-DDTHH:MM');
	};

	const sameDate = (oldDate) => {
		let newDate = oldDate.replace(/-/g, '');

		return moment(newDate, 'YYYYMMDD').format('YYYY-MM-DDTHH:MM');
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
				<th class="cursor-pointer">Morning</th>
				<th class="cursor-pointer">Afternoon</th>
				<th class="cursor-pointer">Evening</th>
				<th class="cursor-pointer">Total</th>
				<th class="cursor-pointer">Date</th>
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
					<td
						><input
							type="number"
							step="0.01"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.morning}
							on:change={updateMorning}
						/></td
					>
					<td
						><input
							type="number"
							step="0.01"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.noon}
							on:change={updateAfternoon}
						/></td
					>
					<td
						><input
							type="number"
							step="0.01"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							bind:value={item.evening}
							on:change={updateEvening}
						/></td
					>
					<td
						><input
							type="number"
							step="0.01"
							placeholder="Type here"
							class="input input-sm w-fit sm:w-full max-w-xs text-center"
							readonly
							bind:value={item.total}
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
								formaction="?/updateProdRecord&id={item.id}&name={nameUpdate
									? nameUpdate
									: item.name}&morning={morningUpdate
									? morningUpdate.toString()
									: item.morning}&noon={afternoonUpdate
									? afternoonUpdate.toString()
									: item.noon}&evening={eveningUpdate
									? eveningUpdate.toString()
									: item.evening}&date={dateUpdate
									? dateUpdate.toString()
									: (dateUpdate = sameDate(item.date).toString())}"
								><i class="bi bi-arrow-repeat" /></button
							>
						</form></td
					>
					<td
						><form method="POST">
							<button class="btn btn-sm btn-error" formaction="?/deleteProdRecord&id={item.id}"
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
