export interface ProjectType {
    id: number,
    title: string,
    description: string,
    github: string
}

export interface BlogType {
    id: number,
    title: string,
    desription: string,
    category: string[],
    slug: string
  
}