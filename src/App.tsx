import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  BookOpen,
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
    technologies: ['Google Ads','Meta Ads', 'Social Media', 'Canva', 'Analytics', 'Content Marketing'],
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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

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


  const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedProjectCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedProjectCategory);

  return (
    <div className="min-h-screen w-full max-w-screen overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Make it clickable to scroll to home */}
            <motion.button 
              onClick={() => scrollToSection(homeRef)}
              className="font-bold text-lg sm:text-xl text-gray-800 flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                MS
              </div>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hidden sm:block">Surendran M</span>
            </motion.button>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { name: 'home', ref: homeRef },
                { name: 'about', ref: aboutRef },
                { name: 'experience', ref: experienceRef },
                { name: 'skills', ref: skillsRef },
                { name: 'projects', ref: projectsRef },
                { name: 'contact', ref: contactRef }
              ].map((section) => (
                <motion.button
                  key={section.name}
                  onClick={() => scrollToSection(section.ref)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-xl font-medium cursor-pointer ${
                    activeSection === section.name 
                      ? 'text-white bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg' 
                      : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {section.name}
                </motion.button>
              ))}
              <motion.a 
                href="https://medium.com/@surendrandigitalmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-teal-600 transition-all duration-300 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 flex items-center space-x-1 cursor-pointer"
              >
                <span>Blog</span>
                <BookOpen className="w-3 h-3" />
              </motion.a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-all duration-300 rounded-xl hover:bg-gray-50 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} 
            >
              {isMobileMenuOpen ? <X className="w-3 h-6" /> : <Menu className="w-3 h-6" />}
            </motion.button>
          </div>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-2 pb-3 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-1 pt-3">
                  {[
                    { name: 'home', ref: homeRef },
                    { name: 'about', ref: aboutRef },
                    { name: 'experience', ref: experienceRef },
                    { name: 'skills', ref: skillsRef },
                    { name: 'projects', ref: projectsRef },
                    { name: 'contact', ref: contactRef }
                  ].map((section) => (
                    <motion.button
                      key={section.name}
                        onClick={() => {
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          scrollToSection(section.ref);
                        }, 100); // 50ms delay for menu close animation
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`capitalize text-left py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        activeSection === section.name 
                          ? 'text-white bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg' 
                          : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                      }`}
                    >
                      {section.name}
                    </motion.button>
                  ))}
                  <motion.a 
                    href="https://medium.com/@surendrandigitalmarketing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-gray-600 hover:text-teal-600 transition-all duration-300 py-2 px-3 rounded-xl hover:bg-gray-50 flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Blog</span>
                    <BookOpen className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={homeRef} id="home" className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-3 sm:px-4 relative overflow-hidden min-h-screen flex items-center">
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
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative z-10">MS</span>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 sm:border-4 border-white shadow-lg flex items-center justify-center"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-2"
            >
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Surendran M
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text mb-6 sm:mb-8 font-bold px-2"
            >
              Digital Marketing Executive
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2"
            >
              <motion.button 
                onClick={() => scrollToSection(contactRef)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection(projectsRef)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-teal-600 text-teal-600 rounded-2xl font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Eye className="w-5 h-5" />
                <span>View My Work</span>
              </motion.button>
              
              <motion.a 
                href="https://drive.google.com/uc?export=download&id=1_fDXmk5FfUv6Bd9W3bukp-T1VyZ4jkB6"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 cursor-pointer"
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
      <section ref={aboutRef} id="about" className="py-16 sm:py-20 px-3 sm:px-4 bg-white">
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
          
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-lg">
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

              {/* Statistics Cards - BBA, MBA, and 6+ Months Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { number: 'BBA', label: 'Bachelor of Business Administration', icon: GraduationCap, color: 'from-purple-500 to-pink-500' },
                  { number: 'MBA', label: 'Marketing Management (Correspondence)', icon: GraduationCap, color: 'from-blue-500 to-purple-500' },
                  { number: '7+', label: 'Months Experience', icon: Calendar, color: 'from-teal-500 to-blue-500' }
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
                      className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Target className="w-6 h-6 text-teal-600 mr-3" />
                  Key Strengths
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'SEO Strategy & Implementation', level: 100 },
                    { skill: 'Google Ads & Meta Ads Management', level: 100 },
                    { skill: 'E-commerce Platform Management', level: 100 },
                    { skill: 'Data Analysis & Reporting', level: 100 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium text-gray-700">
                        <span>{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  Professional Goals
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Drive measurable business growth through innovative digital strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Continuously stay updated with emerging digital marketing trends</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Help businesses optimize their online presence and ROI</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Experience
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8"
            >
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.company}</h3>
                        <p className="text-lg sm:text-xl font-semibold mb-3 text-blue-100">{exp.role}</p>
                        <p className="text-blue-100 mb-4 text-sm sm:text-base">{exp.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-blue-100">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-blue-100">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 space-y-8">
                    {exp.segments.map((segment, segIndex) => (
                      <div key={segIndex}>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-3 ${segIndex === 0 ? 'bg-teal-500' : 'bg-blue-500'}`}></div>
                          {segment.title}
                        </h4>
                        <div className="grid gap-4">
                          {segment.achievements.map((achievement, achIndex) => (
                            <motion.div 
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: achIndex * 0.1 }}
                              className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-16 sm:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 relative"
          >
            Skills & Expertise
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                  className="group bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">{skill.name}</h3>
                    <div className="text-xs sm:text-sm text-gray-600 mb-4">{skill.category}</div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                      <span className="absolute -top-6 right-0 text-sm font-semibold text-gray-700">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-8 text-gray-800 relative"
          >
            Featured Projects
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg max-w-3xl mx-auto px-2"
          >
            Explore my portfolio of successful digital marketing campaigns and projects that have delivered measurable results for clients.
          </motion.p>
          
          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedProjectCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedProjectCategory === category
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Impact:</p>
                            <p className="font-bold text-lg text-green-600">{project.impact}</p>
                          </div>
                          <div className="text-right">
                            <Users className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-16 sm:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-8 text-gray-800 relative"
          >
            Get In Touch
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 sm:mb-16 text-base sm:text-lg max-w-3xl mx-auto px-2"
          >
            Ready to take your digital marketing to the next level? Let's discuss how I can help grow your business through proven strategies and data-driven results.
          </motion.p>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a href="mailto:surendranbba006@gmail.com" className="text-lg font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300">
                        Mail Me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a href="tel:9840696374" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="text-lg font-semibold text-gray-800">Chennai, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/surendran-m-795a17338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      >
                        Surendran M
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Why Work With Me?</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Proven track record with measurable results',
                    'Expertise in SEO, Google Ads, and e-commerce',
                    'Data-driven approach to digital marketing',
                    'Dedicated to client success and ROI',
                    'Up-to-date with latest industry trends'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 px-3 sm:px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-2xl">
              MS
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Surendran M</h3>
          <p className="text-gray-300 text-base sm:text-lg mb-6">Digital Marketing Executive • Chennai, India</p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/surendran-m-795a17338', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:surendranbba006@gmail.com', color: 'hover:text-teal-400' },
              { icon: BookOpen, href: 'https://medium.com/@surendrandigitalmarketing', color: 'hover:text-purple-400' }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`p-3 bg-white/10 rounded-2xl text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 cursor-pointer`}
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