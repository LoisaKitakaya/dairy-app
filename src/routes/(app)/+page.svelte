<script>
	import * as config from '$lib/config'

	export let data

	const { user } = data
</script>

<svelte:head>
	<title>{config.title} | Home</title>
</svelte:head>

<div
	class="hero min-h-screen"
	style="background-image: url(https://images.pexels.com/photos/13317661/pexels-photo-13317661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Rislo Farm</h1>
			<p class="mb-5 text-xl">
				"Discover the Bounty of Nature: Where Farm Fresh Dreams Come to Life!"
			</p>
			{#if !user}
				<div class="flex justify-center items-center gap-4">
					<a href="/register" class="btn btn-sm btn-primary">Sign Up</a>
					<a href="/login" class="btn btn-sm btn-primary">Sign In</a>
				</div>
			{/if}
		</div>
	</div>
</div>
