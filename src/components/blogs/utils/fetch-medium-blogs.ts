import type { Blog } from '../types/blog.type';
import type { MediumFeed } from '../types/medium-feed.type';
import Parser from 'rss-parser';

export async function fetchMediumBlogs(): Promise<Blog[]> {
    const parser: Parser<object, MediumFeed> = new Parser({
        customFields: {
            item: [
                'creator',
                'title',
                'description',
                'link',
                'pubDate',
                'content:encoded',
                'content:encodedSnippet',
                'guid',
                'categories',
                'isoDate',
            ],
        },
    });

    const feed = await parser.parseURL('https://medium.com/feed/@geetesh911');

    const mediumBlogs: Blog[] = feed.items.map((item) => ({
        title: item.title,
        description: item['content:encodedSnippet'],
        date: item.isoDate,
        link: item.link,
    }));

    return mediumBlogs;
}
