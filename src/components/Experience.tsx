import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'Vilindha Technologies Pvt Ltd',
      location: 'Hyderabad',
      period: 'May 2025 – Aug 2025',
      responsibilities: [
        'Built ETL workflows in Python & SQL (PostgreSQL, AWS Redshift)',
        'Optimized SQL queries/views for smoother reporting',
        'Created Tableau & Power BI dashboards',
        'Data cleaning (Pandas, NumPy)',
        'Historical sales trend analysis',
        'Collaborated with team on KPIs/reporting needs',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-navy via-luxury-charcoal to-luxury-navy overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-bronze rounded-full blur-3xl"></div>
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
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-luxury-gold to-luxury-bronze"></div>

              <div className="mb-12 ml-8 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism p-8 rounded-2xl border-l-4 border-luxury-gold hover:border-luxury-bronze transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-luxury-gold/20 rounded-lg">
                      <Briefcase className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-luxury-cream mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-luxury-gold font-semibold mb-3">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-luxury-silver">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-luxury-silver"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-luxury-gold flex-shrink-0"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;