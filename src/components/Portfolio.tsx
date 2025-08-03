import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, User, FileText, Youtube, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/experiences';
import { projects } from '../data/projects';
// import { skills } from '../data/skills';
import MediaLinks from './media_links';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };  
  const skills = 
  {
    "Frontend" : ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
    // "Frameworks" : [],
    "Backend": ["Java", "SpringBoot", "NodeJs", "FastAPI"],
    "Database": ["PostgreSQL", "MongoDB"],
    "Tools & Others": ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"]
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Alexander Lee
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'contact'].map((item) => ( // 'experience'
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about',  'projects', 'contact'].map((item) => ( //'experience'
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-gray-300 hover:text-purple-400 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* About Me Section */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <User size={48} className="text-purple-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Alexander Lee
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8">
                Full Stack Engineer
              </div>
              <div className="flex justify-center space-x-6">
                <MediaLinks/>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              Currently, a recent college graduate exploring and gaining more experience in Backend technologies. 
              I have experience in building scalable web applications and a strong foundation in both
              frontend and backend technologies.
              Recently, I'm been very interested in leveraging AI and machine learning to build innovative applications.

            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-gray-300 text-lg">My professional journey in software development</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">Some of my recent work that showcases my skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  {project.hackathon && (
                    <p className="text-sm text-gray-400 mb-2 italic">Hackathon Project</p>
                  )}
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    { project.demo ? (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Youtube size={16} className="mr-1" />
                      Demo
                    </a>) : 
                    null
                      }

                    { project.website ? (
                      <a
                        href={project.website}
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Website
                      </a>) : 
                      null
                    }
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:alexanderlee014@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Send Email
            </a>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-colors flex items-center justify-center"
            >
              <FileText size={16} className="mr-2" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <MediaLinks/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Alexander Lee. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;