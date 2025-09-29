import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // assuming you have urlFor setup
import { PortableTextBlock } from "sanity";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-6">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={500}
            className="rounded-md"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : ""}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="bg-red-300">{children}</li>,
    number: ({ children }) => <li className="bg-pink-400">{children}</li>,
  },
};

export default function BlogContent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
