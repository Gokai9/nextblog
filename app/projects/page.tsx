import { projectsData } from "@/data/projectsData"
import Project from "../componets/Project"
import { ProjectType } from "@/data/type"
import meta from "../componets/helper/metadata"

export default function Projects() {
    return (
        <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-400 mb-8">My Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((project:ProjectType) => {
                    return (
                        <Project key={project.id} project={project}/>
                    )
                })}
          </div>
        </div>
      </section>

    )
}

export const metadata = meta("Projects", "See it")