import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="max-w-md w-full px-4">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6">Feel free to reach out using the form below:</p>
        <ContactForm />
      </div>
    </main>
  );
}