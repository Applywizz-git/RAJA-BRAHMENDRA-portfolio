import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certification = () => {
  const certifications = [
    {
      title: 'Python Programming Certification',
      issuer: 'Professional Certification',
      icon: '🐍',
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      icon: '☁️',
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      icon: '📊',
    },
    {
      title: 'IBM Data Analyst Professional Certificate',
      issuer: 'Coursera',
      icon: '💼',
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Coursera',
      icon: '📈',
    },
    {
      title: 'Excel Basics for Data Analysis',
      issuer: 'Coursera',
      icon: '📑',
    },
  ];

  return (
    <section
      id="certification"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-charcoal via-luxury-navy to-luxury-charcoal overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-luxury-bronze rounded-full blur-3xl"></div>
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
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glassmorphism p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <Award className="w-6 h-6 text-luxury-gold group-hover:animate-bounce-slow" />
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-luxury-cream mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-luxury-silver text-sm mb-4">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">View Certificate</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;