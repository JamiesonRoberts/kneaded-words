import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const posts = defineCollection({
  loader: glob({
    base: './src/posts',
    pattern: ['**/*.{md,mdx}', '!_drafts/**/*.*'],
  }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      handle: z.string(),
      categories: z.array(z.string()).default(['uncategorized']),
      tags: z.optional(z.array(z.string())),
    })
    .transform((data, ctx) => {
      const d = new Date(data.date)
        .toLocaleDateString('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .split('-')
      return {
        ...data,
        tag: data.tags,
        category: data.category,
        year: d[0],
        month: d[1],
        day: d[2],
      }
    }),
})

export const collections = { posts }
