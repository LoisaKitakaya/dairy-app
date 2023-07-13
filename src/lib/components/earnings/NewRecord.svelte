<script>
	export let customers = [];
</script>

<div class="my-4">
	<p class="mb-4 text-center">Record new earning</p>

	<form method="POST" action="?/createPayRecord">
		<div class="mb-4">
			<label for="name" class="px-1">Name</label>
			<select name="name" class="select select-bordered w-full">
				<option disabled selected>Select customer</option>
				{#if customers.length > 0}
					{#each customers as customer}
						<option value={customer.name}>{customer.name}</option>
					{/each}
				{:else}
					<option disabled>No customers recorded</option>
				{/if}
			</select>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Amount</label>
			<input
				type="number"
				step="0.01"
				name="amount"
				placeholder="how much paid"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Method</label>
			<input
				type="text"
				name="method"
				placeholder="payment method"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Quantity</label>
			<input
				type="number"
				step="0.01"
				name="quantity"
				placeholder="volume paid for"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Date</label>
			<input
				type="datetime-local"
				name="date"
				placeholder="date of production"
				class="input input-bordered w-full"
			/>
		</div>
		<button class="btn btn-success w-full">Submit</button>
	</form>
</div>
