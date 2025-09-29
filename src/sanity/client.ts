import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jx1hk34q",
  dataset: "sanity-tutorial",
  apiVersion: "2025-09-18",
  useCdn: false,
});
