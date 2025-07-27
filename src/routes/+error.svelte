<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/components/shared/Navbar.svelte';
	import HomeIcon from '@lucide/svelte/icons/home';

	let title = $derived.by(() => {
		switch (page.status) {
			case 400:
				return 'Bad Request';
			case 401:
				return 'Unauthorized';
			case 403:
				return 'Forbidden';
			case 404:
				return 'Resource Not Found';
			case 500:
				return 'Internal Server Error';
			case 502:
				return 'Bad Gateway';
			case 503:
				return 'Service Unavailable';
			case 504:
				return 'Gateway Timeout';
			default:
				return page.error?.message || 'An Error Occurred';
		}
	});

	let message = $derived.by(() => {
		switch (page.status) {
			case 400:
				return "The request couldn't be processed. Double-check the URL for any typos, or try navigating back home.";
			case 401:
				return 'This page requires you to be logged in. Head to the login page and give it another shot.';
			case 403:
				return 'This content is restricted right now. If you think you should have access, feel free to get in touch.';
			case 404:
				return 'This page seems to have wandered off somewhere. It might have been moved or the link could be outdated.';
			case 500:
				return "Something's not working quite right on the server side. The issue has been logged and will be fixed soon.";
			case 502:
				return "There's a connection issue between servers right now. Usually these resolve themselves pretty quickly.";
			case 503:
				return 'The site is temporarily down for maintenance or due to high traffic. Should be back up shortly.';
			case 504:
				return 'The server is taking longer than usual to respond. Give it a moment and try again.';
			default:
				if (page.error?.message && page.error.message !== title) {
					return page.error.message;
				}
				return 'An unexpected error occurred. Try refreshing the page or come back in a bit.';
		}
	});
</script>

<main class="bg-gray-100 pt-28 md:pt-32 dark:bg-gray-900">
	<div class="px-6 text-center">
		<h1 class="mb-4 text-center text-6xl font-light text-gray-300 md:text-8xl dark:text-gray-500">
			{page.status}
		</h1>
		<h2 class="mb-3 text-2xl font-medium text-gray-800 md:text-3xl dark:text-gray-100">{title}</h2>
		<p class="mx-auto mb-8 max-w-md text-gray-600 dark:text-gray-400">
			{message}
		</p>
		<a
			href="/"
			class="inline-flex items-center gap-2 rounded-md bg-rose-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-700"
		>
			<HomeIcon class="h-5 w-5" />
			<span> Back to Home </span>
		</a>
	</div>
</main>
