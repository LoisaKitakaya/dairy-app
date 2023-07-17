<script>
	import moment from 'moment'
	import * as config from '$lib/config'

	export let data

	const { reports } = data

	let reportsData
	let error

	if (reports.data !== null) {
		reportsData = reports.data.get_all_auto_reports_records
	} else {
		error = reports.errors[0].message
	}
</script>

<section class="pt-20 pb-8 px-6 sm:px-4">
	{#if !error}
		{#if reportsData.length > 0}
			<h1 class="text-xl font-semibold text-center sm:text-left mt-4 mb-8">Weekly Reports</h1>
			{#each reportsData as report, i (report._id)}
				<div class="w-full flex justify-start gap-4 items-baseline">
					<span class="font-semibold">#{i + 1}</span>
					<div>
						<p class="text-xl mb-4">
							<a href="{config.url}/app/reports/{report._id}" class="link link-hover"
								>{report.title}</a
							>
						</p>
						<p class="mb-2"><span class="font-semibold">ID:</span> {report._id}</p>
						<p>Created {moment.unix(report.created_on).fromNow()}</p>
					</div>
				</div>
				<div class="divider" />
			{/each}
		{:else}
			<h1 class="text-center text-xl my-36">0 records found.</h1>
		{/if}
	{:else}
		<h1 class="text-center text-xl underline my-36 text-error">Error: {error}</h1>
	{/if}
</section>
