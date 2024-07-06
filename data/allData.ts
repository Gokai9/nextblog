import { BlogType, ProjectType } from "@/data/type";

export const blogsData: BlogType[] = [
    {
        id: 1,
        title: "apa itu functional programming",
        desription: "functional programming adalah",
        category: ["python"],
        slug: "apa-itu-functional"
    },
    {
        id: 2,
        title: "apa itu oop",
        desription: "oop adalah",
        category: ["javascript"],
        slug: "apa-itu-oop"
    }
]

export const projectsData: ProjectType[] = [
    {
        id: 1,
        title: "Blog with next js",
        description: "This blog made with next js and mdx",
        github: "https://github.com/Gokai9/nextblog"
    },
    {
        id: 2,
        title: "Commerce website",
        description: "react js",
        github: "https://github.com/Gokai9/commerce-react"
    }
]