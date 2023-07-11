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
				type="text"
				name="morning"
				placeholder="morning production"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Afternoon</label>
			<input
				type="text"
				name="noon"
				placeholder="afternoon production"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Evening</label>
			<input
				type="text"
				name="evening"
				placeholder="evening production"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Date</label>
			<input
				type="text"
				name="date"
				placeholder="date of production"
				class="input input-bordered w-full"
			/>
		</div>
		<button class="btn btn-success w-full">Submit</button>
	</form>
</div>
