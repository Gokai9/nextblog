"use client"
import { Post} from "@/data/posts";
import EachBlog from "../componets/EachBlog"
import { useState } from "react";

export default function Blog({
 posts
}: {
 posts: Post[]
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.body.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || post.category.includes(categoryFilter.toLowerCase());

    return matchesSearch && matchesCategory;
  });
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">My Blog</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {paginatedPosts.map((post) => (
          <EachBlog key={post.slug} post={post}/>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="flex items-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages ||  totalPages === 0}
          className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
   
    </>
  );
}

// export default async function Page() {
//   const posts = await getPosts();
//   return (
//     <div className="min-h-screen">
//     <header className="text-white py-6 text-center">
//         <h1 className="text-4xl font-bold">My Blog</h1>
//         <p className="text-lg mt-2">Sharing my thoughts, tutorials, and projects</p>
//       </header>

//     <div className=" grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:gap-4 py-6 m-2">
//       {posts
//         .sort((a, b) =>
//           new Date(b.date).getTime() - new Date(a.date).getTime())
//         .map((post) => (
//             <EachBlog key={post.slug} post={post}/>
//         ))}
//     </div>
//     </div>
//   );
// }