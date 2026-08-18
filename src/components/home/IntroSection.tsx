import { motion } from 'framer-motion';
import introImage from '@/assets/school-portrait.jpg';

export const IntroSection = () => {
  return (
    <section className="section-standard bg-card">
      <div className="section-inner">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight"
            >
              Where Excellence Becomes an Experience
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8"
            >
              <p>
              {/*Think and Grow International is an authorized IB Primary Years Programme (PYP) World School, where inquiry, creativity, and innovation guide every learning experience. Spread across 17 acres in Lahore, our campus is designed for exploration - featuring Pakistan's first indoor riding arena, robotics labs, swimming pool, and vibrant outdoor learning spaces. Here, children develop strong academic foundations, emotional intelligence, and the confidence to become compassionate global citizens.*/}
              {/*Think and Grow International offers families the choice of globally recognised programmes, including the IB Primary Years Programme (PYP) and the Cambridge International Pathway-Primary to IGCSE.*/}
                 Think and Grow International offers globally recognised education through the Cambridge Primary Programme, providing a seamless learning journey  leading to IGCSE/O Levels/A Levels. The programme nurtures confident, responsible, reflective, innovative, and engaged learners, preparing them for success at leading universities and beyond.
                          </p>
              <p>
                Located on a 17-acre campus in Lahore, our school provides exceptional learning spaces - from robotics labs to Pakistan's first indoor riding arena - where students grow academically, creatively, and with confidence.
                          </p>
                         
  
            </motion.div>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-pastel-sage p-6 rounded-xl"
            >
              <p className="pull-quote">
                "When you have had a taste of excellence, you cannot go back to mediocrity."
              </p>
              <footer className="mt-3 text-sm font-semibold text-foreground">
                -  Maximillian
              </footer>
            </motion.blockquote>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={introImage}
                alt="Children engaged in outdoor learning"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
