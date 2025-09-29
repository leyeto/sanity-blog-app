import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPage, getPages } from "@/sanity/sanity-utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leye's Sanity Website",
  description: "Leye's Sanity Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-3xl mx-auto py-10 `}
      >
        <header className="flex items-center justify-between">
          <Link
            href={"/"}
            className="bg-gradient-to-r bg-purple-400 via-red-400 to-blue-500 bg-clip-text text-transparent text-lg font-extrabold"
          >
            Leye
          </Link>

          <nav className="flex items-center gap-4 text-sm text-gray-600">
            {pages.map(({ _id, name, slug }) => {
              return (
                <Link key={_id} href={`/${slug}`} className="hover:underline">
                  {name}
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
