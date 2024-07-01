import { Blog, Project } from "@/data/type";

export const blogs: Blog[] = [
    {
        id: 1,
        title: "apa itu functional programming",
        desription: "functional programming adalah",
        category: ["python"]
    },
    {
        id: 2,
        title: "apa itu oop",
        desription: "oop adalah",
        category: ["javascript"]
    }
]

export const projects: Project[] = [
    {
        id: 1,
        title: "Blog with next js",
        description: "this blog made with next js",
        github: "https://github.com/Gokai9/nextblog"
    },
    {
        id: 2,
        title: "Commerce website",
        description: "react js",
        github: "https://github.com/Gokai9/commerce-react"
    }
]