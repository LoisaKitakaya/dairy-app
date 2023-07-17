<script>
	import toast, { Toaster } from 'svelte-french-toast'
	import * as config from '$lib/config'
	import { fade } from 'svelte/transition'

	export let form

	if (form) {
		form.success === true ? toast.success(form.message) : toast.error(form.message)
	}
</script>

<svelte:head>
	<title>{config.title} | Reset Password</title>
</svelte:head>

<div
	class="flex min-h-full flex-col justify-center px-6 py-12 items-center"
	out:fade={{ duration: 400 }}
	in:fade={{ delay: 400, duration: 400 }}
>
	{#if form}
		{#if form.success === true}
			<div class="mt-10 mx-auto max-w-sm">
				<p class="mt-10 text-center">
					Back to <a href="/login" class="link font-semibold">Login</a>.
				</p>
			</div>
		{/if}
	{:else}
		<div class="mx-auto max-w-sm">
			<h2 class="mt-10 text-2xl text-center font-bold leading-9 tracking-tight">
				Enter a new password
			</h2>
		</div>
		<div class="mt-10 mx-auto max-w-sm">
			<form class="space-y-6 bg-base-200 px-4 py-6 rounded-md" method="POST">
				<div>
					<label for="password" class="block text-sm font-medium leading-6">New password</label>
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
					<button type="submit" class="btn btn-success w-full max-w-xs">Reset</button>
				</div>
			</form>
		</div>
		<div class="mt-4 mx-auto max-w-sm">
			<p class="italic text-center">
				<span class="font-semibold">NOTE:</span> Password reset links expire exactly 1 hour after successfully
				receiving the link!
			</p>
		</div>
	{/if}
</div>

<Toaster />
