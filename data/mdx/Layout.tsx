import { MDXRemote } from "next-mdx-remote/rsc";
import {A} from "@/data/mdx/A";

//mdxremote will render children inside tag paragraph
export function Layout({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {},
      }}
      components={A}
    />
  );
}
