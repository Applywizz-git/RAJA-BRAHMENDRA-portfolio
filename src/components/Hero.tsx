// import { motion } from 'framer-motion';
// import { useEffect, useState, useRef } from 'react';
// import { Download, ArrowRight } from 'lucide-react';

// const Hero = () => {
//   const [currentWord, setCurrentWord] = useState(0);
//   const words = ['React', 'Node', 'TypeScript', 'Cloud'];

//   // Typing effect state
//   const [typedText, setTypedText] = useState('');
//   const [isTypingComplete, setIsTypingComplete] = useState(false);
//   const name = 'RAJA BRAHMENDRA';
//   const typingIndexRef = useRef(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Fixed typing effect - properly reset and complete
//   useEffect(() => {
//     // Reset typing when component mounts
//     setTypedText('');
//     setIsTypingComplete(false);
//     typingIndexRef.current = 0;

//     const typing = setInterval(() => {
//       if (typingIndexRef.current < name.length) {
//         setTypedText(name.substring(0, typingIndexRef.current + 1));
//         typingIndexRef.current += 1;
//       } else {
//         setIsTypingComplete(true);
//         clearInterval(typing);
//       }
//     }, 100); // typing speed

//     return () => clearInterval(typing);
//   }, [name]);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-navy via-luxury-charcoal to-luxury-navy"
//     >
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Typing Text Section */}
//             <motion.h1
//               className="text-2xl md:text-6xl lg:text-7xl font-display font-extrabold text-luxury-cream mb-6 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Hi,i'am
//               <br />
//               <span className="text-luxury-gold">
//                 {typedText}
//                 {!isTypingComplete && (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                     className="ml-1"
//                   >
//                     |
//                   </motion.span>
//                 )}
//               </span>
//             </motion.h1>

//             {/* Your existing animated heading */}
//             <motion.h1
//               className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-luxury-cream mb-6 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Building Scalable Web Apps with Modern{' '}
//               <motion.span
//                 key={currentWord}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="gradient-text inline-block"
//               >
//                 {words[currentWord]}
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               className="text-lg md:text-xl text-luxury-silver mb-8 leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               Detail-oriented Data Analyst skilled in Python, SQL, Cloud, and
//               Business Intelligence, with expertise in ETL, predictive modeling,
//               and building interactive dashboards.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <a
//                 href="#projects"
//                 className="group relative px-8 py-4 bg-luxury-gold text-luxury-navy font-semibold rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   View Projects
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-luxury-bronze transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
//               </a>

//               <a
//                 href="public/RESUME_RAJA BRAHMENDRA VEEREPALLI_DA 1.pdf"
//                 download
//                 className="group relative px-8 py-4 glassmorphism text-luxury-cream font-semibold rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Download Resume
//                   <Download className="group-hover:translate-y-1 transition-transform" />
//                 </span>
//               </a>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50, rotate: -10 }}
//             animate={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-72 h-72 md:w-96 md:h-96">
//               <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full blur-3xl opacity-30 animate-pulse"></div>
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                 className="absolute inset-0 border-2 border-luxury-gold/30 rounded-full"
//               ></motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 5 }}
//                 className="relative w-full h-full bg-gradient-to-br from-luxury-gold/20 to-luxury-bronze/20 rounded-max flex items-center justify-center overflow-hidden border-4 border-luxury-gold/50"
//               >
//                 <div className="w-full h-full bg-luxury-silver/10 flex items-center justify-center text-6xl font-display font-extrabold text-luxury-gold">
//                 <img src='/profileimage1.png'/>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-luxury-gold rounded-full"
//           ></motion.div>
//         </motion.div>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;




















import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Python', 'SQL', 'AWS Redshift', 'Modern ML Models'];

  // Typing effect state
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const name = 'RAJA BRAHMENDRA';
  const typingIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Fixed typing effect - properly reset and complete
  useEffect(() => {
    // Reset typing when component mounts
    setTypedText('');
    setIsTypingComplete(false);
    typingIndexRef.current = 0;

    const typing = setInterval(() => {
      if (typingIndexRef.current < name.length) {
        setTypedText(name.substring(0, typingIndexRef.current + 1));
        typingIndexRef.current += 1;
      } else {
        setIsTypingComplete(true);
        clearInterval(typing);
      }
    }, 100); // typing speed

    return () => clearInterval(typing);
  }, [name]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-navy via-luxury-charcoal to-luxury-navy"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Typing Text Section */}
            <motion.h1
              className="text-2xl md:text-3xl lg:text-3xl font-display font-extrabold text-luxury-cream mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi,i'am
              <br />
              <span className="text-luxury-gold">
                {typedText}
                {!isTypingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                )}
              </span>
            </motion.h1>

            {/* Your existing animated heading */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-luxury-cream mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building Intelligent Data Systems with{' '}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="gradient-text inline-block"
              >
                {words[currentWord]}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-luxury-silver mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Detail-oriented Data Analyst skilled in Python, SQL, Cloud, and
              Business Intelligence, with expertise in ETL, predictive modeling,
              and building interactive dashboards.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-luxury-gold text-luxury-navy font-semibold rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-luxury-bronze transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>

              <a
                href="RESUME_RAJA BRAHMENDRA VEEREPALLI_DA 1.pdf"
                download
                className="group relative px-8 py-4 glassmorphism text-luxury-cream font-semibold rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <Download className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-luxury-gold/30 rounded-full"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative w-full h-full bg-gradient-to-br from-luxury-gold/20 to-luxury-bronze/20 rounded-max flex items-center justify-center overflow-hidden border-4 border-luxury-gold/50"
              >
                <div className="w-full h-full bg-luxury-silver/10 flex items-center justify-center text-6xl font-display font-extrabold text-luxury-gold">
                <img src='/profileimage1.png'/>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-luxury-gold rounded-full"
          ></motion.div>
        </motion.div>
      </div> */}
    </section>
  );
};

export default Hero;
