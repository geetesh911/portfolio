// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import {
    lazyImagesRehypePlugin,
    readingTimeRemarkPlugin,
    responsiveTablesRehypePlugin,
} from './src/utils/frontmatter';

// https://astro.build/config
export default defineConfig({
    site:
        // eslint-disable-next-line no-undef
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:4321'
            : 'https://geeteshladdha.netlify.app',
    output: 'static',
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
        sitemap(),
    ],
    markdown: {
        remarkPlugins: [readingTimeRemarkPlugin],
        rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    },
});
