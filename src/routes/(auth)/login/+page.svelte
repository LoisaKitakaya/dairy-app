<div class="flex min-h-full flex-col justify-center px-6 py-12 items-center">
	<div class="mx-auto max-w-sm">
		<h2 class="text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>
	</div>
	<div class="mt-10 mx-auto max-w-sm">
		<form class="space-y-6 bg-base-200 px-4 py-6 rounded-md" action="#" method="POST">
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
				<div class="flex items-center justify-between w-full max-w-xs">
					<label for="password" class="block text-sm font-medium leading-6">Password</label>
					<div class="text-sm">
						<a href="/reset" class="font-semibold link">Forgot password?</a>
					</div>
				</div>
				<div class="mt-2">
					<input
						type="password"
						name="password"
						required
						placeholder="password"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
			</div>

			<div>
				<button type="submit" class="btn btn-success w-full max-w-xs">Sign In</button>
			</div>
		</form>
	</div>
	<div class="mt-4 mx-auto max-w-sm">
		<p>
			Don't have an account? <a href="/register" class="link font-semibold">Register</a> here.
		</p>
	</div>
</div>
