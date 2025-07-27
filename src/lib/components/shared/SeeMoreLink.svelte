<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	let { href, title }: { href: string; title: string } = $props();
</script>

<div class="mt-12 text-center">
	<a
		{href}
		class="group inline-flex items-center text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
	>
		{title}
		<ArrowRightIcon
			class="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
		/>
	</a>
</div>
