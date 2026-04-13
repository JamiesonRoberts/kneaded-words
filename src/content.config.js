import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// 4. Define a `loader` and `schema` for each collection
const posts = defineCollection({
  loader: glob({ base: './src/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.optional(z.array(z.string())),
    tags: z.optional(z.array(z.string())),
  }),
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { posts }
