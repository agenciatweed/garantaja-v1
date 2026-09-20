import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.date(),
    categoria: z.string(),
    imagem: z.string(),
    imagemAlt: z.string(),
    leitura: z.string(),
  }),
});

export const collections = { blog };
