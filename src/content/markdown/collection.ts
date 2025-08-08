import type {File} from "@models";
import {glob} from "astro/loaders";
import {defineCollection, z} from "astro:content";

export const files = defineCollection({
  loader: glob({pattern: "src/content/markdown/mdfiles/*.md"}),
  schema: z.custom<File>(),
});
