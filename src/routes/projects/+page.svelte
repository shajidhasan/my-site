<script lang="ts">
	import ProjectCard from '$lib/components/shared/ProjectCard.svelte';
	import { projects } from '$lib/data';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
</script>

<main class="bg-gray-100 pt-28 md:pt-32 dark:bg-gray-900">
	<div class="mx-auto max-w-4xl px-6">
		<PageHeader
			title="Things I've Built"
			subtitle="Personal projects, experiments, and a few ideas that spiraled into full-on apps."
		/>

		<div class="grid gap-8 md:grid-cols-2">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
	<div class="mt-16 pb-4 text-center">
		<a
			href="https://github.com/shajidhasan"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center text-lg text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
		>
			Find more on my GitHub
			<ExternalLink class="ml-2 h-5 w-5" />
		</a>
	</div>
</main>
