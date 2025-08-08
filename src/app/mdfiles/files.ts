import type {File} from "@models";
import {getCollection} from "astro:content";

async function retrieve_all_files() {
  return (await getCollection("files")).map(f => f.data);
}

export async function get_file(id: File["id"]) {
  return (await retrieve_all_files()).find(c => c.id === id);
}
