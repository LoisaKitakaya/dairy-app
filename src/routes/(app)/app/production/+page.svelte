<script>
	import moment from 'moment';
    import { fade } from 'svelte/transition';

	export let data;

	const { production } = data;

	let productionData;
	let error;

	if (production.data !== null) {
		productionData = production.data;
	} else {
		error = production.errors[0].message;
	}

	let scope;

	let itemOfInterest = null;

	const selectItem = (event) => {
		itemOfInterest = event.target.value;
	};

	const resetItem = () => {
		itemOfInterest = null;
	};
</script>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<div class="flex justify-between items-center mb-10 mt-4">
		<h1 class="text-xl font-semibold">Milk Production summary</h1>
		<div class="flex justify-end items-center gap-4">
			<button class="btn btn-sm btn-active"><i class="bi bi-plus-lg" /> New</button>
			<button class="btn btn-sm btn-active"><i class="bi bi-pencil" /> Update</button>
			<button class="btn btn-sm btn-error"><i class="bi bi-trash" /> Delete</button>
		</div>
	</div>

	<div class="overflow-x-auto" transition:fade>
		<table class="table table-pin-rows text-center">
			<thead>
				<tr>
					<th
						><label>
							<input type="radio" class="radion" bind:group={scope} on:change={resetItem} />
						</label></th
					>
					<th>Name</th>
					<th>Morning</th>
					<th>Afternoon</th>
					<th>Evening</th>
					<th>Total</th>
					<th>Unit</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{#each productionData.get_all_production_records as item (item._id)}
					<tr>
						<th>
							<label>
								<input
									type="radio"
									class="radion"
									bind:group={scope}
									value={item._id}
									on:change={selectItem}
								/>
							</label>
						</th>
						<td>
							{item.name}
						</td>
						<td>
							{item.morning_production}
						</td>
						<td>
							{item.afternoon_production}
						</td>
						<td>
							{item.evening_production}
						</td>
						<td>
							{(
								item.morning_production +
								item.afternoon_production +
								item.evening_production
							).toLocaleString()}
						</td>
                        <td>Litres</td>
						<td>
							{moment.unix(item.production_date).format('YYYY-MM-DD')}
						</td>
					</tr>
				{/each}
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th />
					<th>Name</th>
					<th>Morning</th>
					<th>Afternoon</th>
					<th>Evening</th>
					<th>Total</th>
					<th>Unit</th>
					<th>Date</th>
				</tr>
			</tfoot>
		</table>
	</div>
</section>
