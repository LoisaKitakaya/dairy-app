<script>
	import { enhance } from '$app/forms'
	import * as config from '$lib/config'

	const themes = [
		['fantasy', 'retro', 'cyberpunk', 'valentine'],
		['aqua', 'dracula', 'luxury', 'synthwave']
	]

	const updateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
		}
	}
</script>

<svelte:head>
	<title>{config.title} | Themes</title>
</svelte:head>

<section class="pt-20 pb-8 px-6 sm:px-4">
	<h1 class="text-2xl text-center mt-6">APP THEMES</h1>
	<div class="w-fit mx-auto my-10 p-6 rounded-xl shadow bg-base-200">
		<form method="POST" class="grid grid-cols-2 gap-4" use:enhance={updateTheme}>
			{#each themes[0] as light}
				<button
					formaction="?/setTheme&theme={light}"
					class="btn btn-active btn-ghost mt-4 w-full flex flex-col items-center justify-center"
					><span>{light}</span>
					<span class="header-three" style="font-size: 9px">light</span></button
				>
			{/each}
			{#each themes[1] as dark}
				<button
					formaction="?/setTheme&theme={dark}"
					class="btn btn-active btn-ghost mt-4 w-full flex flex-col items-center justify-center"
					><span>{dark}</span> <span class="header-three" style="font-size: 9px">dark</span></button
				>
			{/each}
		</form>
	</div>
	<h1 class="text-lg text-center mt-6">🔥 Enjoy! 🔥</h1>
</section>
