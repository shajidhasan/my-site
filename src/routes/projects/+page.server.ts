import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
    const pageMetaTags = Object.freeze({
        title: 'Projects - Shajid Hasan',
        description: 'A collection of personal and collaborative projects by Shajid Hasan.',
        openGraph: {
            title: 'Projects - Shajid Hasan',
            description: 'A collection of personal and collaborative projects by Shajid Hasan.',
        }
    }) satisfies MetaTagsProps;

    return {
        pageMetaTags
    };
};