<script lang="ts">
	let { children, onclick, label } = $props();
</script>

<button
	title={label}
	aria-label={label}
	{onclick}
	class="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
>
	{@render children()}
</button>
