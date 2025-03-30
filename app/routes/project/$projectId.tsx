import { useParams } from 'react-router';
import { projects } from "../../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === Number(projectId));
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full h-auto" />
      <p className="mt-4">{project.description}</p>
      <div className="mt-4">
        <a
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Deployed Application
        </a>
      </div>
      <div className="mt-2">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}