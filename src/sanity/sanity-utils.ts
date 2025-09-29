import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Project } from "../../types/Project";
import { Page } from "../../types/Page";
import { SpecialBlog } from "../../types/SpecialBlog";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`
    *[_type == "project"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": {
    "imgUrl": image.asset->url,
    "alt": image.alt
  },
  url,
  content
}`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`
    *[_type == "project" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": {
    "imgUrl": image.asset->url,
    "alt": image.alt
  },
  url,
  content
 }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`
    *[_type == "page"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  
}`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  content
 }`,
    { slug }
  );
}

export async function getSpecialBlogs(): Promise<SpecialBlog[]> {
  return client.fetch(
    groq`
    *[_type == "imagePage"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  content
}`
  );
}
