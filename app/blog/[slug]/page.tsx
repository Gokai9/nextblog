import { MDXRemote } from 'next-mdx-remote/rsc'
import fetchMD from '../fetchMD';

export default function RemoteMdxPage({ params }: { params: { slug: string } }) {
  const {slug} = params;
  const markdown = fetchMD(slug)
  console.log(markdown)
  return <MDXRemote source={markdown} />
}
 