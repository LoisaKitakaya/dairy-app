<script>
	export let categories;
</script>

<div class="my-4">
	<p class="mb-4 text-center">Record new expenses</p>

	<form method="POST" action="?/createExpRecord">
		<div class="mb-4">
			<label for="name" class="px-1">Item</label>
			<input
				type="text"
				name="item"
				placeholder="item/service acquired"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Category</label>
			<select name="category" class="select select-bordered w-full">
				<option disabled selected>Select category</option>
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Amount</label>
			<input
				type="number"
				step="0.01"
				value="0.00"
				name="amount"
				placeholder="afternoon production"
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
