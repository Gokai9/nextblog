import { projects } from "@/data/allData"
import Link from "next/link"

const Projects = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
            {projects.map((project) => {
                    return (
                        <div key={project.id}>
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