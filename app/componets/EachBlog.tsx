import { Post } from "@/data/posts";
import Link from "next/link";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

interface BlogProps {
    post: Post
}

const EachBlog = ({post}:BlogProps) => {
    return (
        <div className="my-4 w-full h-80 flex flex-col justify-start items-baseline p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{post.title}</h5>
            <div>{post.date}</div>
            <div className="mb-3 font-normal">{post.description}</div>
            <Link href={`blog/${post.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </Link>
        </div>
    )
}

export default EachBlog