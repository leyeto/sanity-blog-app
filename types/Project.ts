import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: {
    imgUrl: string;
    alt: string;
  };
  url: string;
  alt: string;
  content: PortableTextBlock[];
};
