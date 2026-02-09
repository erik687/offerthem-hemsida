import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date().optional(), // or z.string().transform(...)
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(), // Path relative to public/ (e.g. "/images/uploads/img.jpg")
        category: z.string().optional(),
        tags: z.array(z.string()).default([]),
        // HyperNexus specific fields
        hn_id: z.string().optional(), // HyperNexus internal ID
        hn_status: z.enum(['draft', 'published']).default('published'),
    }),
});

export const collections = {
    'posts': postsCollection,
};
