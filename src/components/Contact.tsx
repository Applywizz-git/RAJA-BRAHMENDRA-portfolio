import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Globe, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowSuccess(false);
      setShowConfetti(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 510-709-9168',
      href: 'tel:+15107099168',
      color: 'text-green-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rajabrahmendrabuz@gmail.com',
      href: 'mailto:rajabrahmendrabuz@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/raja-brahmendra-veerepalli',
      color: 'text-blue-500',
    },
    // {
    //   icon: Globe,
    //   label: 'Portfolio',
    //   value: 'Portfolio Website',
    //   href: '#',
    //   color: 'text-purple-400',
    // },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/rajabrahmendra1405',
      color: 'text-gray-400',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-luxury-charcoal via-luxury-navy to-luxury-charcoal overflow-hidden"
    >
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0,
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: 'linear',
              }}
              className="absolute w-3 h-3 bg-luxury-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-luxury-bronze rounded-full blur-3xl"></div>
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
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-aos="fade-right"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-luxury-cream mb-6">
              Let's Connect
            </h3>
            <p className="text-luxury-silver text-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 glassmorphism p-4 rounded-xl group hover:border-luxury-gold transition-all duration-300"
                >
                  <div className="p-3 bg-luxury-gold/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-luxury-silver text-sm">{info.label}</p>
                    <p className="text-luxury-cream font-semibold group-hover:text-luxury-gold transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="peer w-full bg-luxury-navy/50 text-luxury-cream border-2 border-luxury-gold/30 rounded-lg px-4 py-3 focus:border-luxury-gold outline-none transition-colors duration-300"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-3 bg-luxury-navy px-2 text-luxury-gold text-sm font-semibold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-luxury-silver peer-focus:-top-3 peer-focus:text-sm peer-focus:text-luxury-gold transition-all duration-300"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="peer w-full bg-luxury-navy/50 text-luxury-cream border-2 border-luxury-gold/30 rounded-lg px-4 py-3 focus:border-luxury-gold outline-none transition-colors duration-300"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-3 bg-luxury-navy px-2 text-luxury-gold text-sm font-semibold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-luxury-silver peer-focus:-top-3 peer-focus:text-sm peer-focus:text-luxury-gold transition-all duration-300"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="peer w-full bg-luxury-navy/50 text-luxury-cream border-2 border-luxury-gold/30 rounded-lg px-4 py-3 focus:border-luxury-gold outline-none transition-colors duration-300 resize-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-3 bg-luxury-navy px-2 text-luxury-gold text-sm font-semibold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-luxury-silver peer-focus:-top-3 peer-focus:text-sm peer-focus:text-luxury-gold transition-all duration-300"
                  >
                    Your Message
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-luxury-gold text-luxury-navy font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-luxury-bronze transition-colors duration-300"
                >
                  Send Message
                  <motion.div
                    animate={showSuccess ? { rotate: 360, x: 100 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.button>
              </div>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-semibold"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;