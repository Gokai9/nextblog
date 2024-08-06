import { projectsData } from "@/data/allData"
import Project from "../componets/Project"
import { ProjectType } from "@/data/type"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sim | Projects",
    description: "See it",
  };
  

const Projects = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
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