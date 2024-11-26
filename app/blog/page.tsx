// layout.tsx - Stays as Server Component

import Blog from "@/app/blog/blog"
import meta from "../componets/helper/metadata";
import { getPosts } from "@/data/posts";

export const metadata = meta("Blogs", "Programming Blogs")

const Blogs = async() => {
  const posts = await getPosts();
  return (
    // Do what you need to do
    <>
      <Blog posts={posts}/>
    </>
  )
}
 export default Blogs;