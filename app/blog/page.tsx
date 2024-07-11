import { getPosts } from "@/data/posts";
import EachBlog from "../Component/EachBlog"

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts
        .sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
            <EachBlog key={post.slug} post={post}/>
        ))}
    </div>
  );
}