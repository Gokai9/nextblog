import { getPost, getPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import {Layout} from '@/data/mdx/Layout'
import { Metadata } from "next";
import Me from "@/app/componets/Me"
import Link from "next/link";
import { getRandomArray } from "@/app/componets/helper/getrandomarray";

export async function generateMetadata(
  { params}: {params:{slug:string}}
): Promise<Metadata> {
  // read route params
  const post = await getPost(params.slug);
  return {
    title: post?.title,
    description: post?.description
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: {
  params: { slug: string } }) {
  const post = await getPost(params.slug);
  const posts = await getPosts();
  const shuffPosts = getRandomArray(posts, 3)
  if (!post) return notFound();
  return (
    <main className="flex flex-col justify-center items-center lg:h-fit my-4 bg-gray-900 text-gray-900 font-sans antialiased">
    {/* <article className="prose lg:prose-xl text-slate-50 max-w-screen-lg flex flex-col mb-10">
      <div><Link style={{ textDecoration: 'none' }} href={"/"}>Home</Link> {">"} <Link style={{ textDecoration: 'none' }} href={"/blog"}>Blog</Link></div>
      <h1 className="text-slate-50">{post.title}</h1>
      <div>{post.date}</div>
      <Layout>{post.body}</Layout>
    </article> */}
    <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:space-x-8">
          {/* Blog Post Section */}
          <div className="lg:w-2/3">
            <article className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
              <p className="text-sm text-gray-500 mb-4">Dipublikasikan pada {post.date}</p>
              
              <section className="prose lg:prose-xl">
                <Layout>{post.body}</Layout>
              </section>
            </article>
          </div>

          {/* Sidebar Section */}
          <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Kategori</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:text-blue-800">React</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">JavaScript</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Web Development</a></li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Postingan Terbaru</h2>
            <ul className="space-y-2">
              {shuffPosts.map((sh) => <li key={sh.slug}><Link href={sh.slug} className="text-gray-800 hover:text-blue-600">{sh.title}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>

    <Me />
    </main>
  );
}