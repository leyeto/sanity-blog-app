import { type SchemaTypeDefinition } from "sanity";
import project from "./project-schema";
import page from "./page-schema";
import imagePage from "./imagePage-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, page, imagePage],
};
