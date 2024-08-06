import { getPost, getPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import {Layout} from '@/data/mdx/Layout'
import { Metadata } from "next";
import Me from "@/app/componets/Me"
import Link from "next/link";

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
  if (!post) return notFound();

  return (
    <main className="flex flex-col justify-center items-center lg:h-fit my-4">
    <article className="prose lg:prose-xl text-slate-50 max-w-screen-lg flex flex-col">
      <div><Link style={{ textDecoration: 'none' }} href={"/"}>Home</Link> {">"} <Link style={{ textDecoration: 'none' }} href={"/blog"}>Blog</Link></div>
      <h1 className="text-slate-50">{post.title}</h1>
      <div>{post.date}</div>
      <Layout>{post.body}</Layout>
    </article>
    <Me />
    </main>
  );
}