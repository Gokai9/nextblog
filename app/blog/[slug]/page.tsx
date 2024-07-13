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
    <article className="prose lg:prose-xl prose-slate max-width-screen-screen flex flex-col justify-center h-screen">
      <h1>{post.title}</h1>
      <Layout>{post.body}</Layout>
    </article>
  );
}