<div class="my-4">
	<p class="mb-4 text-center">Record new customers</p>

	<form method="POST" action="?/createCustomerRecord">
		<div class="mb-4">
			<label for="name" class="px-1">Name</label>
			<input
				type="text"
				name="name"
				placeholder="name of buyer"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Priority</label>
			<select name="priority" class="select select-bordered w-full">
				<option disabled selected>Select priority level</option>
				<option value="High">High</option>
				<option value="Mid">Mid</option>
				<option value="Low">Low</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Phone</label>
			<input
				type="text"
				name="phone"
				placeholder="phone number"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Trip</label>
			<select name="trip" class="select select-bordered w-full">
				<option disabled selected>Select trip</option>
				<option value="Morning">Morning</option>
				<option value="Afternoon">Afternoon</option>
				<option value="Evening">Evening</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="name" class="px-1">Package</label>
			<input
				type="number"
				step="0.01"
				name="package"
				placeholder="Customer subscription"
				class="input input-bordered w-full"
			/>
		</div>
		<button class="btn btn-success w-full">Submit</button>
	</form>
</div>
