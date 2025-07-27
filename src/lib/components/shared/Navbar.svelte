<script lang="ts">
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import IconButton from '$lib/components/shared/IconButton.svelte';
	import { page } from '$app/state';
	import { browser } from '$app/environment';

	interface Section {
		title: string;
		href: string;
		id: 'about' | 'projects' | 'blog';
		position: number;
	}

	const sections: Section[] = [
		{
			title: 'About',
			href: '/',
			id: 'about',
			position: 101
		},
		{
			title: 'Projects',
			href: '/projects',
			id: 'projects',
			position: 101
		},
		{
			title: 'Blog',
			href: '/blog',
			id: 'blog',
			position: 101
		}
	];

	let mobileMenuOpen = $state(false);
	let scrollY: number = $state(0);

	let activeSection: Section | undefined = $derived.by(() => {
		if (page.url.pathname !== '/') {
			for (const section of sections) {
				if (section.href === '/') continue;
				if (page.url.pathname.startsWith(section.href)) {
					return section;
				}
			}
		} else {
			if (!browser) return sections[0];

			for (const section of sections) {
				if (scrollY <= section.position - 100) {
					return section;
				}
			}
		}
		return undefined;
	});

	$effect(() => {
		for (const section of sections) {
			const sectionElement = document.getElementById(section.id);
			if (sectionElement) {
				section.position = sectionElement.offsetTop + sectionElement.offsetHeight;
			}
		}
	});

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const closeMobileMenu = () => {
		mobileMenuOpen = false;
	};

	const handleScroll = () => {
		if (page.url.pathname !== '/') return;
		scrollY = window.scrollY;
	};
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/60 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/75"
>
	<div class="mx-auto max-w-4xl px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="text-lg font-semibold text-gray-900 dark:text-gray-100">Shajid Hasan</a>
			<div class="flex items-center gap-4">
				<div class="hidden gap-6 md:flex">
					{#each sections as section}
						<a
							href={section.href}
							class="relative text-sm font-medium text-gray-600 transition-all duration-300 after:absolute
                           after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-current after:transition-all
                           after:duration-300 after:content-[''] hover:text-gray-900
                           hover:after:w-full dark:text-gray-400 dark:hover:text-gray-100
                           {activeSection?.id === section.id
								? 'text-gray-900 after:w-full dark:text-gray-100'
								: ''}"
						>
							{section.title}
						</a>
					{/each}
				</div>
				<div class="flex items-center gap-2">
					<ThemeToggle />

					<div class="md:hidden">
						<IconButton label="Toggle Mobile Menu" onclick={toggleMobileMenu}>
							{#if mobileMenuOpen}
								<XIcon />
							{:else}
								<MenuIcon />
							{/if}
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<div
	class="fixed inset-0 z-40 transform bg-white transition-transform duration-300 md:hidden dark:bg-gray-900
    {mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
	<div class="p-6 pt-20">
		<div class="space-y-4">
			{#each sections as section}
				<a
					href={section.href}
					onclick={closeMobileMenu}
					class="block rounded-md px-3 py-2 text-lg transition-colors duration-150 ease-in-out
                           {activeSection?.id === section.id
						? 'bg-gray-100 font-semibold text-gray-900 dark:bg-gray-700 dark:text-gray-50'
						: 'font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200'}"
				>
					{section.title}
				</a>
			{/each}
		</div>
	</div>
</div>
