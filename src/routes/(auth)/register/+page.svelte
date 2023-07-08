<script>
	import { enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 items-center">
	<div class="mx-auto max-w-sm">
		<h2 class="text-2xl font-bold leading-9 tracking-tight">Sign up for a new account</h2>
	</div>
	<div class="mt-10 mx-auto max-w-sm">
		<form
			class="space-y-6 bg-base-200 px-4 py-6 rounded-md"
			method="POST"
			use:enhance={({ formElement }) => {
				return async ({ result, update }) => {
					if (result.data) {
						toast.error(result.data.message);
					}
					update();
				};
			}}
		>
			<div>
				<label for="email" class="block text-sm font-medium leading-6">Username</label>
				<div class="mt-2">
					<input
						type="text"
						name="username"
						placeholder="e.g. John Doe"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
			</div>
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
				<label for="password" class="block text-sm font-medium leading-6">Password</label>
				<div class="mt-2">
					<input
						type="password"
						name="password"
						required
						placeholder="password"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="mt-2">
					<input
						type="password"
						name="confirmPassword"
						required
						placeholder="confirm password"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
			</div>

			<div>
				<button type="submit" class="btn btn-success w-full max-w-xs">Sign Up</button>
			</div>
		</form>
	</div>
	<div class="mt-4 mx-auto max-w-sm">
		<p>
			Already have an account? <a href="/login" class="link font-semibold">Login</a> here.
		</p>
	</div>
</div>

<Toaster />
