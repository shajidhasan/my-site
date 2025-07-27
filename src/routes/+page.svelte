<script>
	import Blog from '$lib/components/home/Blog.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Projects from '$lib/components/home/Projects.svelte';

	let { data } = $props();
</script>

<Hero />
<Projects />
<Blog blogPosts={data.blogPosts} />
