<script>
	import { toggle } from '$lib/store.js'
</script>

<div class="tooltip too sm:tooltip-left" data-tip={$toggle ? 'view mode' : 'edit mode'}>
	<button class="btn btn-sm btn-circle" on:click={toggle.toggle}>
		{#if $toggle}
			<i class="bi bi-eye-fill" />
		{:else}
			<i class="bi bi-pencil-square" />
		{/if}
	</button>
</div>
