<script lang="ts">
	import { formatDate } from '$lib/utilities';
	import '$lib/components/shared/CodeBlock.svelte';

	let { data } = $props();
	let date = $derived(data.note.$createdAt.split('T')[0]);
</script>

<main class="bg-gray-100 pt-20 md:pt-32 dark:bg-gray-900">
	<div class="mx-auto mb-8 max-w-4xl px-4 md:mb-12 md:px-6">
		<div
			class="w-full rounded-lg bg-white px-4 py-6 shadow-sm md:px-6 md:py-12 dark:bg-gray-800/60 dark:shadow-none"
		>
			<header class="mb-6 text-center md:mb-8">
				<h1 class="mb-3 text-3xl font-semibold text-gray-800 md:text-4xl dark:text-gray-100">
					{data.note.title}
				</h1>

				<div
					class="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400"
				>
					<time datetime={date}>{formatDate(date)}</time>
					<span>•</span>
					<span>{data.note.visitCount} views</span>
				</div>
			</header>

			<article class="prose dark:prose-invert max-w-none">
				<div class="max-w-full overflow-x-auto">
					{@html data.htmlNote}
				</div>
			</article>
		</div>
	</div>
</main>
