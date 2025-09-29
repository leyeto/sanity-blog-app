import { PortableTextBlock } from "sanity";

export type SpecialBlog = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
};
