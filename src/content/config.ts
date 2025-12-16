import { defineCollection, z } from 'astro:content';

const faqCollection = defineCollection({
  type: 'content', // Must be 'content' for Markdown/MDX files
  schema: z.object({
    question: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'faq': faqCollection,
};

