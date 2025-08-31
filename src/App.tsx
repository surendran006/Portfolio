import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Calendar,
  Award,
  Target,
  TrendingUp, 
  Users,
  BarChart3,
  Search,
  MousePointer,
  Globe,
  Menu,
  X,
  Send,
  User,
  MessageSquare,
  Download,
  Eye,
  ArrowRight,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const skills = [
  { name: 'SEO (On-page & Off-page)', level: 100, icon: Search, category: 'SEO' },
  { name: 'Google Ads (PPC)', level: 100, icon: MousePointer, category: 'Paid Advertising' },
  { name: 'Meta Ads', level: 100, icon: BarChart3, category: 'Paid Advertising' },
  { name: 'Google Analytics', level: 100, icon: TrendingUp, category: 'Analytics' },
  { name: 'Google Search Console', level: 100, icon: Search, category: 'Analytics' },
  { name: 'Shopify', level: 100, icon: Globe, category: 'E-commerce' }, 
  { name: 'Social Media Marketing', level: 100, icon: Users, category: 'Social Media' },
  { name: 'Content Optimization', level: 100, icon: TrendingUp, category: 'Content' }
];

const experience = [
  {
    company: 'Supreme Computers India PVT LTD',
    role: 'Digital Marketing Executive (Website Admin)',
    duration: 'Mar 2025 — Present',
    description: 'Website Administrator – E-commerce & Digital Marketing (IT Products)',
    location: 'Chennai, India',
    type: 'Full-time',
    segments: [
      {
        title: 'Website Administration',
        achievements: [
          'Managed end-to-end e-commerce operations for SupremeIndia.com, including product uploads, pricing, inventory, and homepage merchandising',
          'Collaborated with development teams to enhance UI/UX and site performance',
          'Implemented analytics dashboards for performance monitoring and user behavior analysis',
          'Monitored website performance metrics and implemented conversion rate optimization strategies',
          'Coordinated with suppliers and vendors for product information and promotional materials',
          'Analyzed customer behavior data to improve user experience and reduce bounce rates',
          'Implemented schema markup and technical SEO improvements for better search rankings',
          'Managed customer reviews and online reputation across various platforms'
        ]
      },
      {
        title: 'Digital Marketing',
        achievements: [
          'Executed comprehensive SEO strategies improving organic traffic and keyword rankings',
          'Launched and optimized Google Ads / Meta ads campaigns with focus on ROI and conversion tracking',
          'Conducted keyword research and competitor analysis to identify market opportunities',
          'Optimized product descriptions and meta tags for better search engine visibility',
          'Created and managed social media content calendars across multiple platforms',
          'Developed email marketing campaigns for customer retention and lead nurturing',
          'Managed Google Shopping campaigns and product feed optimization',
          'Created monthly performance reports with actionable insights for management'
        ]
      }
    ]
  }
];

const projects = [
  {
    title: 'E-commerce Platform Optimization',
    description: 'Complete SEO and UX overhaul for supremeindia.com resulting in improved conversion rates',
    technologies: ['Shopify', 'Google Analytics', 'SEO', 'Google Ads', 'Meta Ads'],
    results: 'Improved search visibility and enhanced user experience',
    impact: '+45% organic traffic',
    category: 'E-commerce'
  },
  {
    title: 'Digital Marketing Campaign Management',
    description: 'Seasonal product campaigns with integrated social media and paid advertising',
    technologies: ['Google Ads','Meta Ads', 'Social Media', 'Analytics', 'Content Marketing'],
    results: 'Enhanced brand awareness and campaign performance tracking',
    impact: '+60% engagement',
    category: 'Campaigns'
  },
  {
    title: 'On-Page SEO Optimization',
    description: 'Comprehensive keyword research and content optimization for product pages and category structures',
    technologies: ['Keyword Research', 'Meta Tags', 'Schema Markup', 'Content Optimization'],
    results: 'Improved organic rankings and click-through rates from search results',
    impact: '+35% CTR',
    category: 'SEO'
  },
  {
    title: 'Off-Page SEO & Link Building',
    description: 'Strategic link building campaigns and partnership development to boost domain authority',
    technologies: ['Link Building', 'Guest Posting', 'Directory Submissions', 'Partnership Outreach'],
    results: 'Increased domain authority and referral traffic from quality backlinks',
    impact: '+25% domain authority',
    category: 'SEO'
  },
  {
    title: 'Technical SEO Implementation',
    description: 'Site speed optimization, mobile responsiveness, and crawlability improvements',
    technologies: ['Site Speed', 'Mobile Optimization', 'XML Sitemaps', 'Robots.txt'],
    results: 'Enhanced site performance and better search engine indexing',
    impact: '+40% page speed',
    category: 'Technical'
  },
  {
    title: 'Google Analytics & Performance Tracking',
    description: 'Comprehensive analytics setup with custom dashboards, goal tracking, and conversion optimization for data-driven decision making',
    technologies: ['Google Analytics', 'Google Tag Manager', 'Conversion Tracking', 'Custom Reports', 'Data Analysis'],
    results: 'Improved data visibility and actionable insights for marketing optimization',
    impact: '+50% data accuracy',
    category: 'Analytics'
  }
];

