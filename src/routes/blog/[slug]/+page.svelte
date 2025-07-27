<script lang="ts">
	import '$lib/components/shared/CodeBlock.svelte';
	import BlogPost from '$lib/components/blog/BlogPost.svelte';

	let { data } = $props();
</script>

<BlogPost blogPost={data.blogPost} contentHtml={data.contentHtml} />
