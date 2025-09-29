import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPage(slug);
  return (
    <div>
      <h1 className="bg-gradient-to-r bg-purple-400 via-red-400 to-blue-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.name}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
