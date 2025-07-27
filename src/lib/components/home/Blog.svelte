<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import BlogPostCard from '../shared/BlogPostCard.svelte';

	let { blogPosts }: { blogPosts: BlogPost[] } = $props();
</script>

<section id="blog" class="min-h-[50vh] py-16 dark:bg-transparent">
	<div class="mx-auto max-w-4xl px-6">
		<h2 data-fade-in class="mb-12 text-3xl font-light text-gray-900 dark:text-gray-100">
			Latest Posts
		</h2>
		<div class="grid gap-8 md:grid-cols-2">
			{#each blogPosts as post}
				<BlogPostCard {post} />
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/blog"
				class="group inline-flex items-center text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
			>
				View all posts
				<ArrowRightIcon
					class="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>
