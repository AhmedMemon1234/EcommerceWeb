import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const message = `New message from ${formData.name} (${formData.email}):\n\n${formData.message}`;
    const whatsappLink = `https://wa.me/+923368952826?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 flex items-center justify-center">
      {/* Top div with background and form */}
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-red-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center text-white mt-4">{status}</p>}
      </div>

      {/* Large Footer */}
    </div>
  );
}
