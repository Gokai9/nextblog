import { BlogType } from "@/data/type";
import Link from "next/link";

interface BlogProps {
    blog: BlogType
}

const EachBlog = ({blog}:BlogProps) => {
    return (       
<div className="max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href={"#"}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
    </Link>
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.desription}</div>
    <Link href={`blog/${blog.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
    </Link>
</div>
    )
}

export default EachBlog