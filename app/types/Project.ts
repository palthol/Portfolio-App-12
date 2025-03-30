export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    githubLink: string;
    deployedLink?: string;
  }