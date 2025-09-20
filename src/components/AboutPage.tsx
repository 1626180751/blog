import React from 'react';
import { Mail, Github, Twitter, Linkedin, Heart, Code, Rocket, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const skills = [
    'Creative Writing', 'Web Development', 'UI/UX Design', 'Space Exploration',
    'Technology Trends', 'Digital Art', 'Photography', 'Storytelling'
  ];

  const achievements = [
    { icon: Star, label: 'Featured Writer', description: 'Published in multiple tech magazines' },
    { icon: Code, label: 'Open Source Contributor', description: 'Contributing to various projects' },
    { icon: Rocket, label: 'Innovation Award', description: 'Recognized for creative solutions' },
    { icon: Heart, label: 'Community Builder', description: 'Building connections through content' },
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <Rocket className="text-white" size={48} />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Welcome to my cosmic corner of the internet, where creativity meets technology and ideas take flight among the stars.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* About Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Hello! I'm a passionate writer and developer who believes in the power of storytelling 
                  to connect people across the vast expanse of the digital universe. My journey began 
                  with a simple curiosity about how technology can enhance human creativity.
                </p>
                <p>
                  Through this blog, I explore the intersection of technology, creativity, and human 
                  experience. Whether I'm writing about the latest web development trends, sharing 
                  personal insights, or crafting stories that transport readers to other worlds, 
                  my goal is always to inspire and connect.
                </p>
                <p>
                  When I'm not writing or coding, you can find me stargazing, experimenting with new 
                  technologies, or exploring the great outdoors. I believe that the best ideas come 
                  from stepping outside our comfort zones and embracing the unknown.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Skills & Interests</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@cosmicblog.com"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span>hello@cosmicblog.com</span>
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Twitter size={18} />
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Fun Facts</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <p>☕ Coffee enthusiast (5+ cups daily)</p>
                <p>🌙 Night owl and stargazer</p>
                <p>📚 Read 50+ books per year</p>
                <p>🎮 Retro gaming collector</p>
                <p>🚀 Space exploration advocate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(({ icon: Icon, label, description }) => (
              <div 
                key={label}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon className="text-purple-300" size={24} />
                </div>
                <h3 className="text-white font-bold mb-2">{label}</h3>
                <p className="text-white/60 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect!</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            I'm always excited to connect with fellow creators, developers, and dreamers. 
            Whether you want to collaborate on a project, share ideas, or just say hello, 
            I'd love to hear from you!
          </p>
          <a 
            href="mailto:hello@cosmicblog.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;