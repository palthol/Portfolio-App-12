import { Link } from "react-router";

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          I'm currently available for freelance work and interesting projects.
          Let's build something amazing together!
        </p>
        <Link 
          to="/contact" 
          className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}