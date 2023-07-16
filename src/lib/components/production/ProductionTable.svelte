<script>
	import Table from '$lib/components/table/Table.svelte'
	import { writable } from 'svelte/store'
	import { createTable } from 'svelte-headless-table'
	import {
		addSortBy,
		addTableFilter,
		addPagination,
		addSelectedRows
	} from 'svelte-headless-table/plugins'

	export let data = []

	const table = createTable(writable(data), {
		sort: addSortBy(),
		page: addPagination(),
		select: addSelectedRows(),
		tableFilter: addTableFilter()
	})

	const columns = table.createColumns([
		table.column({
			header: 'Name',
			accessor: 'name'
		}),
		table.column({
			header: 'Morning',
			accessor: 'morning'
		}),
		table.column({
			header: 'Afternoon',
			accessor: 'noon'
		}),
		table.column({
			header: 'Evening',
			accessor: 'evening'
		}),
		table.column({
			header: 'Total',
			accessor: 'total'
		}),
		table.column({
			header: 'Date',
			accessor: 'date'
		})
	])

	const { visibleColumns, headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns)

	const { filterValue } = pluginStates.tableFilter
	const { pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage } = pluginStates.page

	const props = {
		headerRows,
		tableAttrs,
		tableBodyAttrs,
		visibleColumns,
		filterValue,
		pageRows,
		pageIndex,
		pageCount,
		pageSize,
		hasNextPage,
		hasPreviousPage
	}
</script>

<Table {...props} />
