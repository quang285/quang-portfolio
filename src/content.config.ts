import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    prj: z.string(),
    title: z.string(),
    // Shown on the card, e.g. "2025" or "2022 to 2024". Kept as written.
    date: z.string(),
    // Sort key, newest first. Active work uses 9999; a [Year] placeholder uses 0.
    sort: z.number(),
    result: z.string(),
    chips: z.array(z.string()).default([]),
    kicker: z.string().optional(),
    facts: z.array(z.object({ k: z.string(), v: z.string() })).default([]),
    tools: z.array(z.string()).default([]),
    part: z.string().default('[My part]'),
    active: z.boolean().default(false),
  }),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: z.object({
    type: z.enum(['research', 'paper', 'film', 'book', 'music', 'note']),
    date: z.string(),
    title: z.string(),
    note: z.string(),
    source: z.string(),
    thumb: z.string().optional(),
    entry: z.string().optional(),
  }),
});

const entries = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/entries' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    type: z.string(),
    topic: z.string(),
    argument: z.string(),
    date: z.string(),
    reading: z.string(),
    updated: z.string(),
    // Rows for the Contents list; one per <Chapter> in the body, in order.
    chapters: z.array(z.object({ title: z.string(), summary: z.string(), format: z.string() })).default([]),
  }),
});

export const collections = { projects, archive, entries };
