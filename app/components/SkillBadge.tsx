import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
      {skill}
    </span>
  );
};

export default SkillBadge;