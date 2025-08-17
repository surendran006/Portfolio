import React, { useState } from 'react';
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
  Globe
} from 'lucide-react';

const skills = [
  { name: 'SEO (On-page & Off-page)', level: 100, icon: Search },
  { name: 'Google Ads (PPC)', level: 100, icon: MousePointer },
  { name: 'Meta Ads ', level: 100, icon: BarChart3 },
  { name: 'Google Analytics', level: 100, icon: TrendingUp },
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
    achievements: [
      'Managed end-to-end e-commerce operations for SupremeIndia.com, including product uploads, pricing, inventory, and homepage merchandising',
      'Executed comprehensive SEO strategies improving organic traffic and keyword rankings',
      'Launched and optimized Google Ads/  Meta ads campaigns with focus on ROI and conversion tracking',
      'Collaborated with development teams to enhance UI/UX and site performance',
      'Implemented analytics dashboards for performance monitoring and user behavior analysis'
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
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-800">Surendran M</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-teal-600 font-semibold' 
                      : 'text-gray-600 hover:text-teal-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                SM
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Surendran M
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
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
                className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 shadow-lg"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-200"
              >
                View My Work
              </button>
              {/* View Resume Button */}
              <a 
                href="/resume.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View My Resume</span>
              </a>
              {/* Download Resume Button */}
              <a 
                href="https://drive.google.com/uc?export=download&id=1f0x7K7ZWLUJw8rtqDk0xQXmyXwE3j_zR"
                target="_blank" 
                rel="noopener"
                className="flex items-center space-x-2 px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="mt-12 flex justify-center">
              <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Professional Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I have completed my MBA in Marketing Management and currently work as a Digital Marketing Executive at Supreme Computers (India). I bring hands-on experience in e-commerce operations, SEO strategies, and paid advertising campaigns.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                My expertise spans across multiple digital platforms including Shopify, Google Analytics, 
                and Google Ads, Meta Ads with a proven track record of delivering measurable improvements in 
                online sales and user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">7+</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">MBA</div>
                  <div className="text-sm text-gray-600">in Marketing Management</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
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
                <h4 className="font-semibold mb-3 text-gray-800">Languages</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">English</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tamil</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Professional Experience</h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-200"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 pb-12">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-grow">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                        <p className="text-teal-600 font-semibold">{exp.role}</p>
                        <p className="text-gray-600 text-sm">{exp.description}</p>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
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
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Core Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-teal-600" />
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-500 ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {['Google Analytics', 'Search Console', 'Google Ads','Shopify','Meta Ads', 'Canva', 'MS Office'].map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-green-600 text-sm">
                  <Target className="w-4 h-4 mr-2" />
                  <span>{project.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              
              <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">MBA - Marketing Management</h4>
                    <p className="text-teal-600 font-medium">Madras University, Chennai</p>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">2023 - 2025</span>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">BBA</h4>
                    <p className="text-gray-600">St Thomas College of Arts & Science</p>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">2018 - 2022</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h3>
              
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Digital Marketing Course</h4>
                    <p className="text-gray-600">Inspire Digital Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Let's Connect</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-700 mb-8">
              Ready to discuss digital marketing opportunities? 
              I'd love to hear about your project and how I can help drive results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a 
                href="tel:+919840696374"
                className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Contact Me</span>
              </a>
              
              <a 
                href="mailto:surendranbba006@gmail.com"
                className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email Me</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/surendran-m-795a17338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            
            <p className="text-gray-600">
              <MapPin className="w-4 h-4 inline mr-2" />
              Based in Chennai, India • Available for remote opportunities
            </p>
          </div>
        </div>
      </section>
<div class="flex gap-4 justify-center">
  <a href="tel:+91984069674"
     class="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
    📞 Call Me
  </a>
  <a href="mailto:surndranbba006@gmail.com"
     class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
    📩 Email Me
  </a>
</div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Surendran M. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Digital Marketing Executive • Chennai, India</p>
        </div>
      </footer>
    </div>
  );
}

export default App;