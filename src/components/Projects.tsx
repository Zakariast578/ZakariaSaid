import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import project1 from '../assets/project.png';
import project2 from '../assets/project1.png';
import project3 from '../assets/project2.png';
import project4 from '../assets/portfolio3.jpg';


const projects = [
  {
    title: '4SMART',
    description: 'Comprehensive IoT platform for smart agriculture with real-time monitoring, automated irrigation systems, and crop analytics dashboard.',
    image: project1,
    technologies: ['React', 'Node.js', 'MongoDB', 'IoT', 'TypeScript', 'Express'],
    status: 'Completed',
    liveUrl: 'https://zakariast578.github.io/4-smart/',
    githubUrl: 'https://github.com/Zakariast578/4-smart',
  },
  {
    title: 'Portfolio Website',
    description: 'Premium personal portfolio showcasing modern design principles, advanced animations, and responsive architecture.',
    image: project2,
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'],
    status: 'Completed',
    liveUrl: 'https://zakariast578.github.io/portfolio/',
    githubUrl: 'https://github.com/Zakariast578/portfolio',
  },
  {
    title: 'Somali TalentLink App',
    description: 'Revolutionary job and gig platform connecting talented professionals with opportunities across Somalia and the diaspora.',
    image: project4,
    technologies: ['React Native', 'Supabase', 'Tailwind', 'Stripe'],
    status: 'Pending',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Somali ElectroHub',
    description: 'First-ever blogging and community platform dedicated to electricity, electronics, and renewable energy in Somalia. A space where professionals, students, and enthusiasts connect, share knowledge, and showcase projects.',
    image: project3, // replace with your imported image
    technologies: ['React', 'Node.js', 'Tailwind', 'MongoDB'],
    status: 'In Development',
    liveUrl: '#',
    githubUrl: '#',
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work, showcasing technical expertise and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={`${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400 border-green-500/50'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                      } backdrop-blur-sm`}
                    >
                      {project.status === 'Completed' ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <Clock className="h-3 w-3 mr-1" />
                      )}
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 hover:border-gray-500"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}