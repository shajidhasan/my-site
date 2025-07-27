import { databases } from '$lib/server/appwrite.js'
import type { Paste } from '$lib/types.js';
import { error } from '@sveltejs/kit';
import { AppwriteException, Query, type Models } from 'node-appwrite';
import { codeToHtml } from 'shiki';
import type { MetaTagsProps } from 'svelte-meta-tags';


export const load = async ({ params }) => {
    let listResponse: Models.DocumentList<Paste> | null = null;

    try {
        listResponse = await databases.listDocuments<Paste>(
            'main',
            'pastes',
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

    const paste = listResponse.documents[0];
    let updatePromise;

    try {
        updatePromise = databases.updateDocument('main', 'pastes', paste.$id, { 'visitCount': paste.visitCount + 1 })
    } catch (e) {
        console.log("Could not update visit count:", e)
    }

    const highlightedCode = await codeToHtml(paste.content, {
        lang: paste.language,
        themes: {
            dark: 'vitesse-dark',
            light: 'snazzy-light'
        },
        transformers: [
            {
                name: 'line-numbers',
                line(node, line) {
                    node.properties['data-line'] = line
                    node.children.unshift({
                        type: 'element',
                        tagName: 'span',
                        properties: {
                            class: 'line-number',
                            style: 'display: inline-block; width: 2rem; margin-right: 1rem; text-align: right; color: #888; user-select: none;'
                        },
                        children: [
                            {
                                type: 'text',
                                value: line.toString()
                            }
                        ]
                    })
                }
            }
        ]
    });
    const pageMetaTags = Object.freeze({
        title: `${paste.title} - Pastebin`,
        description: 'A private code or text snippet shared by Shajid Hasan.',
        openGraph: {
            title: `${paste.title} - Pastebin`,
            description: 'A private code or text snippet shared by Shajid Hasan.'
        }
    }) satisfies MetaTagsProps;

    return { paste, highlightedCode, pageMetaTags, updatePromise }
}