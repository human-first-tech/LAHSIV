import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string(),
    description: z.string(),
    photos: z.array(z.string()).optional(),
  }),
});

export const collections = { events };
