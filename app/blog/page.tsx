import { getPosts } from "@/data/posts";
import EachBlog from "../Component/EachBlog"
import type { Viewport, Metadata } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {posts
        .sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
            <EachBlog key={post.slug} post={post}/>
        ))}
    </div>
  );
}