import { MDXRemote } from 'next-mdx-remote/rsc'
import fetchMD from '../fetchMD';
import HeroImage from '@/data/mdx/HeroImage';
import H1 from '@/data/mdx/H1';

export default function RemoteMdxPage({ params }: { params: { slug: string } }) {
  const {slug} = params;
  const markdown = fetchMD(slug)
  return <MDXRemote source={markdown} components={{HeroImage}}/>
}
 