import { databases } from '$lib/server/appwrite.js'
import type { ShortLink } from '$lib/types.js';
import { error, redirect } from '@sveltejs/kit';
import { AppwriteException, Query, type Models } from 'node-appwrite';
import type { MetaTagsProps } from 'svelte-meta-tags';


export const load = async ({ params }) => {
    let listResponse: Models.DocumentList<ShortLink> | null = null;

    try {
        listResponse = await databases.listDocuments<ShortLink>(
            'main',
            'urls',
            [
                Query.equal('alias', params.alias),
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

    const shortLink = listResponse.documents[0];
    let updatePromise;

    try {
        updatePromise = databases.updateDocument('main', 'urls', shortLink.$id, { 'visitCount': shortLink.visitCount + 1 })
    } catch (e) {
        console.log("Could not update visit count:", e)
    }

    if (shortLink.message && shortLink.message.length > 0) {
        const pageMetaTags = Object.freeze({
            title: `Link Redirect`,
            description: 'A short link sahred by Shajid Hasan.',
            openGraph: {
                title: `Link Redirect`,
                description: 'A short link sahred by Shajid Hasan.'
            }
        }) satisfies MetaTagsProps;

        return { shortLink, pageMetaTags, updatePromise }
    }

    redirect(301, shortLink.destinationUrl)
}