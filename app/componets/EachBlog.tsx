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
        <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-900">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-lg mt-2 text-gray-700">{post.body.slice(0, 100)}...</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Read More
            </Link>

            {/* Comments */}
            {/* <div className="mt-4">
              <h3 className="text-lg font-medium">Comments:</h3>
              {post.comments.length > 0 ? (
                <ul className="list-disc pl-5">
                  {post.comments.map((comment, idx) => (
                    <li key={idx} className="text-sm text-gray-700">
                      <strong>{comment.name}:</strong> {comment.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </div> */}
          </div>
    )
}

export default EachBlog