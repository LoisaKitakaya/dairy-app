<script>
	import { Subscribe, Render } from 'svelte-headless-table';
	import { fade } from 'svelte/transition';

	export let headerRows,
		tableAttrs,
		tableBodyAttrs,
		visibleColumns,
		filterValue,
		pageRows,
		pageIndex,
		pageCount,
		pageSize,
		hasNextPage,
		hasPreviousPage;
</script>

<table class="table">
	<thead>
		<tr>
			<th colspan={$visibleColumns.length}>
				<input
					class="input input-bordered input-md w-full"
					type="text"
					bind:value={$filterValue}
					placeholder="Search rows..."
				/>
			</th>
		</tr>
	</thead>
</table>

<div class="overflow-x-auto" transition:fade>
	<table {...$tableAttrs} class="table table-pin-rows text-center mb-4">
		<thead>
			{#each $headerRows as headerRow (headerRow.id)}
				<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
					<tr {...rowAttrs} class="bg-base-300 text-base-content">
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<th {...attrs} on:click={props.sort.toggle} class="cursor-pointer">
									<Render of={cell.render()} />
									{#if props.sort.order === 'asc'}
										⬇️
									{:else if props.sort.order === 'desc'}
										⬆️
									{/if}
								</th>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</thead>
		<tbody {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<tr {...rowAttrs} class="hover">
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<td {...attrs}>
									<Render of={cell.render()} />
								</td>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</tbody>
	</table>
</div>

<div
	class="flex justify-between sm:justify-center gap-4 items-center flex-col sm:flex-row mt-4 sm:mt-0"
>
	<div class="flex justify-end items-center gap-2">
		<label for="page-size">Page size:</label>
		<input
			id="page-size"
			class="input input-bordered input-sm w-24 max-w-xs"
			type="number"
			min={1}
			bind:value={$pageSize}
		/>
	</div>
	<div class="flex justify-start items-center gap-2">
		<button
			class="btn btn-xs btn-active btn-ghost"
			on:click={() => $pageIndex--}
			disabled={!$hasPreviousPage}>Prev</button
		>
		<span class="text-base">Page {$pageIndex + 1} of {$pageCount}</span>
		<button
			class="btn btn-xs btn-active btn-ghost"
			on:click={() => $pageIndex++}
			disabled={!$hasNextPage}>Next</button
		>
	</div>
</div>
