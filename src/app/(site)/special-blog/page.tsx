import BlogContent from "@/app/_components/BlogContent";
import { getSpecialBlogs } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function Page() {
  const specialBlogs = await getSpecialBlogs();
  console.log("specialBlogs", specialBlogs);
  return (
    <div>
      <h1>Special Blogs</h1>
      {specialBlogs.map(({ _id, name, slug, content }) => (
        <div key={_id}>
          <h1 className="bg-gradient-to-r bg-purple-400 via-red-400 to-blue-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
            {name}
          </h1>
          <div className="text-lg text-gray-700 mt-10">
            <BlogContent value={content} />
          </div>
        </div>
      ))}
    </div>
  );
}
