<script>
	import NavBar from '$lib/components/globals/NavBar.svelte'
	import Footer from '$lib/components/globals/Footer.svelte'

	export let data

	const { user } = data
</script>

<NavBar {user} />

<main>
	<slot />
</main>

<Footer />
