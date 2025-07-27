<script lang="ts">
	import type { Project } from '$lib/types';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';

	let { project }: { project: Project } = $props();
</script>

{#if project.isNotFinished}
	<div
		class="group relative block rounded-lg border border-transparent bg-white p-6 transition-all
                   duration-300 dark:bg-gray-800"
	>
		<project.logo />

		<div class="mb-3 flex items-center gap-2">
			<h3 class="text-xl font-medium text-gray-900 dark:text-gray-100">{project.title}</h3>
			<span
				class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
			>
				In Progress
			</span>
		</div>
		<p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
	</div>
{:else}
	<a
		href={project.href}
		target="_blank"
		rel="noopener noreferrer"
		class="group relative block rounded-lg border border-transparent bg-white p-6 transition-all
                   duration-300 hover:-translate-y-0.5 hover:border-gray-200
                   hover:shadow-lg hover:shadow-gray-100/50 dark:bg-gray-800 dark:hover:border-gray-700 dark:hover:shadow-lg dark:hover:shadow-black/20"
	>
		<project.logo />

		<span
			class="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
		>
			<ExternalLinkIcon class="h-5 w-5" />
		</span>

		<h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-gray-100">{project.title}</h3>
		<p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
	</a>
{/if}
