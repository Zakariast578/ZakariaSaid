import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const counters = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Projects Pending', value: 2, suffix: '+' },
  { label: 'Happy Clients', value: 12, suffix: '+' },
];

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const elapsed = duration - remaining;
      const progress = elapsed / duration;

      setCount(Math.round(progress * value));

      if (remaining === 0) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, value, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <span id={`counter-${value}`} className="text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About Me – <span className="gradient-text">Passionate About Creating</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My mission is bridging functionality and aesthetics to create digital experiences that not only work flawlessly but also inspire and delight users.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Education</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  Computer Science Student
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">2021 – Present</span>
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Pursuing comprehensive knowledge in software engineering, algorithms, and modern development practices while building real-world applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800/50 border-gray-700/50 hover:border-green-500/50 transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Briefcase className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Professional Experience</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  Full-Stack Developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">2022 – Present</span>
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Specialized in creating end-to-end web applications, from intuitive user interfaces to robust backend systems, with a focus on performance and user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Animated Counters */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCounter value={counter.value} suffix={counter.suffix} />
              <p className="text-gray-300 font-medium mt-2">{counter.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}