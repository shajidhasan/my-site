<script lang="ts">
	import '@fontsource-variable/baloo-da-2';
	import '@fontsource/space-mono';

	import '../app.css';

	import Footer from '$lib/components/shared/Footer.svelte';
	import Navbar from '$lib/components/shared/Navbar.svelte';

	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { navigating, page } from '$app/state';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	let { data, children } = $props();

	const themeLoaderScript = () => {
		(function () {
			const themeKey = 'theme';
			const darkClassName = 'dark';
			let LStheme;

			try {
				LStheme = localStorage.getItem(themeKey);
			} catch (e) {}

			let applyDark;

			if (LStheme === 'dark') {
				applyDark = true;
			} else if (LStheme === 'light') {
				applyDark = false;
			} else {
				if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
					applyDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				} else {
					applyDark = false;
				}
			}

			if (applyDark) {
				document.documentElement.classList.add(darkClassName);
			} else {
				document.documentElement.classList.remove(darkClassName);
			}
		})();
	};

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	NProgress.configure({ showSpinner: false });

	$effect(() => {
		if (navigating.from !== null) {
			NProgress.start();
		} else {
			NProgress.done();
		}
	});
</script>

<svelte:head>
	{@html `<script>(${themeLoaderScript.toString()})();</script>`}
</svelte:head>

<MetaTags {...metaTags} />

<Navbar />
{@render children()}
<Footer />
