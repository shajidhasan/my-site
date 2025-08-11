<script lang="ts">
	import GithubIcon from '@icons-pack/svelte-simple-icons/icons/SiGithub';
	import XIcon from '@icons-pack/svelte-simple-icons/icons/SiX';
	import LinkedInIcon from '$lib/components/icons/LinkedIn.svelte';

	const socialLinks = [
		{
			href: 'https://github.com/shajidhasan/',
			ariaLabel: 'Shajid Hasan on Github',
			icon: GithubIcon
		},
		{
			href: 'https://x.com/sh4jid',
			ariaLabel: 'Shajid Hasan on X (formerly Twitter)',
			icon: XIcon
		},
		{
			href: 'https://www.linkedin.com/in/sh4jid/',
			ariaLabel: 'Shajid Hasan on LinkedIn',
			icon: LinkedInIcon
		}
	];
</script>

<section id="about" class="min-h-[50vh] py-16 pt-32">
	<div class="mx-auto max-w-4xl px-6">
		<div class="max-w-2xl">
			<h1 class="mb-6 text-3xl font-light text-gray-900 md:text-5xl dark:text-gray-50">
				hello, i'm <span class="font-medium text-gray-900 dark:text-gray-50">shajid hasan</span>
			</h1>
			<div class="mb-8 space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				<p>
					I'm a mechanical engineering undergrad with a love for computer science. I enjoy building
					things, whether mechanical or digital, and I'm especially drawn to web development and the
					creative side of tech.
				</p>
				<p>
					I'm also into entrepreneurship, solving real-world problems and turning ideas into
					products. In fact, you might know me from <a class="link" href="/projects"> projects </a> I've
					built, sometimes on my own and sometimes with friends.
				</p>
				<p>
					I like writing about what I learn, from programming tips to random philosophical thoughts,
					or anything in between! So, this website naturally serves as <a href="/blog" class="link"
						>my blog</a
					>.
				</p>
				<p>
					Outside of tech, I'm into fantasy books, video games, fighter jets, and superheroes. I
					practice card magic, fold origami to unwind, and play chess whenever I can.
				</p>
			</div>

			<div class="flex gap-6">
				{#each socialLinks as link}
					<a
						href={link.href}
						class="text-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
						aria-label={link.ariaLabel}
						target="_blank"
						rel="noopener noreferrer"
					>
						<link.icon />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
