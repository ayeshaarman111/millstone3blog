"use client"

import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Add types for the event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would send the data to your server or API.
    // For now, we'll just simulate a successful submission.

    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg bg-purple-400 mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>

      {isSuccess && (
        <p className="text-green-500 text-center mb-4">
          Thank you for your message! Well get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
           
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
