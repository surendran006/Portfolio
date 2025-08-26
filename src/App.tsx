import React, { useState } from 'react';
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
  MessageSquare
} from 'lucide-react';

const skills = [
  { name: 'SEO (On-page & Off-page)', level: 100, icon: Search },
  { name: 'Google Ads (PPC)', level: 100, icon: MousePointer },
  { name: 'Meta Ads ', level: 100, icon: BarChart3 },
  { name: 'Google Analytics', level: 100, icon: TrendingUp },
  { name: 'Google Search Console', level: 100, icon: Search },
  { name: 'Shopify', level: 100, icon: Globe }, 
  { name: 'Social Media Marketing', level: 100, icon: Users },
  { name: 'Content Optimization', level: 100, icon: TrendingUp }
];

const experience = [
  {
    company: 'Supreme Computers India PVT LTD',
    role: 'Digital Marketing Executive ( Website Admin )',
    duration: 'Mar 2025 — Present',
    description: 'Website Administrator – E-commerce & Digital Marketing (IT Products)',
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
    results: 'Improved search visibility and enhanced user experience'
  },
  {
    title: 'Digital Marketing Campaign Management',
    description: 'Seasonal product campaigns with integrated social media and paid advertising',
    technologies: ['Google Ads','Meta Ads', 'Social Media', 'Analytics', 'Content Marketing'],
    results: 'Enhanced brand awareness and campaign performance tracking'
  },
  {
    title: 'On-Page SEO Optimization',
    description: 'Comprehensive keyword research and content optimization for product pages and category structures',
    technologies: ['Keyword Research', 'Meta Tags', 'Schema Markup', 'Content Optimization'],
    results: 'Improved organic rankings and click-through rates from search results'
  },
  {
    title: 'Off-Page SEO & Link Building',
    description: 'Strategic link building campaigns and partnership development to boost domain authority',
    technologies: ['Link Building', 'Guest Posting', 'Directory Submissions', 'Partnership Outreach'],
    results: 'Increased domain authority and referral traffic from quality backlinks'
  },
  {
    title: 'Technical SEO Implementation',
    description: 'Site speed optimization, mobile responsiveness, and crawlability improvements',
    technologies: ['Site Speed', 'Mobile Optimization', 'XML Sitemaps', 'Robots.txt'],
    results: 'Enhanced site performance and better search engine indexing'
  },
  {
    title: 'Google Analytics & Performance Tracking',
    description: 'Comprehensive analytics setup with custom dashboards, goal tracking, and conversion optimization for data-driven decision making',
    technologies: ['Google Analytics', 'Google Tag Manager', 'Conversion Tracking', 'Custom Reports', 'Data Analysis'],
    results: 'Improved data visibility and actionable insights for marketing optimization'
  }
];

