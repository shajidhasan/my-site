import { databases } from '$lib/server/appwrite.js'
import type { BlogPost } from '$lib/types.js';
import { marked } from '$lib/utilities.js';
import { error } from '@sveltejs/kit';
import { AppwriteException, Query, type Models } from 'node-appwrite';
import type { MetaTagsProps } from 'svelte-meta-tags';



export const load = async ({ params }) => {
    let listResponse: Models.DocumentList<BlogPost> | null = null;

    try {
        listResponse = await databases.listDocuments<BlogPost>(
            'main',
            'blog',
            [
                Query.equal('slug', params.slug),
                Query.equal('bengaliAvailable', true),
                Query.limit(1)
            ]
        )
    }
    catch (e) {
        if (e instanceof AppwriteException) {
            return error(e.code)
        }
        return error(500)
    }

    if (listResponse && listResponse.total === 0) {
        return error(404)
    }

    const blogPost = listResponse.documents[0];
    let updatePromise;

    try {
        updatePromise = databases.updateDocument('main', 'blog', blogPost.$id, { 'visitCount': blogPost.visitCount + 1 })
    } catch (e) {
        console.log("Could not update visit count:", e)
    }

    const contentHtml = await marked.parse(blogPost.bengaliContent);

    const pageMetaTags = Object.freeze({
        title: `${blogPost.bengaliTitle} - Shajid Hasan`,
        description: blogPost.bengaliExcerpt,
        canonical: `https://sh4jid.me/blog/${blogPost.slug}`,
        keywords: blogPost.tags,
        openGraph: {
            title: `${blogPost.bengaliTitle} - Shajid Hasan`,
            description: blogPost.bengaliExcerpt,
            type: 'article',
            url: `https://sh4jid.me/blog/${blogPost.slug}`,
            publishedTime: blogPost.publishedAt,
            tags: blogPost.tags,
            images: [
                {
                    url: blogPost.featuredImageUrl,
                    alt: blogPost.bengaliTitle,
                    secureUrl: blogPost.featuredImageUrl,
                    type: 'image/jpeg'
                }
            ]
        },
        twitter: {
            title: `${blogPost.bengaliTitle} - Shajid Hasan`,
            description: blogPost.bengaliExcerpt,
            images: [blogPost.featuredImageUrl],
            site: '@sh4jid'
        }
    }) satisfies MetaTagsProps;

    return { blogPost, contentHtml, pageMetaTags, updatePromise }
}