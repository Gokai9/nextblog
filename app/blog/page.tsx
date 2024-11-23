import { getPosts } from "@/data/posts";
import EachBlog from "../componets/EachBlog"
import meta from "../componets/helper/metadata";

export const metadata = meta("Blogs", "Programming Blogs")

export default async function Page() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen">
    <header className="text-white py-6 text-center">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg mt-2">Sharing my thoughts, tutorials, and projects</p>
      </header>

    <div className=" grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:gap-4 py-6 m-2">
      {posts
        .sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
            <EachBlog key={post.slug} post={post}/>
        ))}
    </div>
    </div>
  );
}