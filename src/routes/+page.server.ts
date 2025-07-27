import { databases } from "$lib/server/appwrite"
import { Query } from "node-appwrite"

import type { BlogPost } from "$lib/types"

export const load = async () => {
    const blogPosts = await databases.listDocuments<BlogPost>("main", "blog", [
        Query.equal("isPublished", true),
        Query.limit(4),
        Query.orderDesc("$createdAt"),
    ])

    return {
        blogPosts: blogPosts.documents
    }
}
