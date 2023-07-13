<div class="my-4">
	<p class="mb-4 text-center">Record new milk production</p>

	<form method="POST" action="?/createProdRecord">
		<div class="mb-4">
			<label for="name" class="px-1">Name</label>
			<input
				type="text"
				name="name"
				placeholder="name of animal"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Morning</label>
			<input
				type="number"
                step="0.01"
				value="0.00"
				name="morning"
				placeholder="morning production"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Afternoon</label>
			<input
				type="number"
                step="0.01"
				value="0.00"
				name="noon"
				placeholder="afternoon production"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Evening</label>
			<input
				type="number"
                step="0.01"
				value="0.00"
				name="evening"
				placeholder="evening production"
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
