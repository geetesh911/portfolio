import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            tags: z.array(z.string()),
            cover: image(),
            date: z.coerce.date(),
            description: z.string(),
            author: z.string(),
            authorImage: image(),
        }),
});

export const collections = { blog };
