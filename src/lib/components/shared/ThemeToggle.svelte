<script lang="ts">
	import { onMount } from 'svelte';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import IconButton from './IconButton.svelte';

	type EffectiveTheme = 'light' | 'dark';

	let currentTheme: EffectiveTheme = $state('light');

	const applyThemeToDOM = (theme: EffectiveTheme): void => {
		if (typeof document === 'undefined') return;
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	$effect(() => {
		applyThemeToDOM(currentTheme);
	});

	onMount(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const storedUserPreference = localStorage.getItem('theme') as EffectiveTheme | null;
		let initialEffectiveTheme: EffectiveTheme;

		if (storedUserPreference === 'light' || storedUserPreference === 'dark') {
			initialEffectiveTheme = storedUserPreference;
		} else {
			initialEffectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		}
		if (currentTheme !== initialEffectiveTheme) {
			currentTheme = initialEffectiveTheme;
		}
	});

	const toggleThemePreference = (): void => {
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		currentTheme = newTheme;

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme', newTheme);
		}
	};

	let nextThemeName: string = $derived(currentTheme === 'light' ? 'Dark' : 'Light');
	let buttonTitle: string = $derived(`Switch to ${nextThemeName} Mode`);
</script>

<svelte:head>
	<meta name="theme-color" content={currentTheme === 'light' ? '#ffffff' : '#18181b'} />
</svelte:head>

<IconButton label={buttonTitle} onclick={toggleThemePreference}>
	{#if currentTheme === 'light'}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</IconButton>
