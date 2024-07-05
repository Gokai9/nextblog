import fs from 'fs'
import path from 'path'

export default function fetchMD(slug: string) {
    return fs.readFileSync(
        path.join(process.cwd + '/app/data/mdxblog', slug as string, "page.mdx"),
        'utf8'
      );
}