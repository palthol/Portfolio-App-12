import { 
  HeroSection, 
  FeaturedProjects, 
  SkillsShowcase, 
  ContactCTA 
} from "../components/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* Skills Section */}
      <SkillsShowcase />
      
      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}