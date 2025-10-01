import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const projects = [
    {
      title: 'Railway Track Crack Detection System',
      description: [
        'YOLOv5 pipeline → 92% detection accuracy',
        'SQL schema for storing detection results',
        'Dashboards with Matplotlib & Seaborn → 60% reduced inspection time',
        'Preprocessing & evaluation for reliable performance',
      ],
      image: '/railway.png',
      tags: ['YOLOv5', 'SQL', 'Python', 'Matplotlib'],
    },
    {
      title: 'Sales Data ETL Pipeline',
      description: [
        'Automated ETL (CSV → AWS Redshift) → 80% less manual reporting',
        'Optimized SQL views for real-time BI reports',
        'Airflow orchestration with 95% accuracy',
        'Transformation, cleansing, validation pipelines',
      ],
      image: '/sales.png',
      tags: ['AWS Redshift', 'Airflow', 'SQL', 'ETL'],
    },
    {
      title: 'Loan Eligibility Prediction',
      description: [
        'CNN-LSTM pipeline for predicting loan eligibility',
        'Preprocessing: missing values, scaling, encoding',
        'Optimized training/validation/testing pipelines → 30% faster development',
        'Dashboards in Tableau + Matplotlib for insights',
      ],
      image: '/prediction.png',
      tags: ['CNN', 'LSTM', 'Tableau', 'Python'],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-charcoal via-luxury-navy to-luxury-charcoal overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-bronze rounded-full blur-3xl"></div>
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
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="zoom-in"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="project-swiper pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="!w-full md:!w-[600px] lg:!w-[700px]"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glassmorphism rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 p-3 glassmorphism rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-luxury-gold" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-luxury-cream mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                      {project.title}
                    </h3>

                    <ul className="space-y-2 mb-6">
                      {project.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-luxury-silver"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-luxury-gold flex-shrink-0"></span>
                          <span className="text-sm md:text-base">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-xs md:text-sm bg-luxury-gold/20 text-luxury-gold rounded-full border border-luxury-gold/30 hover:bg-luxury-gold/30 transition-colors duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;