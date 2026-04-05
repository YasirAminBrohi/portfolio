import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaPython, FaAndroid } from 'react-icons/fa';
import { SiCplusplus, SiKotlin } from 'react-icons/si';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-sahiya-dark text-gray-100 font-sans selection:bg-sahiya-accent selection:text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <motion.div {...fadeIn} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-sahiya-accent">Yasir Amin Brohi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            BSCS Student at FAST Karachi | Android & Systems Developer
          </p>
          <div className="flex justify-center gap-6 mt-8 text-3xl">
            <a href="https://github.com/YasirAminBrohi" target="_blank" rel="noreferrer" className="hover:text-sahiya-accent transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sahiya-accent transition-colors"><FaLinkedin /></a>
            <a href="mailto:k250796@nu.edu.pk" className="hover:text-sahiya-accent transition-colors"><FaEnvelope /></a>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div {...fadeIn} className="bg-sahiya-card p-8 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-sahiya-accent">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a dedicated software engineering student with a passion for building robust automation tools and system-level software. 
            Currently developing <strong>Sahiya</strong>, a local AI assistant powered by OpenClaw, I bridge the gap between intention and execution.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'Python', icon: <FaPython /> },
            { name: 'Kotlin', icon: <SiKotlin /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'Android', icon: <FaAndroid /> },
            { name: 'System Automation', icon: <FaGithub /> },
          ].map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-sahiya-card p-6 rounded-xl flex flex-col items-center gap-3 hover:border-sahiya-accent border border-transparent transition-all"
            >
              <div className="text-4xl text-sahiya-accent">{skill.icon}</div>
              <span className="font-semibold text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeIn} className="bg-sahiya-card p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-sahiya-accent mb-2">Sahiya v1 🤖</h3>
            <p className="text-gray-400 mb-4">A personal AI assistant running locally on OpenClaw. Handles WhatsApp automation, system monitoring, and academic tracking.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Go</span>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="bg-sahiya-card p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-sahiya-accent mb-2">wacli_window 📱</h3>
            <p className="text-gray-400 mb-4">A cross-platform CLI tool for WhatsApp automation, featuring OAuth persistence and Windows compatibility.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Go</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">CLI</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>Built with React, Tailwind & Sahiya's Logic ⚡</p>
      </footer>
    </div>
  );
};

export default Portfolio;
