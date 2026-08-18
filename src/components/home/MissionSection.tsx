import { motion } from 'framer-motion';

export const MissionSection = () => {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2">
        {/* Mission - Deep Forest */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary text-secondary-foreground p-12 md:p-16 lg:p-20"
        >
          <span className="text-secondary-foreground/70 font-semibold text-sm uppercase tracking-widest mb-6 block">
            Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-relaxed">
            Developing Inquiring Young Leaders
          </h2>
          <p className="text-secondary-foreground/80 text-lg leading-relaxed">
            The School aspires to develop inquiring young leaders, critical thinkers and 
            global citizens by providing them an engaging and challenging environment. 
            Together they will create a progressive, caring and tolerant society and become 
            pillars of a moderate, inclusive and a peaceful tomorrow.
          </p>
        </motion.div>

        {/* Philosophy - Blush Rose */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-pastel-rose p-12 md:p-16 lg:p-20"
        >
          <span className="text-muted-foreground font-semibold text-sm uppercase tracking-widest mb-6 block">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-relaxed text-foreground">
            Fostering Growth in All Areas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
          At Think and Grow, our philosophy is to support students’ academic, social, and emotional growth, nurturing confident, balanced individuals. Strong foundations in the Early and Primary Years prepare our learners to think critically, adapt confidently, and become future contributors to a changing world
          </p>
        </motion.div>
      </div>
    </section>
  );
};
