import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroCampus from '@/assets/hero-campus.jpeg';

export const AdmissionsCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="TNG Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative section-inner text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
        >
          Begin Your Child's Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/80 mb-10"
        >
          Applications now open for 2026-2027
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Campus Visit</Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/admissions">Start Application</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
