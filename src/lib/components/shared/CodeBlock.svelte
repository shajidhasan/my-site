<svelte:options customElement={{ tag: 'code-block', shadow: 'none' }} />

<script lang="ts">
	import CopyIcon from '@lucide/svelte/icons/copy';
	import CheckIcon from '@lucide/svelte/icons/check';

	let { code, html }: { code: string; html: string } = $props();

	let copied = $state(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};
</script>

<div class="relative">
	<button
		onclick={copyToClipboard}
		class="absolute top-4 right-4 z-10 flex items-center rounded px-3 py-2 text-xs text-white transition-colors duration-200 ease-in-out focus:outline-none"
		class:bg-gray-700={!copied}
		class:hover:bg-gray-600={!copied}
		class:bg-green-600={copied}
		class:hover:bg-green-500={copied}
		title="Copy to clipboard"
	>
		{#if copied}
			<CheckIcon size={16} class="mr-1.5" />
			<span>Copied!</span>
		{:else}
			<CopyIcon size={16} class="mr-1.5" />
			<span>Copy</span>
		{/if}
	</button>

	{@html html}
</div>
