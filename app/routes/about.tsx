import SkillBadge from "../components/SkillBadge";
// Either:
import profilePhotoSrc from "../assets/profile-photo"; // If it's an image file

export default function About() {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col items-center mb-8">
        <img src={profilePhotoSrc} alt="Profile" className="rounded-full w-32 h-32 mb-4" />
        <p className="text-lg text-center">
          Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications. I love creating user-friendly interfaces and exploring new technologies.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <SkillBadge skill="JavaScript" />
        <SkillBadge skill="React" />
        <SkillBadge skill="TypeScript" />
        <SkillBadge skill="Tailwind CSS" />
        <SkillBadge skill="Node.js" />
      </div>
    </main>
  );
}