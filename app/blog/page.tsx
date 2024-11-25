// layout.tsx - Stays as Server Component

import Blog from "@/app/blog/blog"
import meta from "../componets/helper/metadata";
import { getPosts } from "@/data/posts";
import { ReactNode } from 'react';

type MyComponentProps = {
  children: ReactNode;
};
export const metadata = meta("Blogs", "Programming Blogs")

const Layout = async({ children }: MyComponentProps) => {
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
