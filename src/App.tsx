import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // fixed (no TypeScript syntax)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_jij055t'; // your EmailJS service ID
      const templateId = 'template_jnvlv3b'; // your EmailJS template ID
      const publicKey = 'yNaFf9wCjc8dWEEtj'; // your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'surendranbba006@gmail.com', // your email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Surendran M</h1>
          <nav className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Digital Marketing Executive</h2>
          <p className="text-xl mb-8">Finished MBA in Marketing Management at Supreme Computers (India)</p>
          <div className="space-x-4">
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          I am a Digital Marketing Executive at Supreme Computers (India), skilled in SEO, social media, 
          paid advertising, and e-commerce operations. With an MBA in Marketing, I bring strategy and execution together 
          to deliver measurable growth for brands.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Supreme Computers (India)</h4>
              <p className="text-gray-600 mb-4">Digital Marketing Executive</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Managed SEO campaigns improving search rankings</li>
                <li>Executed Meta Ads & Google Ads campaigns</li>
                <li>Increased online sales through e-commerce marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">Contact Me</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <span>surendranbba006@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" />
              <span>+91 984069674</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <span>Chennai, India</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600"><Linkedin /></a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400"><Twitter /></a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-pink-600"><Instagram /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring
