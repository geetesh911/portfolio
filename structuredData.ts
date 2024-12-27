import { type Article, type Person, type WebSite, type WithContext } from 'schema-dts';
import type { CollectionEntry } from 'astro:content';
import slugify from 'slugify';

export const blogWebsite: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${import.meta.env.SITE}/blogs/`,
    name: 'Geetesh Laddha - Blogs',
    description: 'Blogs about software engineering, web development, and more.',
    inLanguage: 'en_US',
};

export const authorWebsite: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${import.meta.env.SITE}/authors/`,
    name: 'Geetesh Laddha - Authors',
    description: 'Details of authors of the blogs.',
    inLanguage: 'en_US',
};

export const mainWebsite: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: import.meta.env.SITE,
    name: 'Geetesh Laddha - Portfolio',
    description:
        "I'm a software engineer who loves to build products that make a difference. I'm passionate about building products that are user-friendly and accessible.",
    inLanguage: 'en_US',
};

export const authorsSchemasMap: Record<string, WithContext<Person>> = {
    'geetesh-laddha': {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Geetesh Laddha',
        url: `${import.meta.env.SITE}/authors/geetesh-laddha/`,
        image: `${import.meta.env.SITE}/assets/authors/geetesh-laddha.webp`,
        sameAs: [
            'https://github.com/geetesh911',
            'https://www.instagram.com/geetesh911',
            'https://www.linkedin.com/in/geetesh-laddha',
        ],
    },
};

export function getArticleSchema(blog: CollectionEntry<'blog'>) {
    const authorSlug = slugify(blog.data.author, { lower: true });
    const articleStructuredData: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.data.title,
        url: `${import.meta.env.SITE}/blogs/${blog.id}/`,
        image: {
            '@type': 'ImageObject',
            url: `${import.meta.env.SITE}/${blog.data.cover.src}/`,
        },
        description: blog.data.description,
        datePublished: blog.data.date.toString(),
        publisher: authorsSchemasMap[authorSlug],
        author: authorsSchemasMap[authorSlug],
    };

    return articleStructuredData;
}
