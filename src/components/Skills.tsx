import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  Settings,
  Star
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building beautiful, interactive user interfaces',
    skills: ['React','Astro', 'Next.js', 'TypeScript', 'Tailwind CSS','Bootstrap','Framer Motion', 'Redux'],
    progress: 95,
    color: 'blue',
  },
  {
    icon: Database,
    title: 'Backend Development', 
    description: 'Creating robust server-side applications',
    skills: ['Node.js', 'Django','Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'REST APIs'],
    progress: 85,
    color: 'green',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user experiences',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    progress: 76,
    color: 'purple',
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'Modern web standards and performance optimization',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Performance', 'SEO'],
    progress: 92,
    color: 'cyan',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications',
    skills: ['React Native', 'Flutter','Expo'],
    progress: 65,
    color: 'orange',
  },
  {
    icon: Settings,
    title: 'Tools & DevOps',
    description: 'Development workflow and deployment automation',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Testing'],
    progress: 88,
    color: 'pink',
  },
];

const colorVariants = {
  blue: 'from-blue-500 to-cyan-500',
  green: 'from-green-500 to-emerald-500',
  purple: 'from-purple-500 to-violet-500',
  cyan: 'from-cyan-500 to-teal-500',
  orange: 'from-orange-500 to-red-500',
  pink: 'from-pink-500 to-rose-500',
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning the full spectrum of modern web development and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const gradientClass = colorVariants[category.color as keyof typeof colorVariants];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${gradientClass} rounded-lg bg-opacity-20`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                        <div className="flex items-center mt-2">
                          <Progress 
                            value={category.progress} 
                            className="w-full h-2 bg-gray-700"
                          />
                          <span className="ml-3 text-sm font-medium text-gray-300">
                            {category.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Technical Excellence</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over 3 years of hands-on experience, I specialize in creating full-stack applications
                that combine cutting-edge technology with exceptional user experience design. My expertise
                spans from frontend frameworks to backend architectures, ensuring every project is built
                with scalability, performance, and maintainability in mind.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}