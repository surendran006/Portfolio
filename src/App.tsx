import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  TrendingUp, 
  Target, 
  Users, 
  Award,
  ChevronDown,
  Menu,
  X,
  Search,
  ShoppingCart,
  BarChart3,
  Globe,
  Zap,
  CheckCircle,
  Star,
  Calendar,
  Building,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import emailjs from 'emailjs-com';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_your_service_id',
        'template_your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Surendran M',
        },
        'your_public_key'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'SEO Optimization', level: 95, icon: Search },
    { name: 'Google Ads', level: 90, icon: Target },
    { name: 'Meta Ads', level: 88, icon: Users },
    { name: 'E-commerce Marketing', level: 92, icon: ShoppingCart },
    { name: 'Analytics & Reporting', level: 85, icon: BarChart3 },
    { name: 'Social Media Marketing', level: 87, icon: Globe }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "45% Organic Traffic Growth",
      description: "Achieved significant organic traffic increase for multiple clients through strategic SEO implementation"
    },
    {
      icon: Target,
      title: "ROI Optimization Expert",
      description: "Consistently improved campaign ROI by 30-50% through data-driven optimization strategies"
    },
    {
      icon: Award,
      title: "E-commerce Success",
      description: "Successfully managed and scaled multiple e-commerce campaigns with proven results"
    },
    {
      icon: Users,
      title: "Multi-Platform Expertise",
      description: "Proficient in managing campaigns across Google, Meta, and other major advertising platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <motion.div 
              className="text-lg sm:text-xl font-bold text-teal-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Surendran M
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
              <div className="px-3 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Digital Marketing
                <span className="text-teal-600 block">Executive</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Results-driven digital marketing professional specializing in SEO, Google Ads, and e-commerce optimization. 
                Proven track record of driving measurable business growth through data-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('achievements')}
                  className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Award size={18} />
                  View Achievements
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Digital Marketing Professional"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">Available for Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate digital marketing professional with expertise in driving online growth and maximizing ROI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Professional Journey</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                With a strong foundation in digital marketing and a passion for data-driven results, I specialize in 
                creating comprehensive marketing strategies that drive measurable business growth. My expertise spans 
                across SEO optimization, paid advertising campaigns, and e-commerce marketing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Based in Chennai, India, I've successfully managed campaigns for diverse industries, consistently 
                delivering improved ROI and enhanced online visibility for my clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-teal-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700">Chennai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="text-teal-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700">Digital Marketing Executive</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-teal-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700">MBA Marketing Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="text-teal-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700">Supreme Computers India</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                  <Target className="text-teal-600" size={18} />
                  Core Expertise
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Search Engine Optimization (SEO)</li>
                  <li>• Google Ads Campaign Management</li>
                  <li>• Meta Ads (Facebook & Instagram)</li>
                  <li>• E-commerce Marketing Strategy</li>
                  <li>• Analytics & Performance Tracking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                  <Zap className="text-purple-600" size={18} />
                  Key Strengths
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Data-driven decision making</li>
                  <li>• ROI optimization strategies</li>
                  <li>• Cross-platform campaign management</li>
                  <li>• Performance analysis & reporting</li>
                  <li>• Continuous learning & adaptation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 bg-gray-50 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              My journey in digital marketing with proven results and continuous growth
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Digital Marketing Executive</h3>
                  <p className="text-sm sm:text-base text-teal-600 font-semibold">Supreme Computers India PVT LTD</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 sm:mt-0">
                  <Calendar size={16} />
                  <span>Current Position</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Leading digital marketing initiatives with focus on SEO optimization, paid advertising campaigns, 
                and e-commerce growth strategies. Responsible for managing multi-platform campaigns and delivering 
                measurable results for diverse client portfolios.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>SEO Strategy & Implementation</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Google Ads Management</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Meta Ads Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>E-commerce Marketing</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Analytics & Reporting</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>ROI Optimization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 bg-white px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive skill set in digital marketing with proven proficiency levels
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <skill.icon className="text-teal-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs sm:text-sm text-gray-600">Proficiency</span>
                    <span className="text-xs sm:text-sm font-semibold text-teal-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-20 bg-gradient-to-br from-teal-50 to-blue-50 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results and driving business growth
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl flex-shrink-0">
                    <achievement.icon className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{achievement.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Performance Highlights</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">45%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Traffic Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">50%</div>
                  <div className="text-xs sm:text-sm text-gray-600">ROI Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Campaigns Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gray-900 text-white px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to take your digital marketing to the next level? Let's discuss your project and goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities and projects. Whether you need help with 
                SEO, paid advertising, or comprehensive digital marketing strategy, I'm here to help.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-600 rounded-lg flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:surendranbba006@gmail.com" className="text-sm sm:text-base text-gray-300 hover:text-teal-400 transition-colors">
                      surendranbba006@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-600 rounded-lg flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919840696374" className="text-sm sm:text-base text-gray-300 hover:text-teal-400 transition-colors">
                      +91 98406 96374
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-600 rounded-lg flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm sm:text-base text-gray-300">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-600 rounded-lg flex-shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/surendran-m-795a17338" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-1"
                    >
                      Connect with me <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center text-sm sm:text-base">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-400 text-center text-sm sm:text-base">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base">&copy; 2024 Surendran M. All rights reserved.</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Digital Marketing Executive | Chennai, India</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/surendran-m-795a17338"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:surendranbba006@gmail.com"
                className="p-2 bg-gray-700 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+919840696374"
                className="p-2 bg-gray-700 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;