<script lang="ts">
	import { formatDate } from '$lib/utilities';
	import CodeBlock from '$lib/components/shared/CodeBlock.svelte';

	let { data } = $props();

	let date = $derived(data.paste.$createdAt.split('T')[0]);
</script>

<main class="bg-gray-100 pt-20 md:pt-32 dark:bg-gray-900">
	<div class="mx-auto mb-8 max-w-4xl px-4 md:mb-12 md:px-6">
		<header class="mb-6">
			<h1 class="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-gray-100">
				{data.paste.title}
			</h1>
			<div class="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<time datetime={date}>{formatDate(date)}</time>
				<span>•</span>
				<span>{data.paste.visitCount} views</span>
				<span>•</span>
				<span class="font-mono">{data.paste.language}</span>
			</div>
		</header>

		<CodeBlock html={data.highlightedCode} code={data.paste.content}></CodeBlock>
	</div>
</main>
