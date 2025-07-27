import RononLogo from '$lib/components/icons/projects/RononLogo.svelte';
import ChithiMeLogo from '$lib/components/icons/projects/ChithiMeLogo.svelte';
import MuktibegLogo from '$lib/components/icons/projects/MuktibegLogo.svelte';
import DotsAdventureLogo from '$lib/components/icons/projects/DotsAdventureLogo.svelte';
import ShehzadiLogo from '$lib/components/icons/projects/ShehzadiLogo.svelte';
import WishgramLogo from '$lib/components/icons/projects/WishgramLogo.svelte';
import BatnameLogo from '$lib/components/icons/projects/BatnameLogo.svelte';
import ProtifolonLogo from '$lib/components/icons/projects/ProtifolonLogo.svelte';

import type { Project } from '$lib/types';

export const projects: Project[] = [
    {
        href: 'https://chithi.me',
        logo: ChithiMeLogo,
        title: 'Chithi.me',
        description: 'An anonymous messaging app loved by Gen Z for its nostalgic vibe.',
    },
    {
        href: 'https://next.askronon.com',
        logo: RononLogo,
        title: 'Ronon',
        description: 'The best doubt-solving platform in Bangladesh for high school students.',
    },
    {
        href: 'https://dot.sh4jid.me',
        logo: DotsAdventureLogo,
        title: "Dot's Adventure",
        description: 'A Doodle Jump like game with a daily leaderboard.',
    },
    {
        href: 'https://muktibeg.com',
        logo: MuktibegLogo,
        title: 'Muktibeg',
        description: 'AI-powered teaching platform that generates natural-voice video lessons.',
        isNotFinished: true,
    },
    {
        href: 'https://protifolon.app',
        logo: ProtifolonLogo,
        title: 'Protifolon',
        description: 'A flashcard app for Bangladeshi medical aspirants to master exam prep efficiently.',
        isNotFinished: true,
    },
    {
        href: 'https://shehzadi.sh4jid.me',
        logo: ShehzadiLogo,
        title: 'Shehzadi in Peril',
        description: 'A cute mini-game where you rescue a Shehzadi from a relentless ant invasion.',
    },
    {
        href: 'https://batname.sh4jid.me',
        logo: BatnameLogo,
        title: 'Batname',
        description: 'A web app that lets you generate text in the style of the Batman logo from Matt Reeves’ film.'
    },
    {
        href: 'https://wishgram.sh4jid.me',
        logo: WishgramLogo,
        title: 'Wishgram',
        description: 'A web app for creating cute, handwritten-style cards for every occasion.'
    }
];
