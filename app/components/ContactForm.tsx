import React, { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    // Here you would typically send the form data to your backend or an email service
    try {
      // Simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold">Contact Me</h2>
      {success && <p className="text-green-500">Your message has been sent!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 rounded"
        rows={4}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send Message
      </button>
    </form>
  );
}