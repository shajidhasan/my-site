import { databases } from "$lib/server/appwrite"
import { Query } from "node-appwrite"

import type { BlogPost } from "$lib/types"
import type { MetaTagsProps } from "svelte-meta-tags"

export const load = async () => {
    const blogPosts = await databases.listDocuments<BlogPost>("main", "blog", [
        Query.equal("isPublished", true),
        Query.limit(4),
        Query.orderDesc("$createdAt"),
    ])

    const pageMetaTags = Object.freeze({
        title: `Blog - Shajid Hasan`,
        description: 'Read blog posts by Shajid Hasan on web development, engineering, creativity, and the ideas behind the projects.',
        openGraph: {
            title: `Blog - Shajid Hasan`,
            description: 'A collection of blog posts by Shajid Hasan, covering programming, side projects, tech insights, and more.'
        }
    }) satisfies MetaTagsProps;


    return {
        blogPosts: blogPosts.documents,
        pageMetaTags
    }
}
