<script>
	import BlogPostCard from '$lib/components/shared/BlogPostCard.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';

	let { data } = $props();
</script>

<main class="bg-gray-100 pt-28 md:pt-32 dark:bg-gray-900">
	<div class="mx-auto max-w-4xl px-6">
		<PageHeader
			title="Stuff I've Been Writing"
			subtitle="Just a bunch of thoughts on tech, AI, coding, and whatever else is on my mind lately."
		/>

		<div class="grid gap-8 md:grid-cols-2">
			{#each data.blogPosts as post}
				<BlogPostCard {post} />
			{/each}
		</div>
	</div>
</main>
