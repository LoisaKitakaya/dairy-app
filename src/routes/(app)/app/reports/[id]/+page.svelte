<script>
	export let data

	const { report } = data

	let reportData
	let error

	if (report.data !== null) {
		reportData = report.data.get_auto_reports_record
	} else {
		error = report.errors[0].message
	}
</script>

<section class="pt-20 pb-8 px-6 sm:px-4">
	{#if !error}
		{#if reportData}
			<h1 class="text-xl font-semibold text-center my-4">{reportData.title}</h1>

			<div class="stats shadow w-full mt-8 overflow-auto">
				<div class="stat">
					<div class="stat-figure text-secondary">
						<i class="bi bi-droplet-fill text-4xl text-base-content" />
					</div>
					<div class="stat-title">Total Production</div>
					<div class="stat-value">
						Litres {reportData.production.total_milk_production.toLocaleString()}
					</div>
					<div class="stat-desc">Total milk produced</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-secondary">
						<i class="bi bi-droplet-half text-4xl text-base-content" />
					</div>
					<div class="stat-title">Average Production</div>
					<div class="stat-value">
						Litres {reportData.production.average_milk_production.toLocaleString()}
					</div>
					<div class="stat-desc">Average milk produced</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-secondary">
						<i class="bi bi-cash-stack text-4xl text-base-content" />
					</div>
					<div class="stat-title">Expected Gross Income</div>
					<div class="stat-value">
						KES {reportData.payment.expected_gross_earnings.toLocaleString()}
					</div>
					<div class="stat-desc">Total expected earnings</div>
				</div>
			</div>

			<div class="stats shadow w-full mt-8 overflow-auto">
				<div class="stat">
					<div class="stat-figure text-secondary">
						<i class="bi bi-coin text-4xl text-base-content" />
					</div>
					<div class="stat-title">Gross Income</div>
					<div class="stat-value">KES {reportData.payment.gross_earnings.toLocaleString()}</div>
					<div class="stat-desc">Before expenses</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-secondary">
						<i class="bi bi-currency-exchange text-4xl text-base-content" />
					</div>
					<div class="stat-title">Expense</div>
					<div class="stat-value">KES {reportData.expenses.total_expenses.toLocaleString()}</div>
					<div class="stat-desc">Total expenses incurred</div>
				</div>

				<div class="stat">
					<div class="stat-figure text-secondary">
						<i class="bi bi-cash-coin text-4xl text-base-content" />
					</div>
					<div class="stat-title">Net Income</div>
					<div class="stat-value">KES {reportData.payment.net_earnings.toLocaleString()}</div>
					<div class="stat-desc">After expenses</div>
				</div>
			</div>

			<form method="POST" class="mt-8 w-fit mx-auto">
				<div class="tooltip" data-tip="Delete report">
					<button
						class="btn hover:btn-error"
						formaction="?/deleteReport&id={reportData._id}"><i class="bi bi-trash" /></button
					>
				</div>
			</form>
		{:else}
			<h1 class="text-center text-xl my-36">0 Item does not exist.</h1>
		{/if}
	{:else}
		<h1 class="text-center text-xl underline my-36 text-error">Error: {error}</h1>
	{/if}
</section>
