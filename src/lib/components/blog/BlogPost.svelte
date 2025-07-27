<script lang="ts">
	import '$lib/components/shared/CodeBlock.svelte';
	import { formatDate } from '$lib/utilities';
	import { page } from '$app/state';
	import type { BlogPost } from '$lib/types';
	import sh4jid from '$lib/assets/sh4jid.jpg';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	interface Props {
		blogPost: BlogPost;
		contentHtml: string;
		isBengali?: boolean;
	}

	let { blogPost, contentHtml, isBengali = false }: Props = $props();

	let title = $derived(isBengali ? blogPost.bengaliTitle : blogPost.title);
	let readTimeMinutes = $derived(blogPost.readTimeMinutes);
	let date = $derived(blogPost.publishedAt.split('T')[0]);
	let bengaliAvailable = $derived(blogPost.bengaliAvailable);
	let tags = $derived(blogPost.tags);
	let featuredImageUrl = $derived(blogPost.featuredImageUrl);
</script>

<main class="pt-20 sm:pt-24 md:pt-32">
	<div class="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
		<header class="mb-10 md:mb-12">
			<!-- Title and Language Switcher Row -->
			<div class="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
				<h1
					class="flex-1 text-3xl leading-tight font-medium text-gray-800 sm:text-4xl md:text-5xl dark:text-gray-200"
					class:font-bengali={isBengali}
				>
					{title}
				</h1>

				{#if bengaliAvailable}
					<div class="flex-shrink-0 self-start">
						<div class="inline-flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
							<a
								href="/blog/{page.params.slug}"
								role="button"
								aria-pressed={!isBengali}
								aria-label="Switch to English"
								class="relative rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 {!isBengali
									? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
									: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'}"
							>
								EN
							</a>

							<a
								href="/blog/{page.params.slug}/bn"
								role="button"
								aria-pressed={isBengali}
								aria-label="Switch to Bengali"
								class="font-bengali relative rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 {isBengali
									? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
									: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'}"
							>
								বাং
							</a>
						</div>
					</div>
				{/if}
			</div>

			<!-- Meta Information -->
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div class="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
					<time datetime={date} class="whitespace-nowrap">{formatDate(date)}</time>
					<span>•</span>
					<span class="whitespace-nowrap">{readTimeMinutes} min read</span>
					<span>•</span>
					<span class="whitespace-nowrap">By Shajid Hasan</span>
				</div>

				<!-- Tags -->
				{#if tags.length > 0}
					<div class="flex flex-wrap gap-2">
						{#each tags as tag}
							<span
								class="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<!-- Featured Image -->
		<figure class="mb-10 md:mb-12">
			<img
				src={featuredImageUrl}
				alt={title}
				class="h-auto max-h-80 w-full rounded-xl object-cover shadow-lg sm:aspect-[2/1]"
			/>
		</figure>

		<!-- Article Content -->
		<article
			class="prose dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-rose-600 dark:prose-a:text-rose-400 prose-strong:text-gray-800 dark:prose-strong:text-gray-200 max-w-none"
			class:font-bengali={isBengali}
		>
			{@html contentHtml}
		</article>

		<div class="mt-16 border-t border-gray-200 pt-12 dark:border-gray-700">
			<div class="flex items-start gap-6">
				<div class="h-16 w-16 overflow-clip rounded-full">
					<img
						src={sh4jid}
						alt="Shajid Hasan"
						class="h-full w-full rounded-full object-cover object-top"
					/>
				</div>
				<div class="flex-1">
					<h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Shajid Hasan</h3>
					<p class="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
						Mechanical engineering student who got into coding and can't stop building things. I
						write about the projects I'm working on and whatever random tech stuff catches my
						attention.
					</p>
					<div class="mt-4">
						<a
							href="https://twitter.com/sh4jid"
							class="group inline-flex items-center font-medium text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
						>
							<span> Follow me @sh4jid </span>

							<ArrowRightIcon
								class="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
