import { blog } from "@/data/blog"
import { projects } from "@/data/project"
import EachBlog from "../Component/EachBlog"

const categories = ["python", "javascript", "all"]
const Blogs = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
            {categories.map((cat) => <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{cat}</button>)}
            </div>
            <div className="pb-4">
                {blog.map((blog) => <EachBlog blog={blog}/>)}
            </div>
        </main>
        
    )
}

export default Blogs