import { Metadata } from "next";

export default function meta(title: string, description: string) {
    const metadata: Metadata = {
    title: `Sim | ${title}`,
    description: description,
  };
  return metadata
}