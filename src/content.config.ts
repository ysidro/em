import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publicaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publicaciones' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().optional(),
  }),
});

const equipo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equipo' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    items: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

export const collections = { publicaciones, equipo, servicios };
