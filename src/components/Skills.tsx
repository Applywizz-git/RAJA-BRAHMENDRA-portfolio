// import { motion } from 'framer-motion';
// import { useEffect, useState, useRef } from 'react';
// import { useInView } from 'framer-motion';

// const CircularProgress = ({ skill, delay }: { skill: { name: string; percentage: number }; delay: number }) => {
//   const [progress, setProgress] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;

//     const timeout = setTimeout(() => {
//       setProgress(skill.percentage);
//     }, delay);

//     return () => clearTimeout(timeout);
//   }, [isInView, skill.percentage, delay]);

//   const circumference = 2 * Math.PI * 45;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.5 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: delay / 1000 }}
//       className="relative flex flex-col items-center"
//     >
//       <svg className="w-32 h-32 transform -rotate-90">
//         <circle
//           cx="64"
//           cy="64"
//           r="45"
//           stroke="currentColor"
//           strokeWidth="8"
//           fill="none"
//           className="text-luxury-navy/50"
//         />
//         <motion.circle
//           cx="64"
//           cy="64"
//           r="45"
//           stroke="currentColor"
//           strokeWidth="8"
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           className="text-luxury-gold"
//           initial={{ strokeDashoffset: circumference }}
//           animate={{ strokeDashoffset }}
//           transition={{ duration: 1.5, ease: 'easeOut' }}
//         />
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-2xl font-display font-bold text-luxury-cream">
//           {progress}%
//         </span>
//       </div>
//       <span className="mt-4 text-luxury-silver font-semibold">{skill.name}</span>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   const topSkills = [
//     { name: 'Python', percentage: 95 },
//     { name: 'SQL', percentage: 90 },
//     { name: 'Tableau', percentage: 88 },
//     { name: 'AWS', percentage: 85 },
//   ];

//   const skillCategories = [
//     {
//       title: 'Frontend',
//       skills: ['React', 'Tailwind', 'Plotly', 'Dash'],
//       icon: '🎨',
//     },
//     {
//       title: 'Backend',
//       skills: ['Python', 'Node.js', 'SQL'],
//       icon: '⚙️',
//     },
//     {
//       title: 'DevOps/Cloud',
//       skills: ['AWS S3', 'Redshift', 'Glue', 'Lambda', 'Azure', 'Docker', 'Kubernetes'],
//       icon: '☁️',
//     },
//     {
//       title: 'Data Tools/BI',
//       skills: ['Tableau', 'Power BI', 'AWS QuickSight', 'Jupyter', 'Excel'],
//       icon: '📊',
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-navy via-luxury-charcoal to-luxury-navy overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/3 right-10 w-72 h-72 bg-luxury-gold rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-luxury-bronze rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-center gradient-text mb-16"
//           data-aos="fade-up"
//         >
//           Skills & Expertise
//         </motion.h2>

//         <div className="mb-20">
//           <motion.h3
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="text-2xl md:text-3xl font-display font-bold text-luxury-cream text-center mb-12"
//           >
//             Core Competencies
//           </motion.h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
//             {topSkills.map((skill, index) => (
//               <CircularProgress key={skill.name} skill={skill} delay={index * 200} />
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="glassmorphism p-6 rounded-2xl hover:border-luxury-gold transition-all duration-300"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="text-4xl mb-4">{category.icon}</div>
//               <h3 className="text-xl md:text-2xl font-display font-bold text-luxury-cream mb-4">
//                 {category.title}
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, idx) => (
//                   <motion.span
//                     key={idx}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.3, delay: idx * 0.05 }}
//                     whileHover={{
//                       scale: 1.1,
//                       rotate: [0, -5, 5, -5, 0],
//                     }}
//                     className="px-3 py-1.5 text-sm bg-luxury-gold/10 text-luxury-gold rounded-lg border border-luxury-gold/30 hover:bg-luxury-gold/20 transition-colors duration-300 cursor-pointer"
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills




















import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const CircularProgress = ({ skill, delay }: { skill: { name: string; percentage: number }; delay: number }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setProgress(skill.percentage);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, skill.percentage, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="relative flex flex-col items-center"
    >
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-luxury-navy/50"
        />
        <motion.circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-luxury-gold"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-display font-bold text-luxury-cream">
          {progress}%
        </span>
      </div>
      <span className="mt-4 text-luxury-silver font-semibold">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const topSkills = [
    { name: 'Python', percentage: 95 },
    { name: 'SQL', percentage: 90 },
    { name: 'Tableau', percentage: 88 },
    { name: 'AWS', percentage: 85 },
  ];

  const skillCategories = [
    {
      title: 'AI & ML',
      skills: ['Predictive Modeling','Classification','YOLO','Convolutional Neural Networks','Long Short-Term Memory'],
      icon: '🎨',
    },
    {
      title: 'Data Manipulation',
      skills: ['Data Cleaning','Data Preprocessing','Data Transformation','Data Modeling','Data Validation','Data Augmentation'],
      icon: '⚙️',
    },
    {
      title: 'DevOps/Cloud',
      skills: ['AWS S3', 'Redshift', 'Glue', 'Lambda', 'Azure', 'Docker', 'Kubernetes'],
      icon: '☁️',
    },
    {
      title: 'Data Tools/BI',
      skills: ['Tableau', 'Power BI', 'AWS QuickSight', 'Jupyter', 'Excel'],
      icon: '📊',
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-navy via-luxury-charcoal to-luxury-navy overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-luxury-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-luxury-bronze rounded-full blur-3xl animate-pulse"></div>
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
          Skills & Expertise
        </motion.h2>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold text-luxury-cream text-center mb-12"
          >
            Core Competencies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {topSkills.map((skill, index) => (
              <CircularProgress key={skill.name} skill={skill} delay={index * 200} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glassmorphism p-6 rounded-2xl hover:border-luxury-gold transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-luxury-cream mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    className="px-3 py-1.5 text-sm bg-luxury-gold/10 text-luxury-gold rounded-lg border border-luxury-gold/30 hover:bg-luxury-gold/20 transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
