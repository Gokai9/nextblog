import { projects } from "@/data/project"
import Link from "next/link"

const Projects = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
            {projects.map((project) => {
                    return (
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Link href={project.github}>Github</Link>
                        </div>
                    )
                })}
            </div>
        </main>
        
    )
}

export default Projects