<script>
	import { enhance } from '$app/forms';

	export let data;

	const { user } = data;

	const refreshPage = ({ action }) => {
		const move = action.searchParams.get('move');

		return async () => {
			if (move) {
				location.reload();
			}
		};
	};
</script>

<!-- Navbar -->
<div class="navbar bg-base-200 shadow-sm fixed top-0 z-10">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<span tabindex="0" class="btn btn-ghost lg:hidden">
				<i class="bi bi-list text-2xl" />
			</span>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-4 z-[1] p-2 bg-base-200 shadow-sm rounded-box w-36"
			>
				<li>
					<a href="/" class="flex items-center justify-start gap-2"
						><i class="bi bi-house text-lg" /> <span>Home</span></a
					>
				</li>
				<li>
					<a href="/app/production" class="flex items-center justify-start gap-2"
						><i class="bi bi-droplet text-lg" /> <span>Production</span></a
					>
				</li>
				<li>
					<a href="/app/earnings" class="flex items-center justify-start gap-2"
						><i class="bi bi-piggy-bank text-lg" /> <span>Earnings</span></a
					>
				</li>
				<li>
					<a href="/app/customers" class="flex items-center justify-start gap-2"
						><i class="bi bi-people text-lg" /> <span>Customers</span></a
					>
				</li>
				<li>
					<a href="/app/expenses" class="flex items-center justify-start gap-2"
						><i class="bi bi-cash text-lg" /> <span>Expenses</span></a
					>
				</li>
				<li>
					<a href="/app/reports" class="flex items-center justify-start gap-2"
						><i class="bi bi-bar-chart-line text-lg" /> <span>Reports</span></a
					>
				</li>
			</ul>
		</div>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="flex items-center justify-center gap-4 px-1">
			<li>
				<a href="/" class="flex items-center justify-start gap-1 link link-hover"
					><i class="bi bi-house text-lg" /> <span>Home</span></a
				>
			</li>
			<li>
				<a href="/app/production" class="flex items-center justify-start gap-1 link link-hover"
					><i class="bi bi-droplet text-lg" /> <span>Production</span></a
				>
			</li>
			<li>
				<a href="/app/earnings" class="flex items-center justify-start gap-1 link link-hover"
					><i class="bi bi-piggy-bank text-lg" /> <span>Earnings</span></a
				>
			</li>
			<li>
				<a href="/app/customers" class="flex items-center justify-start gap-1 link link-hover"
					><i class="bi bi-people text-lg" /> <span>Customers</span></a
				>
			</li>
			<li>
				<a href="/app/expenses" class="flex items-center justify-start gap-1 link link-hover"
					><i class="bi bi-cash text-lg" /> <span>Expenses</span></a
				>
			</li>
			<li>
				<a href="/app/reports" class="flex items-center justify-start gap-1 link link-hover"
					><i class="bi bi-bar-chart-line text-lg" /> <span>Reports</span></a
				>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		{#if user}
			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<span tabindex="0" class="btn btn-ghost btn-circle">
					<i class="bi bi-three-dots text-xl sm:text-2xl" />
				</span>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-4 z-[1] p-2 bg-base-200 shadow-sm rounded-box w-36"
				>
					<li>
						<a href="/app/themes" class="flex items-center justify-start gap-2"
							><i class="bi bi-palette text-lg" /> <span>Themes</span></a
						>
					</li>
					<li>
						<form method="POST" use:enhance={refreshPage}>
							<button
								type="submit"
								class="flex items-center justify-start gap-2"
								formaction="/?/logout&move='logout'"
								><i class="bi bi-box-arrow-left text-lg" /> <span>Logout</span></button
							>
						</form>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
<!-- Navbar -->

<slot />

<!-- Footer -->
<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded w-full">
	<div class="grid grid-flow-row sm:grid-flow-col gap-2 sm:gap-4">
		<a href="/" class="link link-hover">Home</a>
		<a href="/app/production" class="link link-hover">Production</a>
		<a href="/app/earnings" class="link link-hover">Earnings</a>
		<a href="/app/customers" class="link link-hover">Customers</a>
		<a href="/app/expenses" class="link link-hover">Expenses</a>
		<a href="/app/reports" class="link link-hover">Reports</a>
	</div>
	<div>
		<p>
			Copyright © 2023 - All right reserved - <span class="font-semibold">Rislo Farm</span> Ltd
		</p>
	</div>
</footer>
<!-- Footer -->
