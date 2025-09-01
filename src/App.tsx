import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Award,
  Briefcase,
  Code,
  Target,
  TrendingUp,
  Search,
  BarChart3,
  ShoppingCart,
  Users,
  Globe,
  Zap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      const yOffset = -80; // Account for fixed header
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Experience', ref: experienceRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Surendran M
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Digital Marketing
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Executive
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Driving growth through strategic SEO, Google Ads, and e-commerce optimization. 
                Transforming digital presence into measurable business results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-200"
              >
                View Projects
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate Digital Marketing Professional
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With a deep understanding of digital landscapes and consumer behavior, I specialize in 
                creating data-driven marketing strategies that deliver exceptional ROI. My expertise spans 
                across SEO optimization, paid advertising campaigns, and e-commerce growth strategies.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Based in Chennai, I've helped numerous businesses transform their online presence and 
                achieve sustainable growth through innovative digital marketing solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Growth Focused</h4>
                <p className="text-gray-600 text-sm">Strategies that drive measurable business growth</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <Target className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Results Driven</h4>
                <p className="text-gray-600 text-sm">Data-backed decisions for optimal performance</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Cutting-edge techniques and tools</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl">
                <Users className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Client Success</h4>
                <p className="text-gray-600 text-sm">Dedicated to achieving client objectives</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Marketing Executive</h3>
                  <p className="text-teal-600 font-semibold mb-3">Current Role • Chennai</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Developed and executed comprehensive SEO strategies resulting in 150% increase in organic traffic</li>
                    <li>• Managed Google Ads campaigns with average ROAS of 4.2x across multiple industries</li>
                    <li>• Optimized e-commerce platforms leading to 85% improvement in conversion rates</li>
                    <li>• Led cross-functional teams to deliver integrated marketing campaigns</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Marketing Specialist</h3>
                  <p className="text-blue-600 font-semibold mb-3">Previous Role • Chennai</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Implemented data-driven marketing strategies for B2B and B2C clients</li>
                    <li>• Achieved 200% growth in social media engagement through targeted campaigns</li>
                    <li>• Optimized marketing funnels resulting in 60% improvement in lead quality</li>
                    <li>• Collaborated with design and development teams for seamless campaign execution</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <Search className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Technical SEO Audits</li>
                <li>• Keyword Research & Strategy</li>
                <li>• Content Optimization</li>
                <li>• Link Building Campaigns</li>
                <li>• Local SEO</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Advertising</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Google Ads Management</li>
                <li>• Meta Ads Campaigns</li>
                <li>• Campaign Optimization</li>
                <li>• A/B Testing</li>
                <li>• Performance Analytics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <ShoppingCart className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Growth</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Conversion Rate Optimization</li>
                <li>• Product Listing Optimization</li>
                <li>• Shopping Campaign Management</li>
                <li>• Customer Journey Mapping</li>
                <li>• Revenue Analytics</li>
              </ul>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Google Analytics', 'Google Ads', 'Meta Business', 'SEMrush', 
                'Ahrefs', 'Shopify', 'WordPress', 'Google Tag Manager',
                'Facebook Pixel', 'Google Search Console', 'Hotjar', 'Mailchimp'
              ].map((tool, index) => (
                <div
                  key={tool}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700 font-medium text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-6">
                <Globe className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">E-commerce SEO Campaign</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Comprehensive SEO strategy for a fashion e-commerce platform resulting in 300% organic traffic growth.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">SEO</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">E-commerce</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Analytics</span>
                </div>
                <div className="text-sm text-gray-500">
                  <p>• 300% increase in organic traffic</p>
                  <p>• 85% improvement in conversion rate</p>
                  <p>• 250% growth in revenue</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6">
                <Target className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">Google Ads Optimization</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Complete Google Ads account restructure and optimization for a B2B software company.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Google Ads</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">B2B</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Lead Gen</span>
                </div>
                <div className="text-sm text-gray-500">
                  <p>• 5.2x ROAS achievement</p>
                  <p>• 65% reduction in CPA</p>
                  <p>• 180% increase in qualified leads</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6">
                <ShoppingCart className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">Multi-Channel Campaign</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Integrated marketing campaign across SEO, Google Ads, and social media for retail brand.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Multi-Channel</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Retail</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Social Media</span>
                </div>
                <div className="text-sm text-gray-500">
                  <p>• 400% increase in brand awareness</p>
                  <p>• 120% growth in online sales</p>
                  <p>• 90% improvement in customer retention</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take your digital marketing to the next level? Let's discuss how we can grow your business together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:surendran@example.com" className="text-teal-600 hover:text-teal-700">
                      surendran@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://linkedin.com/in/surendran"
                    className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/surendran"
                    className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-lg text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Surendran M</h3>
            <p className="text-gray-400 mb-6">Digital Marketing Executive</p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:surendran@example.com"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/surendran"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/surendran"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Surendran M. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;