const testimonials = [
  {
    name: 'Client Feedback',
    role: 'E-commerce Manager',
    content: 'Surendran\'s expertise in digital marketing has significantly improved our online presence and sales performance.',
    rating: 5
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_jij055t';
      const templateId = 'template_jnvlv3b';
      const publicKey = 'yNaFf9wCjc8dWEEtj';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'surendranbba006@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedProjectCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedProjectCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="font-bold text-xl text-gray-800 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
                SM
              </div>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Surendran M</span>
            </motion.div>
            
            <div className="hidden lg:flex space-x-1">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-xl font-medium ${
                    activeSection === section 
                      ? 'text-white bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg' 
                      : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </motion.button>
              ))}
              <motion.a 
                href="https://medium.com/@surendrandigitalmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 hover:text-teal-600 transition-all duration-300 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 flex items-center space-x-1"
              >
                <span>Blog</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>
            
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-all duration-300 rounded-xl hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-2 pt-4">
                  {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                    <motion.button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      whileHover={{ x: 5 }}
                      className={`capitalize text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                        activeSection === section 
                          ? 'text-white bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg' 
                          : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                      }`}
                    >
                      {section}
                    </motion.button>
                  ))}
                  <motion.a 
                    href="https://medium.com/@surendrandigitalmarketing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-gray-600 hover:text-teal-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <span>Blog</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative inline-block mb-8"
            >
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative z-10">SM</span>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Surendran M
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text mb-8 font-bold"
            >
              Digital Marketing Executive
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Results-driven digital marketing professional specializing in <span className="font-semibold text-teal-600">SEO</span>, 
              <span className="font-semibold text-blue-600"> Google Ads</span>, and 
              <span className="font-semibold text-purple-600"> e-commerce optimization</span>. 
              Passionate about driving measurable growth through data-driven marketing strategies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button 
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-2xl font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>View My Work</span>
              </motion.button>
              
              <motion.a 
                href="https://drive.google.com/uc?export=download&id=1_fDXmk5FfUv6Bd9W3bukp-T1VyZ4jkB6"
                target="_blank" 
                rel="noopener"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-8 h-8 text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            About Me
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-100 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="w-3 h-10 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-4"></div>
                  Professional Journey
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I have completed my <span className="font-semibold text-teal-600">MBA in Marketing Management</span> and currently work as a 
                    <span className="font-semibold text-blue-600"> Digital Marketing Executive</span> at Supreme Computers (India). 
                    I bring hands-on experience in e-commerce operations, SEO strategies, and paid advertising campaigns.
                  </p>
                  <p className="text-lg">
                    My expertise spans across multiple digital platforms including <span className="font-semibold">Shopify</span>, 
                    <span className="font-semibold"> Google Analytics</span>, and <span className="font-semibold">Google Ads, Meta Ads</span> 
                    with a proven track record of delivering measurable improvements in online sales and user experience.
                  </p>
                  <p className="text-lg">
                    I'm passionate about staying ahead of digital marketing trends and continuously learning new strategies 
                    to help businesses grow their online presence and achieve their marketing goals.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '7+', label: 'Months Experience', icon: Calendar, color: 'from-teal-500 to-blue-500' },
                  { number: 'MBA', label: 'Marketing Management', icon: GraduationCap, color: 'from-blue-500 to-purple-500' },
                  { number: '100%', label: 'Client Satisfaction', icon: Star, color: 'from-purple-500 to-pink-500' },
                  { number: '6+', label: 'Key Projects', icon: Briefcase, color: 'from-pink-500 to-red-500' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  Contact Info
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: 'Location', value: 'Aminjikarai, Chennai, India', href: null },
                    { icon: Phone, label: 'Phone', value: '+91 9840696374', href: 'tel:+919840696374' },
                    { icon: Mail, label: 'Email', value: 'surendranbba006@gmail.com', href: 'mailto:surendranbba006@gmail.com' },
                    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/surendran-m-795a17338' }
                  ].map((contact, index) => {
                    const IconComponent = contact.icon;
                    const content = (
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:shadow-md">
                        <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl">
                          <IconComponent className="w-5 h-5 text-teal-600" />
                        </div>
                        <div className="text-left flex-grow">
                          <div className="font-semibold text-gray-800">{contact.label}</div>
                          <div className="text-sm text-gray-600">{contact.value}</div>
                        </div>
                        {contact.href && <ArrowRight className="w-4 h-4 text-gray-400" />}
                      </div>
                    );
                    
                    return contact.href ? (
                      <motion.a 
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.02 }}
                        className="block"
                      >
                        {content}
                      </motion.a>
                    ) : (
                      <motion.div key={index} whileHover={{ scale: 1.02 }}>
                        {content}
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold mb-4 text-gray-800 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-teal-600" />
                    Languages
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <span className="font-medium text-gray-700">English</span>
                      <span className="text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-bold shadow-sm">Fluent</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <span className="font-medium text-gray-700">Tamil</span>
                      <span className="text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full font-bold shadow-sm">Native</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Professional Experience
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-300 via-blue-300 to-purple-300 rounded-full"></div>
            
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start space-x-10 pb-16"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center z-10 shadow-xl"
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="flex-grow">
                  <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-grow">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                        <p className="text-xl text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text font-bold mb-2">{exp.role}</p>
                        <p className="text-gray-600 mb-3">{exp.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mt-4 lg:mt-0 bg-gradient-to-r from-gray-100 to-blue-100 px-4 py-3 rounded-2xl border border-gray-200">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {exp.segments.map((segment, segIndex) => (
                        <motion.div 
                          key={segIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: segIndex * 0.1 }}
                          className="space-y-4"
                        >
                          <h4 className="text-2xl font-bold text-gray-800 pb-4 border-b-2 border-gradient-to-r from-teal-200 to-blue-200 flex items-center">
                            <div className="w-3 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-4"></div>
                            {segment.title}
                          </h4>
                          <div className="grid gap-3">
                            {segment.achievements.map((achievement, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-teal-200"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed">{achievement}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Core Skills
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl">
                        <IconComponent className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-800 block">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.category}</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full shadow-sm"
                    ></motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-3xl border border-gray-200 shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800 flex items-center justify-center">
              <div className="w-3 h-10 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-4"></div>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Google Analytics', 'Search Console', 'Google Ads','Shopify','Meta Ads', 'Canva', 'MS Office', 'Google Tag Manager', 'SEMrush', 'Ahrefs'].map((tool, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-white text-gray-700 rounded-2xl text-sm font-semibold hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-700 transition-all duration-300 shadow-md border border-gray-200 hover:border-teal-200 hover:shadow-lg"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Key Projects
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          {/* Project Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedProjectCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedProjectCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-teal-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={`${selectedProjectCategory}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl group-hover:from-teal-200 group-hover:to-blue-200 transition-all duration-300">
                      <Target className="w-6 h-6 text-teal-600" />
                    </div>
                    <span className="text-xs font-bold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-xs font-semibold border border-teal-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-green-600 text-sm bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span className="font-medium">{project.results}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                      <span className="text-sm font-medium text-gray-700">Impact:</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Education & Certifications
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="w-3 h-10 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-4"></div>
                Education
              </h3>
              
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-10 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-2xl mb-2">MBA - Marketing Management</h4>
                      <p className="text-xl text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text font-bold">Madras University, Chennai</p>
                    </div>
                  </div>
                  <span className="text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    2023 - 2025
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-2xl mb-2">BBA</h4>
                      <p className="text-xl text-gray-600">St Thomas College of Arts & Science</p>
                    </div>
                  </div>
                  <span className="text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    2018 - 2022
                  </span>
                </div>
              </motion.div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Let's Connect
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                  <div className="w-3 h-10 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-4"></div>
                  Get In Touch
                </h3>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                  Ready to discuss digital marketing opportunities? 
                  I'd love to hear about your project and how I can help drive results.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: 'Phone', value: '+91 9840696374', href: 'tel:+919840696374', color: 'from-green-500 to-emerald-500' },
                    { icon: Mail, label: 'Email', value: 'surendranbba006@gmail.com', href: 'mailto:surendranbba006@gmail.com', color: 'from-blue-500 to-indigo-500' },
                    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/surendran-m-795a17338', color: 'from-purple-500 to-pink-500' }
                  ].map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <motion.a 
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-white transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:shadow-lg group"
                      >
                        <div className={`p-4 bg-gradient-to-br ${contact.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-grow">
                          <div className="font-bold text-gray-800 text-lg">{contact.label}</div>
                          <div className="text-gray-600">{contact.value}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                      </motion.a>
                    );
                  })}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                  <p className="text-gray-700 flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-3 text-teal-600" />
                    Based in Chennai, India • Available for remote opportunities
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <div className="w-3 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white text-lg"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3">
                    <Target className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white text-lg"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 resize-vertical bg-white text-lg"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-xl hover:shadow-2xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl"
                    >
                      <p className="text-green-800 font-semibold flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl"
                    >
                      <p className="text-red-800 font-semibold">
                        ❌ Something went wrong. Please contact me directly at 
                        <a href="mailto:surendranbba006@gmail.com" className="underline ml-1 hover:text-red-600">
                          surendranbba006@gmail.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-2xl">
              SM
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Surendran M</h3>
          <p className="text-gray-300 text-lg mb-6">Digital Marketing Executive • Chennai, India</p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/surendran-m-795a17338', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:surendranbba006@gmail.com', color: 'hover:text-teal-400' },
              { icon: ExternalLink, href: 'https://medium.com/@surendrandigitalmarketing', color: 'hover:text-purple-400' }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`p-3 bg-white/10 rounded-2xl text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">&copy; 2025 Surendran M. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Crafted with passion for digital excellence</p>
          </div>
        </div>
      </footer>
    </div>           
  );
}

export default App;