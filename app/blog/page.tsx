// layout.tsx - Stays as Server Component

import Blog from "@/app/blog/blog"
import meta from "../componets/helper/metadata";
import { getPosts } from "@/data/posts";

export const metadata = meta("Blogs", "Programming Blogs")

export default async function Layout({ children }: { children: React.ReactNode }) {
  const posts = await getPosts();
  return (
    // Do what you need to do
    <>
      <Blog posts={posts}>
        {children}
      </Blog>
    </>
  )
}
