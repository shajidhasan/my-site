import { APPWRITE_API_KEY, APPWRITE_PROJECT_ID } from "$env/static/private"
import { Client, Databases } from "node-appwrite"

export const client = new Client()

client
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY)

export const databases = new Databases(client);
