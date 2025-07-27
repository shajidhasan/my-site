<script lang="ts">
	import { projects } from '$lib/data';
	import ProjectCard from '$lib/components/shared/ProjectCard.svelte';
	import SeeMoreLink from '$lib/components/shared/SeeMoreLink.svelte';

	const homePageProjects = $derived(projects.slice(0, 4));
</script>

<section id="projects" class="min-h-[50vh] bg-gray-100 py-16 dark:bg-gray-800/20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 class="mb-12 text-3xl font-light text-gray-900 dark:text-gray-100">Projects</h2>
		<div class="grid gap-8 md:grid-cols-2">
			{#each homePageProjects as project, i}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>

	<SeeMoreLink href="/projects" title="View More Projects" />
</section>
