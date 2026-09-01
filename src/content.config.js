// src/content.config.js
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articlesCollection = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.md',
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = {
  articles: articlesCollection,
};