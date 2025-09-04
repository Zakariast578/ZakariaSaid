import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setLoading(false);
      alert('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setLoading(false);
      alert('Failed to send message. Please try again.');
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/zakaria-said-a948362a7',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      href: 'https://github.com/Zakariast578',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Twitter,
      href: 'https://x.com/zak1said',
      label: 'Twitter',
      color: 'hover:text-sky-400',
    },
  ];

  // Framer Motion variants for inputs/buttons
  const inputVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5 },
    }),
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/20 to-black/50" aria-label="Contact Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Premium Availability Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px 0 rgba(59,130,246,0.25)' }}
              className="relative"
            >
              <Card
                className="overflow-hidden border-0 bg-gradient-to-r from-blue-700/60 via-green-600/40 to-indigo-700/60 shadow-lg"
                style={{
                  fontFamily: 'Inter, Poppins, sans-serif',
                }}
                aria-label="Available for Work"
              >
                {/* Animated Gradient Border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{
                    zIndex: 0,
                    boxShadow: '0 0 32px 4px rgba(59,130,246,0.25)',
                    animation: 'pulseGlow 2.5s infinite alternate',
                  }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle
                    className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
                    style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                  >
                    Available for Work
                  </CardTitle>
                  <CardDescription
                    className="text-gray-200 text-lg sm:text-xl font-medium mb-2"
                    aria-label="I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can bring your ideas to life!"
                  >
                    I'm currently available for freelance projects and full-time opportunities. <span className="bg-gradient-to-r from-blue-400 via-green-400 to-indigo-400 bg-clip-text text-transparent font-semibold">Let's discuss how we can bring your ideas to life!</span>
                  </CardDescription>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md animate-pulse flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span aria-label="Open to opportunities">
                      Open to opportunities
                    </span>
                  </div>
                </CardHeader>
              </Card>
              {/* Gradient shimmer effect */}
              <style>
                {`
                  @keyframes pulseGlow {
                    0% { box-shadow: 0 0 32px 4px rgba(59,130,246,0.25); }
                    100% { box-shadow: 0 0 48px 8px rgba(16,185,129,0.35); }
                  }
                `}
              </style>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@zakariasaid.dev' },
                { icon: MapPin, label: 'Location', value: 'Available Worldwide' },
                { icon: Phone, label: 'Response Time', value: 'Within 24 hours' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <item.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 transition-all duration-300 ${color} hover:bg-gray-700/50`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-800/50 border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and I'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Form">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={inputVariant}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-gray-300">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-900/50 border-gray-600 focus:border-blue-400 text-white"
                          placeholder="Your full name"
                          aria-label="Your full name"
                        />
                      </motion.div>
                      <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={inputVariant}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-900/50 border-gray-600 focus:border-blue-400 text-white"
                          placeholder="your.email@example.com"
                          aria-label="Your email address"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      custom={2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={inputVariant}
                      className="space-y-2"
                    >
                      <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-900/50 border-gray-600 focus:border-blue-400 text-white"
                        placeholder="What's this about?"
                        aria-label="Subject"
                      />
                    </motion.div>
                    
                    <motion.div
                      custom={3}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={inputVariant}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-gray-900/50 border-gray-600 focus:border-blue-400 text-white resize-none"
                        placeholder="Tell me about your project or idea..."
                        aria-label="Your message"
                      />
                    </motion.div>

                    <motion.div
                      custom={4}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={inputVariant}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 glow-effect transition-all duration-300"
                        aria-label="Send Message"
                      >
                        {loading ? (
                          <span className="animate-spin mr-2">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                          </span>
                        ) : (
                          <Send className="h-4 w-4 mr-2" />
                        )}
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
