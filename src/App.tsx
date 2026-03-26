/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Layout, 
  Smartphone, 
  BarChart3, 
  Cpu, 
  Menu, 
  X, 
  ChevronRight,
  Download,
  Send
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold gradient-text">Girijesh K</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden flex flex-col items-center py-8 gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const roles = ["Web Designer", "Data Analyst", "AI Enthusiast"];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/10 to-transparent -z-10 rounded-bl-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h5 className="text-primary font-semibold mb-4 tracking-wider uppercase text-sm">Welcome to my portfolio</h5>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Girijesh K</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 mb-6 h-12">
            I'm a <span className="text-primary">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I design modern, responsive websites and build data-driven solutions that help businesses grow.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all">
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-20" />
            <div className="absolute inset-4 bg-white rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://picsum.photos/seed/girijesh/800/800" 
                alt="Girijesh K" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto">
              <img 
                src="https://picsum.photos/seed/about-me/800/600" 
                alt="Workspace" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Specializing in</p>
                  <p className="font-bold">Web & AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-display font-bold mb-6">I'm a Fresher & B.Tech AI & Data Science Student</h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              I’m a B.Tech Artificial Intelligence & Data Science student with a strong interest in web design and data-driven solutions. I specialize in building responsive and user-friendly websites using HTML, CSS, and JavaScript.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              I also have experience working with data analysis tools like Excel and Python-based technologies. My goal is to help businesses establish a strong online presence through clean, modern, and efficient websites.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10 max-w-sm mx-auto md:mx-0">
              <div>
                <p className="text-primary font-bold text-3xl mb-1">Fresher</p>
                <p className="text-slate-500 text-sm">Status</p>
              </div>
              <div>
                <p className="text-primary font-bold text-3xl mb-1">5+</p>
                <p className="text-slate-500 text-sm">Projects Completed</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto md:mx-0">
              Download CV <Download size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <Code className="text-orange-500" />, level: 95 },
    { name: 'CSS', icon: <Layout className="text-blue-500" />, level: 90 },
    { name: 'JavaScript', icon: <Code className="text-yellow-500" />, level: 85 },
    { name: 'Excel', icon: <BarChart3 className="text-green-600" />, level: 80 },
    { name: 'Firebase', icon: <Database className="text-amber-500" />, level: 75 },
    { name: 'ESP32', icon: <Cpu className="text-purple-500" />, level: 70 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold">{skill.name}</h4>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-linear-to-r from-primary to-secondary"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-400 font-medium tracking-wider">PROFICIENCY</span>
                <span className="text-xs text-primary font-bold">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Smart Parking System',
      desc: 'An IoT-based solution using ESP32 and Firebase to monitor parking availability in real-time.',
      tech: ['IoT', 'Firebase', 'ESP32'],
      image: 'https://picsum.photos/seed/parking/800/500'
    },
    {
      title: 'Patient Onboarding System',
      desc: 'A web dashboard featuring OCR technology to streamline patient registration and data management.',
      tech: ['React', 'OCR', 'Node.js'],
      image: 'https://picsum.photos/seed/patient/800/500'
    },
    {
      title: 'Data Analytics Dashboard',
      desc: 'A comprehensive dashboard built with Python to visualize and analyze complex datasets.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      image: 'https://picsum.photos/seed/analytics/800/500'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Website Design', icon: <Layout size={32} />, desc: 'Creating visually stunning and user-centric website designs.' },
    { title: 'Landing Page Design', icon: <Smartphone size={32} />, desc: 'High-converting landing pages for your products or services.' },
    { title: 'Portfolio Websites', icon: <Code size={32} />, desc: 'Showcasing your work with a professional and modern digital presence.' },
    { title: 'Website Redesign', icon: <Layout size={32} />, desc: 'Modernizing your existing website with the latest design trends.' },
    { title: 'Data Analysis', icon: <BarChart3 size={32} />, desc: 'Extracting insights from data to drive informed business decisions.' },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">My Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  
  // TO THE OWNER: Replace this ID with your actual Formspree ID from https://formspree.io/
  const FORMSPREE_ID = 'your-form-id'; 

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validate()) return;

    setFormStatus('submitting');
    
    try {
      // 1. Primary: Submit to our own backend notification (Resend)
      const apiResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const apiData = await apiResponse.json();

      if (apiResponse.ok) {
        console.log("Backend notification sent successfully to jeshgiri52@gmail.com");
        
        // 2. Secondary: Submit to Formspree if ID is provided
        if (FORMSPREE_ID && FORMSPREE_ID !== 'your-form-id') {
          try {
            await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            });
          } catch (fsError) {
            console.warn("Formspree backup submission failed:", fsError);
          }
        }

        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Backend submission failed:", apiData.error);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-display font-bold mb-8">Let's talk about your project</h3>
            <p className="text-slate-500 mb-12 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-6 text-left">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Email Me</p>
                  <p className="text-lg font-bold">jeshgiri52@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-left">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Call Me</p>
                  <p className="text-lg font-bold">8122934681</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-left">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/girijeshk" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
                aria-label="Visit my LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/GirijeshGiri" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                aria-label="Visit my GitHub profile"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 sm:p-10 rounded-[40px] border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-6 py-4 bg-white rounded-2xl border ${errors.name ? 'border-red-500 ring-2 ring-red-500/10' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-red-500 ml-1 font-medium" role="alert">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-6 py-4 bg-white rounded-2xl border ${errors.email ? 'border-red-500 ring-2 ring-red-500/10' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  />
                  {errors.email && <p id="email-error" className="text-xs text-red-500 ml-1 font-medium" role="alert">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="How can I help you?"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-6 py-4 bg-white rounded-2xl border ${errors.message ? 'border-red-500 ring-2 ring-red-500/10' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none`}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-500 ml-1 font-medium" role="alert">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                aria-busy={formStatus === 'submitting'}
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {formStatus === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send size={20} aria-hidden="true" /></>
                )}
              </button>

              <div className="text-center">
                <p className="text-slate-400 text-sm mb-2">Or send directly via email:</p>
                <a 
                  href="mailto:jeshgiri52@gmail.com" 
                  className="text-primary font-bold hover:underline flex items-center justify-center gap-2"
                  aria-label="Send an email to jeshgiri52@gmail.com"
                >
                  <Mail size={16} aria-hidden="true" /> jeshgiri52@gmail.com
                </a>
              </div>
              
              <div aria-live="polite">
                {formStatus === 'success' && (
                  <div className="mt-4">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-center" role="status">
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 font-bold text-center" role="alert">
                      Something went wrong.
                    </p>
                    <p className="text-red-500 text-sm text-center mt-1">
                      Please try again later or contact me directly via email.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold mb-2">Girijesh K</h3>
          <p className="text-slate-400 text-sm">Building digital experiences with passion.</p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/girijeshk" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/GirijeshGiri" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Visit my GitHub profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:jeshgiri52@gmail.com" 
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Send me an email"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="text-slate-400 text-sm">
          © 2026 Girijesh K. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
