import { ReactComponent as LinkedInIcon } from './linkedin.svg';

export const LinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className="w-6 h-6 text-blue-700 hover:text-blue-500 transition-colors" />
    </a>
  );
};