const aiTools = [
  {
    name: 'ChatGPT',
    category: 'Content & Strategy',
    description: 'Advanced content creation, SEO strategy development, and marketing copy optimization',
    icon: MessageSquare,
    applications: [
      'SEO-optimized content creation',
      'Ad copy and marketing materials',
      'Customer persona development',
      'Content strategy planning'
    ],
    impact: 'Enhanced content quality and marketing effectiveness'
  },
  {
    name: 'Bolt AI',
    category: 'Web Development',
    description: 'Rapid website development and UI/UX optimization for better user experience',
    icon: Globe,
    applications: [
      'Portfolio website development',
      'Landing page optimization',
      'Responsive design implementation',
      'User interface improvements'
    ],
    impact: 'Accelerated development and improved website performance'
  },
  {
    name: 'GitHub Copilot',
    category: 'Development',
    description: 'AI-powered code assistance for website optimization and technical implementations',
    icon: BarChart3,
    applications: [
      'Code optimization and debugging',
      'Analytics implementation',
      'Performance improvements',
      'Technical SEO enhancements'
    ],
    impact: 'Faster development cycles and cleaner code implementation'
  },
  {
    name: 'Claude AI',
    category: 'Analysis & Insights',
    description: 'Data analysis, market research, and strategic planning for digital marketing campaigns',
    icon: TrendingUp,
    applications: [
      'Market research and analysis',
      'Competitor analysis reports',
      'Campaign performance insights',
      'Strategic planning assistance'
    ],
    impact: 'Data-driven decision making and improved campaign strategies'
  },
  {
    name: 'Canva AI',
    category: 'Design & Creative',
    description: 'AI-enhanced graphic design for social media, ads, and marketing materials',
    icon: Target,
    applications: [
      'Social media graphics creation',
      'Ad creative design',
      'Brand asset development',
      'Visual content optimization'
    ],
    impact: 'Professional visual content and improved brand consistency'
  },
  {
    name: 'Grammarly AI',
    category: 'Content Quality',
    description: 'Advanced writing assistance for error-free, engaging marketing content',
    icon: User,
    applications: [
      'Content proofreading and editing',
      'Tone and style optimization',
      'Grammar and clarity improvements',
      'Professional communication'
    ],
    impact: 'Enhanced content quality and professional communication'
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      // Check if EmailJS is properly configured
      const serviceId = 'service_jij055t'; // Your EmailJS service ID
      const templateId = 'template_erqwzv9'; // Your EmailJS template ID
      const publicKey = 'yNaFf9wCjc8dWEEtj'; // Replace with your actual public key
      
      if (publicKey === 'your_public_key') {
        throw new Error('EmailJS not configured. Please set up your EmailJS credentials first.');
      }
      
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
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-800 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                SM
              </div>
              <span>Surendran M</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'ai-tools', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg font-medium ${
                    activeSection === section 
                      ? 'text-teal-600 font-semibold bg-teal-50' 
                      : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {section === 'blog' ? (
                    <a 
                      href="https://medium.com/@surendrandigitalmarketing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-600 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Blog
                    </a>
                  ) : section === 'ai-tools' ? (
                    'AI Tools'
                  ) : (
                    section
                  )}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-all duration-300 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-3 pt-4">
                {['home', 'about', 'experience', 'skills', 'projects', 'ai-tools', 'blog', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === section 
                        ? 'text-teal-600 font-semibold bg-teal-50 border-l-4 border-teal-500' 
                        : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                    }`}
                  >
                    {section === 'blog' ? (
                      <a 
                        href="https://medium.com/@surendrandigitalmarketing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-teal-600 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Blog
                      </a>
                    ) : section === 'ai-tools' ? (
                      'AI Tools'
                    ) : (
                      section
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-blue-50/30 to-purple-50/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20 relative z-10">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
                SM
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text">
              Surendran M
            </h1>
            <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text mb-6 font-semibold">
              Digital Marketing Executive (Website Admin)
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Results-driven digital marketing professional specializing in SEO, Google Ads, Meta Ads
              and e-commerce optimization. Passionate about driving measurable growth through 
              data-driven marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <a 
                href="/resume.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                View My Resume
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1_fDXmk5FfUv6Bd9W3bukp-T1VyZ4jkB6"
                target="_blank" 
                rel="noopener"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-12 flex justify-center">
              <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            About Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></div>
                Professional Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I have completed my MBA in Marketing Management and currently work as a Digital Marketing Executive at Supreme Computers (India). I bring hands-on experience in e-commerce operations, SEO strategies, and paid advertising campaigns.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                My expertise spans across multiple digital platforms including Shopify, Google Analytics, 
                and Google Ads, Meta Ads with a proven track record of delivering measurable improvements in 
                online sales and user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">7+</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">MBA</div>
                  <div className="text-sm text-gray-600">in Marketing Management</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span className="text-gray-700">Aminjikarai, Chennai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-600" />
                <a href="tel:+919840696374" className="text-gray-700 hover:text-teal-600"> 9840696374</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-600" />
                <a href="mailto:surendranbba006@gmail.com" className="text-gray-700 hover:text-teal-600">surendranbba006@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-teal-600" />
                <a href="https://www.linkedin.com/in/surendran-m-795a17338" className="text-gray-700 hover:text-teal-600">linkedin.com/surendran</a>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-gray-800 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-teal-600" />
                  Languages
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">English</span>
                    <span className="text-sm bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full font-medium">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tamil</span>
                    <span className="text-sm bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full font-medium">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            Professional Experience
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-blue-200 to-purple-200 rounded-full"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 pb-12">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-grow">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                        <p className="text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text font-semibold text-lg">{exp.role}</p>
                        <p className="text-gray-600 text-sm">{exp.description}</p>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-2 md:mt-0 bg-gray-100 px-3 py-2 rounded-full">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {exp.segments.map((segment, segIndex) => (
                        <div key={segIndex} className="space-y-3">
                          <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gradient-to-r from-teal-200 to-blue-200 pb-3 flex items-center">
                            <div className="w-2 h-6 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></div>
                            {segment.title}
                          </h4>
                          <div className="space-y-3">
                            {segment.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            Core Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                      <IconComponent className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-500 ml-auto bg-gray-100 px-2 py-1 rounded-full">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></div>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Google Analytics', 'Search Console', 'Google Ads','Shopify','Meta Ads', 'Canva', 'MS Office'].map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-700 transition-all duration-300 shadow-sm border border-gray-200 hover:border-teal-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            Key Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-2 h-6 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></div>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-xs font-medium border border-teal-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-green-600 text-sm bg-green-50 p-3 rounded-lg border border-green-200">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  <span>{project.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            AI Tools for Enhanced User Experience
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </h2>
          
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Leveraging cutting-edge AI technologies to deliver superior website performance, 
            enhanced user experience, and data-driven marketing strategies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                      <span className="text-sm bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center">
                      <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-2"></div>
                      Key Applications
                    </h4>
                    <ul className="space-y-2">
                      {tool.applications.map((app, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-green-600 text-sm bg-green-50 p-3 rounded-lg border border-green-200">
                      <Target className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{tool.impact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center justify-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                AI-Powered Results
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">50%</div>
                  <div className="text-sm text-gray-600">Faster Content Creation</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">75%</div>
                  <div className="text-sm text-gray-600">Improved Code Quality</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border border-pink-100">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text mb-2">90%</div>
                  <div className="text-sm text-gray-600">Enhanced User Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            Education & Certifications
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></div>
                Education
              </h3>
              
              <div className="p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">MBA - Marketing Management</h4>
                    <p className="text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text font-semibold">Madras University, Chennai</p>
                  </div>
                  <span className="text-sm bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-2 rounded-full font-medium">2023 - 2025</span>
                </div>
              </div>
              
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">BBA</h4>
                    <p className="text-gray-600">St Thomas College of Arts & Science</p>
                  </div>
                  <span className="text-sm bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-2 rounded-full font-medium">2018 - 2022</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
                Certifications
              </h3>
              
              <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Digital Marketing Course</h4>
                    <p className="text-gray-600">Inspire Digital Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 relative">
            Let's Connect
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center justify-center">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></div>
                Get In Touch
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-left">
                Ready to discuss digital marketing opportunities? 
                I'd love to hear about your project and how I can help drive results.
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+919840696374"
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-700 transition-all duration-300 border border-gray-200 hover:border-teal-200"
                >
                  <div className="p-2 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-gray-600">Contact Us</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:surendranbba006@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-700 transition-all duration-300 border border-gray-200 hover:border-teal-200"
                >
                  <div className="p-2 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-600">Email for Contact Us</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/surendran-m-795a17338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-700 transition-all duration-300 border border-gray-200 hover:border-teal-200"
                >
                  <div className="p-2 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
                    <Linkedin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-gray-600">Connect with me</div>
                  </div>
                </a>
              </div>
              
              <p className="text-gray-600 text-left">
                <MapPin className="w-4 h-4 inline mr-2 text-teal-600" />
                Based in Chennai, India • Available for remote opportunities
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center justify-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-vertical bg-white"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                      <p className="text-green-800 text-sm font-medium">
                        ✅ Message sent successfully to surendranbba006@gmail.com! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
                      <p className="text-red-800 text-sm font-medium">
                        ❌ EmailJS not configured yet. Please contact me directly at 
                        <a href="mailto:surendranbba006@gmail.com" className="underline ml-1">
                          surendranbba006@gmail.com
                        </a>
                      </p>
                    </div>
                  )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Surendran M. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Digital Marketing Executive • Chennai, India</p>
        </div>
      </footer>
    </div>
  );
}

export default App;