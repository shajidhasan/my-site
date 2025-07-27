import type { Models } from "node-appwrite"
import type { Component } from "svelte"

export interface BlogPost extends Models.Document {
    title: string
    excerpt: string
    publishedAt: string
    slug: string
    featuredImageUrl: string
    tags: string[]
    readTimeMinutes: number
    bengaliAvailable: boolean
    content: string
    bengaliContent: string
    bengaliTitle: string
    bengaliExcerpt: string
    visitCount: number
}

export interface Paste extends Models.Document {
    title: string;
    alias: string;
    language: string;
    content: string;
    visitCount: number;
}


export interface Note extends Models.Document {
    title: string;
    alias: string;
    content: string;
    visitCount: number;
}


export interface Project {
    href: string;
    logo: Component;
    title: string;
    description: string;
    isNotFinished?: boolean;
}

export interface ShortLink extends Models.Document {
    destinationUrl: string;
    alias: string;
    visitCount: number;
    message?: string | null;
}

