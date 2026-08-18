import { motion } from 'framer-motion';
import { BookOpen, Trophy, Sparkles, Handshake } from 'lucide-react';

// Table data structure matching the original layout
const tableData = {
  columns: [
    {
      title: 'ACADEMICS',
      icon: BookOpen,
      items: [
        'Cambridge Primary',
        'Concept based Learning',
        'Project based Learning'
      ]
    },
    {
      title: 'SPORTS SCHOOL',
      icon: Trophy,
      items: [
        'Indoor/Outdoor Horse Riding Arena',
        'Swimming',
        'Taekwondo'
      ]
    },
    {
      title: 'CO CURRICULAR',
      icon: Sparkles,
      items: [
        'Robotics/Coding',
        'French',
        'Piano'
      ]
    },
    {
      title: 'COLLABORATION',
      icon: Handshake,
      items: [
        'Shah Shamyl Alam Polo Academy',
        'Alliance Francaise',
        'School of Music & Arts'
      ]
    }
  ]
};

export const FeaturesSection = () => {
  return (
    <section className="section-standard bg-gradient-to-br from-background via-muted to-background">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4"
          >
            The TNGI Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A well-rounded approach to education that nurtures every aspect of your child
          </motion.p>
        </div>

        {/* Table Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Modern table with solid background */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-primary">
            {/* Content */}
            <div className="relative">
              {/* Column Headers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
                {tableData.columns.map((column, index) => (
                  <motion.div
                    key={column.title}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 text-center border-r border-white/10 last:border-r-0 md:odd:border-r lg:border-r hover:bg-white/5 transition-colors duration-300"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                      <column.icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Title */}
                    <h3 className="font-display text-lg md:text-xl font-semibold text-white tracking-wide">
                      {column.title}
                    </h3>
                  </motion.div>
                ))}
              </div>

              {/* Table Rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {tableData.columns.map((column, colIndex) => (
                  <div
                    key={`col-${colIndex}`}
                    className="border-r border-white/10 last:border-r-0 md:odd:border-r lg:border-r"
                  >
                    {column.items.map((item, rowIndex) => (
                      <motion.div
                        key={`${colIndex}-${rowIndex}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (colIndex * 0.1) + (rowIndex * 0.05) }}
                        className="p-6 border-b border-white/10 last:border-b-0 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-center min-h-[60px]">
                          <p className="text-white/90 text-center text-sm md:text-base leading-relaxed group-hover:text-white group-hover:scale-105 transition-all duration-300">
                            {item}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-1 bg-primary rounded-full mt-4 mx-auto max-w-md opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
};
