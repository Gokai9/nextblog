import { getPost, getPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import {Layout} from '@/data/mdx/Layout'

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: {
  params: { slug: string } }) {

  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <main className="flex justify-center items-center">
    <article className="prose lg:prose-xl prose-slate max-w-screen-lg flex flex-col h-screen">
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <Layout>{post.body}</Layout>
    </article>
    </main>
  );
}