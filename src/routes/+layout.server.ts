import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
    const baseMetaTags = Object.freeze({
        title: 'Shajid Hasan',
        description: "Fullstack dev & mechanical engineering student sharing projects, programming tips, and ideas, mixing tech, creativity, and curiosity.",
        canonical: new URL(url.pathname, url.origin).href,
        openGraph: {
            type: 'website',
            url: new URL(url.pathname, url.origin).href,
            locale: 'en_IE',
            title: 'Shajid Hasan',
            description: 'Fullstack dev & mechanical engineering student sharing projects, programming tips, and ideas, mixing tech, creativity, and curiosity.',
            siteName: 'sh4jid.me',
            images: [
                {
                    url: 'https://sh4jid.me/og-image.jpg',
                    alt: 'Shajid Hasan',
                    width: 1200,
                    height: 630,
                    secureUrl: 'https://sh4jid.me/og-image.jpg',
                    type: 'image/jpeg'
                }
            ]
        }
    }) satisfies MetaTagsProps;

    return {
        baseMetaTags
    };
};