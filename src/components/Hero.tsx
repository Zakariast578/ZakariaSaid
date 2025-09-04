import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import me from '../assets/ani.jpeg'; // Ensure you have a profile image at this path

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const headlineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.6
    },
  },
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Layers */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ y: y2, opacity }}
      >
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, -120, 80, 0],
            scale: [1.2, 0.9, 1.4, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Interactive mouse-following gradient */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-green-400/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        style={{ y: y1 }}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mt-10 bg-green-500/20 border border-green-500/30 rounded-full mb-8 cursor-pointer"
              variants={headlineVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-slate-50 font-light text-sm">Available for Work</span>
            </motion.div>

            {/* Main Headlines with Staggered Animation */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="overflow-hidden"
                variants={headlineVariants}
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <motion.span 
                    className="inline-block mr-4"
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
                  >
                    👋
                  </motion.span>
                  <span className="text-white">I'm</span>
                </motion.h1>
              </motion.div>

              <motion.div
                className="overflow-hidden"
                variants={headlineVariants}
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="gradient-text text-glow">Zakaria Said</span>
                </motion.h1>
              </motion.div>

              <motion.div
                className="overflow-hidden"
                variants={headlineVariants}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.span 
                    className="inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code2 className="h-8 w-8 text-blue-400" />
                    Full-Stack Developer
                  </motion.span>
                  <span className="text-gray-500 mx-3">|</span>
                  <motion.span 
                    className="inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Palette className="h-8 w-8 text-green-400" />
                    UI/UX & Motion Designer
                  </motion.span>
                </motion.h2>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              variants={subtitleVariants}
            >
              Crafting exceptional digital experiences where{' '}
              <motion.span 
                className="text-blue-400 font-semibold"
                whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(59, 130, 246, 0.8)" }}
              >
                stunning design
              </motion.span>{' '}
              meets{' '}
              <motion.span 
                className="text-green-400 font-semibold"
                whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(16, 185, 129, 0.8)" }}
              >
                cutting-edge technology
              </motion.span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16"
              variants={buttonVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 text-white font-semibold px-10 py-4 text-lg overflow-hidden group"
                  onClick={() => scrollToSection('#projects')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-0 group-hover:opacity-20"
                    initial={false}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Sparkles className="h-5 w-5" />
                    View Projects
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.4)",
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="relative border-2 border-gray-600 text-white hover:bg-gray-800/50 font-semibold px-10 py-4 text-lg group overflow-hidden"
                  onClick={() => scrollToSection('#contact')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Contact Me
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links with Enhanced Animations */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { 
                  icon: Github, 
                  href: 'https://github.com/Zakariast578', 
                  label: 'GitHub',
                  color: 'hover:text-gray-300 hover:bg-gray-700/50'
                },
                { 
                  icon: Linkedin, 
                  href: 'https://www.linkedin.com/in/zakaria-said-a948362a7', 
                  label: 'LinkedIn',
                  color: 'hover:text-blue-400 hover:bg-blue-500/20'
                },
                { 
                  icon: Twitter, 
                  href: 'https://x.com/zak1said', 
                  label: 'Twitter',
                  color: 'hover:text-sky-400 hover:bg-sky-500/20'
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm text-gray-400 transition-all duration-300 border border-gray-700/50 ${color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image with Advanced Animations */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ y: y1 }}
          >
            <div className="relative group">
              {/* Animated border rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "conic-gradient(from 0deg, #3b82f6, #10b981, #8b5cf6, #3b82f6)",
                    "conic-gradient(from 120deg, #3b82f6, #10b981, #8b5cf6, #3b82f6)",
                    "conic-gradient(from 240deg, #3b82f6, #10b981, #8b5cf6, #3b82f6)",
                    "conic-gradient(from 360deg, #3b82f6, #10b981, #8b5cf6, #3b82f6)",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ padding: '4px' }}
              >
                <div className="w-full h-full bg-slate-900 rounded-full" />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Profile Image */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={me}
                  alt="Zakaria Said - Full-Stack Developer and UI/UX Designer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                
                {/* Floating icons */}
                <motion.div
                  className="absolute top-6 right-6 p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Code2 className="h-6 w-6 text-blue-400" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-6 p-2 bg-green-500/20 backdrop-blur-sm rounded-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <Palette className="h-6 w-6 text-green-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="group flex flex-col items-center space-y-2 p-4 rounded-full hover:bg-gray-800/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to about section"
          >
            <span className="text-xs text-gray-400 font-medium tracking-wider uppercase group-hover:text-white transition-colors">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 border border-gray-600 rounded-full group-hover:border-blue-400 transition-colors"
            >
              <ArrowDown className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-8 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-blue-400/60 rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-12 hidden lg:block"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          <div className="w-3 h-3 bg-green-400/60 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-16 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          <div className="w-1 h-1 bg-purple-400/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}