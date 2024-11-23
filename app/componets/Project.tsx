import { ProjectType } from '@/data/type'
import Link from 'next/link'

interface PropsProject {
    project: ProjectType;
}

function Project({project}: PropsProject) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <Link
                href={project.github}
                className="text-blue-400 hover:underline"
              >
                View Project
              </Link>
            </div>
  )
}

export default Project