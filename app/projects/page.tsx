import { projectsData } from "@/data/projectsData"
import Project from "../componets/Project"
import { ProjectType } from "@/data/type"
import meta from "../componets/helper/metadata"

export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div>
            {projectsData.map((project:ProjectType) => {
                    return (
                        <Project key={project.id} project={project}/>
                    )
                })}
            </div>
        </main>
        
    )
}

export const metadata = meta("Projects", "See it")