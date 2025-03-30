import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    // Automatically download the resume when the component mounts
    const link = document.createElement("a");
    link.href = "/path/to/your/resume.pdf"; // Update with the actual path to your resume
    link.download = "Your_Name_Resume.pdf"; // Update with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Your resume is downloading...</h1>
    </div>
  );
}