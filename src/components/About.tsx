import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Database, Cloud, BarChart3, Code2 } from 'lucide-react';

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-extrabold gradient-text mb-2">
        {count}+
      </div>
      <div className="text-luxury-silver text-sm md:text-base">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const skills = [
    { icon: Database, label: 'SQL & ETL', color: 'text-blue-400' },
    { icon: Cloud, label: 'Cloud & AWS', color: 'text-green-400' },
    { icon: BarChart3, label: 'Data Viz', color: 'text-yellow-400' },
    { icon: Code2, label: 'Python & ML', color: 'text-purple-400' },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-navy via-luxury-charcoal to-luxury-navy overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-center gradient-text mb-16"
          data-aos="fade-up"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-luxury-silver text-lg leading-relaxed"
            data-aos="fade-right"
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-luxury-gold first-letter:mr-2 first-letter:float-left">
              Data Analyst with strong skills in Python (Pandas, NumPy,
              Scikit-Learn), SQL, ETL workflows (PostgreSQL, AWS Redshift,
              Airflow), and cloud/big data tools. Experienced in data
              validation, predictive modeling (CNN/LSTM), and business
              intelligence solutions (Tableau, Power BI, AWS QuickSight).
            </p>
            <p>
              Passionate about improving reporting accuracy, operational
              efficiency, and enabling data-driven decisions. Strong technical
              foundation with ability to communicate insights clearly to
              stakeholders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
            data-aos="fade-left"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glassmorphism p-6 rounded-xl text-center group cursor-pointer hover:border-luxury-gold transition-all duration-300"
              >
                <skill.icon
                  className={`${skill.color} w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-luxury-cream font-semibold">
                  {skill.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism p-8 md:p-12 rounded-2xl"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Counter target={3} label="Projects" />
            {/* <Counter target={} label="" /> */}
            <Counter target={100} label="Satisfaction" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;