import React from 'react';

interface ProjectCardProps {
  image: string;
  name: string;
  deployedLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, deployedLink, githubLink }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="mt-2">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
        <div className="mt-1">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;