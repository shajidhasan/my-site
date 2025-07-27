<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import LinkIcon from '@lucide/svelte/icons/link-2';

	const WAIT_TIME = 8;

	let { data } = $props();

	let countdown = $state(WAIT_TIME);
	let intervalId: ReturnType<typeof setInterval> | undefined;

	let progress = $derived.by(() => {
		// Use elapsed time instead of remaining time for better sync
		const elapsed = WAIT_TIME - countdown;
		return Math.min((elapsed / WAIT_TIME) * 100, 100);
	});

	onMount(() => {
		intervalId = setInterval(() => {
			countdown -= 1;
			if (countdown <= 0) {
				clearInterval(intervalId);
				window.location.href = data.shortLink.destinationUrl;
			}
		}, 1000);

		// Update progress immediately on mount to start at 0
		progress;
	});

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<main class="flex items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
	<div class="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800/60">
		<div class="mb-8 flex justify-center">
			<LinkIcon class="h-12 w-12 text-rose-500 dark:text-rose-400" />
		</div>

		<h1 class="mb-6 text-xl font-medium text-gray-800 dark:text-gray-100">
			{data.shortLink.message}
		</h1>

		<p class="mb-8 text-sm text-gray-600 dark:text-gray-400">Redirecting you automatically...</p>

		<div class="mb-6 text-center">
			<div class="mb-2 text-2xl font-semibold text-rose-600 dark:text-rose-400">
				{countdown}
			</div>
			<div class="text-sm text-gray-600 dark:text-gray-400">
				second{countdown === 1 ? '' : 's'}
			</div>
		</div>

		<div class="mb-8 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
			<div
				class="h-full rounded-full bg-rose-500 transition-all duration-1000 ease-linear dark:bg-rose-600"
				style="width: {progress}%;"
				aria-label="Redirection progress"
				role="progressbar"
				aria-valuenow={progress}
				aria-valuemin="0"
				aria-valuemax="100"
			></div>
		</div>

		<div class="text-center">
			<a
				href={data.shortLink?.destinationUrl}
				class="text-sm text-gray-500 hover:text-rose-600 hover:underline dark:text-gray-400 dark:hover:text-rose-400"
			>
				Continue manually
			</a>
		</div>
	</div>
</main>
