<script lang="ts">
	let { title, subtitle } = $props();
</script>

<header class="mb-16">
	<h1 class="text-3xl font-light text-gray-900 md:text-4xl dark:text-gray-100">{title}</h1>
	<p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
		{subtitle}
	</p>
</header>
