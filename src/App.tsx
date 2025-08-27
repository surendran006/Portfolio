import React, { useState } from 'react'; import emailjs from 'emailjs-com'; import { Mail, Phone, MapPin, Linkedin, ExternalLink, ChevronDown, Calendar, Award, Target, TrendingUp, Users, BarChart3, Search, MousePointer, Globe, Menu, X, Send, User, MessageSquare } from 'lucide-react'; const skills = [ { name: 'SEO (On-page & Off-page)', level: 100, icon: Search }, { name: 'Google Ads (PPC)', level: 100, icon: MousePointer }, { name: 'Meta Ads ', level: 100, icon: BarChart3 }, { name: 'Google Analytics', level: 100, icon: TrendingUp }, { name: 'Google Search Console', level: 100, icon: Search }, { name: 'Shopify', level: 100, icon: Globe }, { name: 'Social Media Marketing', level: 100, icon: Users }, { name: 'Content Optimization', level: 100, icon: TrendingUp } ];export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

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
        to_email: 'surendranbba006@gmail.com',
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
          <p className="text-xl mb-8">MBA in Marketing | Driving Business Growth Through Digital Strategies</p>
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
          I am a results-driven Digital Marketing Executive with an MBA in Marketing Management. 
          Currently working at Supreme Computers (India), I specialize in SEO, social media campaigns, paid advertising, and e-commerce growth strategies. 
          My goal is to combine creativity with data-driven insights to help brands achieve measurable business results.
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
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Planned and executed SEO campaigns, boosting organic search rankings</li>
                <li>Managed Meta Ads & Google Ads, improving CTR and ROI</li>
                <li>Developed e-commerce strategies, driving consistent sales growth</li>
                <li>Created and optimized social media campaigns to increase engagement</li>
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600">✅ Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
