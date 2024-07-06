import { projectsData } from "@/data/allData"
import Project from "../Component/Project"
import { ProjectType } from "@/data/type"

const Projects = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
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

export default Projects