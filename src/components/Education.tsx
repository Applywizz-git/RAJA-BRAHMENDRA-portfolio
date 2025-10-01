import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Masters in Computer Science with Data Science',
      institution: 'State University',
      location: 'San Marcos, TX',
      period: 'Aug 2025 – Pursuing',
      icon: '🎓',
    },
    {
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      period: 'Jul 2021 – Jun 2025',
      icon: '🎓',
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-navy via-luxury-charcoal to-luxury-navy overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-luxury-bronze rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-center gradient-text mb-16"
          data-aos="fade-up"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glassmorphism p-8 rounded-2xl group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-luxury-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-luxury-gold/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <div className="text-4xl group-hover:animate-bounce-slow">
                    {edu.icon}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-luxury-cream mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {edu.degree}
                </h3>

                <p className="text-lg text-luxury-gold font-semibold mb-4">
                  {edu.institution}
                </p>

                <div className="space-y-2 text-luxury-silver">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-luxury-gold/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;