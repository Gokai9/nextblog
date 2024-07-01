import { blogs } from "@/data/allData"
import EachBlog from "../Component/EachBlog"

const Blogs = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="pb-4">
                {blogs.map((blog) => <EachBlog key={blog.id} blog={blog}/>)}
            </div>
        </main>
        
    )
}

export default Blogs