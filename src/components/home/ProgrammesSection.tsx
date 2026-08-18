import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import earlyYearsImage from '@/assets/early-years/kids-on-a-table-studying-drawing.jpeg';
import primaryYearsImage from '@/assets/primary-years/kids-with-crayongs-close-up.webp';
import cambridgePrimaryImage from '@/assets/cambridge-page-images/kids-studying-landscape.webp';

// Import circular logos
import tngEyLogo from '@/assets/cards/ib-circle.png';
import ibLogo from '@/assets/cards/ib-circle.png';
import igcseLogo from '@/assets/cards/igcse.png';

const programmes = [
  {
    title: 'Kindergarten',
    ageRange: 'Ages 4.5+',
    description: 'Activity-based, Cambridge Phonics, and Handwriting',
    image: earlyYearsImage,
    logo: igcseLogo,
            link: '/programmes/early-years',
   /* link: 'Pages/Kindergarten'*/
    cta: 'Discover Kindergarten',
  },
  //{
  //  title: 'Cambridge Primary',
  //  ageRange: 'Grade 1',
  //    description: 'Strong foundations in English, Mathematics, Science, and other key subjects',
  //  image: primaryYearsImage,
  //  logo: igcseLogo,
  //  link: '/programmes/primary-years',
  //  cta: 'Discover Cambridge Primary',
  //},
  {
    title: 'Cambridge Primary',
    ageRange: 'Grade 1',
    description: 'Strong foundations in English, Mathematics, Science, and other key subjects',
    image: cambridgePrimaryImage,
    logo: igcseLogo,
    link: '/programmes/cambridge-primary',
    cta: 'Discover Cambridge Primary',
  },
];

export const ProgrammesSection = () => {
  return (
    <section className="section-standard bg-neutral-pearl">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4"
          >
            Our Programmes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Nurturing curious minds from ages 4.5+
          </motion.p>
        </div>

        {/* Programme Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {programmes.map((programme, index) => (
            <motion.div
              key={programme.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative pt-3 pr-3"
            >
              <Link to={programme.link} className="programme-card block h-full">
                {/* Background Image */}
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="programme-card-overlay absolute inset-0" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  {/* Badge */}
                  <span className="badge-crimson mb-4 self-start">
                    {programme.ageRange}
                  </span>

                  <h3 className="font-display text-3xl font-semibold mb-2">
                    {programme.title}
                  </h3>

                  <p className="text-white/80 mb-4">
                    {programme.description}
                  </p>

                  <span className="inline-flex items-center gap-2 font-semibold text-white group-hover:gap-3 transition-all">
                    {programme.cta}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>

              {/* Circular logo badge that pops outside the card */}
              <div className="absolute top-0 right-0 z-30 pointer-events-none">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-white p-1.5 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.22)] ring-4 ring-white/90 border border-primary/10 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                  <img
                    src={programme.logo}
                    alt={`${programme.title} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
