<script>
	import toast, { Toaster } from 'svelte-french-toast'

	export let form

	if (form) {
		form.success === true ? toast.success(form.message) : toast.error(form.message)
	}
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 items-center">
	<div class="mx-auto max-w-sm">
		<h2 class="mt-10 text-2xl text-center font-bold leading-9 tracking-tight">
			Enter you email address
		</h2>
	</div>
	<div class="mt-10 mx-auto max-w-sm">
		<form class="space-y-6 bg-base-200 px-4 py-6 rounded-md" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6">Email address</label>
				<div class="mt-2">
					<input
						type="email"
						name="email"
						placeholder="e.g. johndoe@example.com"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
			</div>

			<div>
				<button type="submit" class="btn btn-success w-full max-w-xs">Submit</button>
			</div>
		</form>
	</div>
	<div class="mt-4 mx-auto max-w-sm">
		<p class="italic text-center">
			<span class="font-semibold">NOTE:</span> Use the email address you used to register this account
			with!
		</p>
	</div>
</div>

<Toaster />
