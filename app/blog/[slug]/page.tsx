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
    <div>
      <h1>{post.title}</h1>
      <Layout>{post.body}</Layout>
    </div>
  );
}




// import { MDXRemote } from 'next-mdx-remote/rsc'
// import fetchMD from '../fetchMD';
// import HeroImage from '@/data/mdx/HeroImage';
// import H1 from '@/data/mdx/H1';

// export default function RemoteMdxPage({ params }: { params: { slug: string } }) {
//   const {slug} = params;
//   const markdown = fetchMD(slug)
//   return <MDXRemote source={markdown} components={{HeroImage}}/>
// }
 