<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import { formatDate } from '$lib/utilities';

	let { post }: { post: BlogPost } = $props();
</script>

<article
	class="flex flex-col overflow-hidden rounded-lg border border-transparent bg-white transition-all duration-300 hover:-translate-y-0.5
                   hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100/20
                   dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:shadow-2xl dark:hover:shadow-black/25"
>
	<a href="/blog/{post.slug}" class="block">
		<img
			src={post.featuredImageUrl}
			alt="Featured image for {post.title}"
			class="h-36 w-full object-cover"
		/>
	</a>
	<div class="flex flex-1 flex-col p-6">
		<div
			class="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400"
		>
			<time>{formatDate(post.publishedAt)}</time>
			<span>•</span>
			<span>{post.readTimeMinutes} min read</span>
			{#if post.bengaliAvailable}
				<span>•</span>
				<span
					class="font-bengali inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300"
				>
					বাংলাতেও আছে
				</span>
			{/if}
		</div>
		<h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-gray-100">
			<a
				href="/blog/{post.slug}"
				class="transition-colors duration-300 hover:text-rose-600 dark:hover:text-rose-400"
			>
				{post.title}
			</a>
		</h3>
		<p class="flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
			{post.excerpt}
		</p>

		{#if post.tags && post.tags.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each post.tags as tag (tag)}
					<span
						class="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 transition-colors duration-200 hover:bg-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:hover:bg-rose-500/25"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</article>
