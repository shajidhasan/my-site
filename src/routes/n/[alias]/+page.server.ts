import { databases } from '$lib/server/appwrite.js'
import type { Note } from '$lib/types.js';
import { marked } from '$lib/utilities.js';
import { error } from '@sveltejs/kit';
import { AppwriteException, Query, type Models } from 'node-appwrite';
import type { MetaTagsProps } from 'svelte-meta-tags';



export const load = async ({ params }) => {
    let listResponse: Models.DocumentList<Note> | null = null;

    try {
        listResponse = await databases.listDocuments<Note>(
            'main',
            'notes',
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

    const note = listResponse.documents[0];
    let updatePromise;

    try {
        updatePromise = databases.updateDocument('main', 'notes', note.$id, { 'visitCount': note.visitCount + 1 })
    } catch (e) {
        console.log("Could not update visit count:", e)
    }

    const htmlNote = await marked.parse(note.content);

    const pageMetaTags = Object.freeze({
        title: `${note.title} - Notes`,
        description: 'A private note shared by Shajid Hasan.',
        openGraph: {
            title: `${note.title} - Notes`,
            description: 'A private note shared by Shajid Hasan.'
        }
    }) satisfies MetaTagsProps;


    return { note, htmlNote, pageMetaTags, updatePromise }
}