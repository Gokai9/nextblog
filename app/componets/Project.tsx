import { ProjectType } from '@/data/type'
import Link from 'next/link'

interface PropsProject {
    project: ProjectType;
}

function Project({project}: PropsProject) {
  return (
    <div className='w-screen lg:w-full p-6 mb-4 border border-gray-200 rounded-lg shadow dark:border-gray-700"'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight'>{project.title}</h2>
        <p className='mb-3 font-normal'>{project.description}</p>
        <Link className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' href={project.github}>Github</Link>
    </div>
  )
}

export default Project