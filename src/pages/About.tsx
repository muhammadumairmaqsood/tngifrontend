import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import headerImg from '@/assets/about/header.jpg';
import campusImg from '@/assets/about/about-us.jpg';
import valuesImg from '@/assets/about/values-ethos.png';
import {
  Award,
  Beaker,
  BookOpen,
  Code2,
  Cpu,
  Dumbbell,
  Globe,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Leaf,
  Lightbulb,
  Microscope,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TreePine,
  Users,
  Waves,
  Wrench,
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import swimmingImg from '@/assets/facilities/gallery-swimming.webp';
import computerLabImg from '@/assets/facilities/computer-lab.webp';
import libraryImg from '@/assets/facilities/library.webp';
import playgroundImg from '@/assets/facilities/outdoor-playground.webp';
import ridingImg from '@/assets/facilities/outdoor-riding.webp';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
} as const;

const About = () => {
  const values = [
    { icon: Target, title: 'Discipline', description: 'Consistent effort, discipline, and a growth mindset.' },
    { icon: ShieldCheck, title: 'Integrity', description: 'Honesty, responsibility, and ethical decision-making.' },
    { icon: Award, title: 'Excellence', description: 'High standards in learning, character, and conduct.' },
  ];

  const pathways = [
    //{
    //  title: 'Cambridge Primary Programme',
    //  icon: GraduationCap,
    //  points: [
    //    'Structured, concept-based learning',
    //    'Strong academic foundations',
    //    'Understanding over memorisation',
    //    'Clear progression and mastery',
    //  ],
    //},
    //{
    //  title: 'International Baccalaureate (IB)',
    //  icon: Globe,
    //  points: [
    //    'Inquiry-driven and interdisciplinary learning',
    //    'Critical thinking and global awareness',
    //    'Intellectual curiosity and reflection',
    //    'Learner profile and agency',
    //  ],
    //},
  ];

  const stemGrid = [
    { icon: Beaker, title: 'Science', description: 'Experimentation, observation, and scientific reasoning.' },
    { icon: Code2, title: 'Technology', description: 'Digital literacy, computing, and applied problem-solving.' },
    { icon: Wrench, title: 'Engineering', description: 'Design thinking, building, and iteration.' },
    { icon: Cpu, title: 'Mathematics', description: 'Numeracy, logic, patterns, and analytical thinking.' },
  ];

  const facilities = [
    { icon: Waves, title: 'Swimming Pool' },
    { icon: Microscope, title: 'Science Lab' },
    { icon: Laptop, title: 'IT Lab' },
    { icon: Cpu, title: 'Robotics Lab' },
    { icon: Sparkles, title: 'Outdoor Riding Arena' },
    { icon: Sparkles, title: "Pakistan’s First Indoor Riding Arena" },
    { icon: Palette, title: 'Arts Room' },
  ];

  const galleryImages = [
    { src: ridingImg, alt: 'Riding Arena', span: 'md:col-span-2' },
    { src: swimmingImg, alt: 'Swimming Pool' },
    { src: libraryImg, alt: 'Library' },
    { src: computerLabImg, alt: 'Computer Lab' },
    { src: playgroundImg, alt: 'Playground' },
  ];

  const programmesAtAGlance = [
    {
      category: 'Academics',
      items: [
        'Cambridge Primary leading to IGCSE/O-level/A-level',
        'Concept Based Learning',
        'STEM',
      ],
    },
    {
      category: 'Sports Programme',
      items: ['Indoor Riding Arena', 'Outdoor Riding Arena', 'Swimming', 'Taekwondo'],
    },
    {
      category: 'Future Skills Programme',
      items: [
        'Robotics',
        'Diploma of French Language Studies (DELF) in collaboration with Alliance Francaise',
        'Piano (Collaboration with School of Music)',
      ],
    },
    {
      category: 'Life-Skills Programme',
      items: [
        'Kitchen Garden',
        'Young Chef Programme (Table Manners short course included)',
        'Eco-bamboo Programme (In-house Bamboo Workshop)',
      ],
    },
    {
      category: 'Extra-Curricular Programme',
      items: [
        'Excursion/Field Trips (accompanied with Army Grade Security Personnel)',
        'Expert-Talk Sessions',
          'Annual Play',
          'Sports Day',
      ],
    },
  ];

  return (
      <Layout>
    
      {/* 1) Hero Section */}
      <section className="relative h-[55vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={headerImg} alt="Think and Grow International" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="section-inner relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="badge-outline mb-4">Our Story</span>
            <h1 className="text-4xl md:text-7xl font-display mb-5">Think and Grow International</h1>
            <p className="text-lg md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Rigorous, ethical, future-focused education- built on character, crafted with care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2) Our Story Section */}
      <section id="our-story" className="bg-white pt-20 scroll-mt-20">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <span className="text-primary font-semibold tracking-wider uppercase mb-4 block text-center">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-display mb-10 text-secondary text-center">
                Intention, Values, and a Global Outlook
              </h2>

              <div className="space-y-7 text-xl text-muted-foreground leading-relaxed">
                <p>
                  At Think and Grow International (TNGI), our journey is guided by a clear purpose and a strong moral
                                  compass. Rooted in the values of <span className="text-secondary font-semibold">Discipline</span>,{' '}
                  <span className="text-secondary font-semibold">Integrity</span>, and{' '}
                  <span className="text-secondary font-semibold">Excellence</span>, we are committed to providing an
                  education that is rigorous, ethical, and future-focused.
                </p>

                <div className="pull-quote py-6 my-8 bg-accent/20 px-8 rounded-r-lg border-l-8 border-primary/60">
                  Inspired by the precision, quality, and finesse associated with Swiss educational traditions, we
                  craft learning with care and intention- because true excellence lies in consistency, depth, and
                  character.
                </div>

                <p>
                  Every aspect of our system- from curriculum design to classroom practice- reflects our belief that
                  students thrive when high expectations meet strong values, supportive relationships, and expert
                  teaching.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  {values.map(({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="rounded-2xl border bg-white shadow-sm p-6 text-left hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mb-4">
                        <Icon className="text-secondary" />
                      </div>
                      <div className="text-2xl font-display text-secondary mb-2">{title}</div>
                      <p className="text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3) Academic Excellence Section */}
      {/*<section className="py-20 bg-warm-cream">*/}
      {/*  <div className="section-inner">*/}
      {/*    <div className="max-w-5xl mx-auto">*/}
      {/*      <motion.div {...fadeUp} className="text-center mb-12">*/}
      {/*        <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Academics</span>*/}
      {/*        <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">A Commitment to Academic Excellence</h2>*/}
      {/*        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">*/}
      {/*          */}{/*As a school offering both the Cambridge International Programme and the International Baccalaureate (IB),*/}
      {/*          */}{/*we provide globally respected pathways that prepare students for future academic success.*/}
      {/*        </p>*/}
      {/*      </motion.div>*/}

      {/*      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">*/}
      {/*        {pathways.map(({ title, icon: Icon, points }) => (*/}
      {/*          <motion.div*/}
      {/*            key={title}*/}
      {/*            initial={{ opacity: 0, y: 20 }}*/}
      {/*            whileInView={{ opacity: 1, y: 0 }}*/}
      {/*            viewport={{ once: true }}*/}
      {/*            transition={{ duration: 0.7 }}*/}
      {/*            className="rounded-3xl bg-white border shadow-sm p-8"*/}
      {/*          >*/}
      {/*            <div className="flex items-center gap-4 mb-5">*/}
      {/*              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">*/}
      {/*                <Icon className="text-secondary" />*/}
      {/*              </div>*/}
      {/*              <h3 className="text-2xl md:text-3xl font-display text-secondary">{title}</h3>*/}
      {/*            </div>*/}
      {/*            <ul className="space-y-3 text-muted-foreground text-lg">*/}
      {/*              {points.map((p) => (*/}
      {/*                <li key={p} className="flex gap-3 items-start">*/}
      {/*                  <span className="mt-2 h-2 w-2 rounded-full bg-primary/80 flex-shrink-0" />*/}
      {/*                  <span>{p}</span>*/}
      {/*                </li>*/}
      {/*              ))}*/}
      {/*            </ul>*/}
      {/*          </motion.div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

          {/* 4) Expert Educators Section */}

      {/*<section className="py-20 bg-white">*/}
      {/*  <div className="section-inner">*/}
      {/*    <div className="max-w-5xl mx-auto">*/}
      {/*      <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">*/}
      {/*        <div>*/}
      {/*          <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Educators</span>*/}
      {/*          <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">*/}
      {/*            Completeness Through Expert Educators*/}
      {/*          </h2>*/}
      {/*          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">*/}
      {/*            <p>*/}
      {/*              At Think and Grow International, teaching excellence is non-negotiable. All our homeroom teachers*/}
      {/*              are IB-trained, bringing depth, consistency, and international best practices into every classroom-*/}
      {/*              across both IB and Cambridge streams.*/}
      {/*            </p>*/}
      {/*            <p>*/}
      {/*              This unified teaching philosophy ensures that students experience a coherent, child-centred learning*/}
      {/*              journey, regardless of the programme they are enrolled in. Our educators focus not only on academic*/}
      {/*              outcomes but also on nurturing independence, confidence, and a lifelong love for learning.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}

      {/*        <div className="rounded-3xl bg-accent/20 border border-primary/15 p-8">*/}
      {/*          <div className="flex items-center gap-3 mb-6">*/}
      {/*            <Users className="text-secondary" />*/}
      {/*            <h3 className="text-2xl font-display text-secondary">What sets our team apart</h3>*/}
      {/*          </div>*/}
      {/*          <ul className="space-y-4 text-muted-foreground text-lg">*/}
      {/*            <li className="flex gap-3 items-start">*/}
      {/*              <HeartHandshake className="mt-1 text-secondary flex-shrink-0" />*/}
      {/*              <span>IB trained leadership with international school experience</span>*/}
      {/*            </li>*/}
      {/*            <li className="flex gap-3 items-start">*/}
      {/*              <BookOpen className="mt-1 text-secondary flex-shrink-0" />*/}
      {/*              <span>All teachers are IB trained -  CAT1, CAT2, CAT3</span>*/}
      {/*            </li>*/}
      {/*            <li className="flex gap-3 items-start">*/}
      {/*              <Dumbbell className="mt-1 text-secondary flex-shrink-0" />*/}
      {/*              <span>Sports coaches are IB trained, delivering skill-based physical activities through inquiry</span>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </div>*/}
      {/*      </motion.div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* 5) STEM-Focused Learning Section */}
      <section className="py-20 bg-accent/30">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">STEM</span>
              <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">STEM-Focused, Future-Ready Learning</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                As a Cambridge school, we place strong emphasis on science, technology,
                engineering, and mathematics- integrated meaningfully with language, humanities, arts, and physical
                development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stemGrid.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-white border shadow-sm p-6 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/60 border flex items-center justify-center mb-4">
                    <Icon className="text-secondary" />
                  </div>
                  <div className="text-2xl font-display text-secondary mb-2">{title}</div>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6) Values, Ethics, and Character Section */}
      <section className="section-standard bg-warm-cream">
        <div className="section-inner text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-14">
            <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Values</span>
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-secondary">Values, Ethics, and Character</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While academic achievement is important, we believe that education without values is incomplete. Ethics,
              respect, responsibility, and empathy are woven into the fabric of school life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-floating"
          >
            <img src={valuesImg} alt="Think and Grow International values" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* 7) Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Sustainability</span>
              <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">🌿 Our Commitment to Sustainability</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Sustainability is not an initiative at Think and Grow — it is a principle that guides our decisions and
                defines our campus culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-accent/20 border border-primary/15 p-8 md:p-10 mb-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past few years, our leadership has contributed to large-scale afforestation efforts, planting
                over{' '}
                <span className="text-secondary font-semibold">one million trees</span> as part of a broader commitment
                to environmental renewal. On our own campus, we have created a thriving{' '}
                <span className="text-secondary font-semibold">micro forest</span> — a living ecosystem that breathes
                life into our surroundings and serves as a daily reminder that growth must be nurtured with care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: TreePine,
                  title: 'Afforestation',
                  description:
                    'Over one million trees planted as part of a large-scale leadership commitment to environmental renewal.',
                },
                {
                  icon: Leaf,
                  title: 'Self-Sufficiency',
                  description:
                    'Feed for our horses is grown on our own land, reinforcing responsible resource management and respect for agriculture.',
                },
                {
                  icon: Sun,
                  title: 'Solar Energy',
                  description:
                    'Solar panels power key areas of our campus, reducing our footprint and modelling renewable energy practices for students.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-white border shadow-sm p-6 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mb-4">
                    <Icon className="text-secondary" />
                  </div>
                  <div className="text-2xl font-display text-secondary mb-2">{title}</div>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-8 rounded-2xl border-l-8 border-primary/60 bg-accent/20 px-8 py-6 text-lg text-muted-foreground leading-relaxed"
            >
              These efforts are not symbolic. They are intentional. They ensure that every child at Think and Grow learns
              that <span className="text-secondary font-semibold">excellence and responsibility must go hand in hand</span>.
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8) Campus & Facilities Section */}
      <section id="campus-facilities" className="py-20 bg-white scroll-mt-20">
        <div className="section-inner">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Campus</span>
              <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">Campus & Facilities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Learning is strengthened by space, design, and opportunity. Our campus is built to support academic
                rigour, creativity, wellbeing, and future-ready skills.
              </p>
            </motion.div>

            {/*<motion.div*/}
            {/*  initial={{ opacity: 0 }}*/}
            {/*  whileInView={{ opacity: 1 }}*/}
            {/*  viewport={{ once: true }}*/}
            {/*  transition={{ duration: 0.9 }}*/}
            {/*  className="w-full relative overflow-hidden rounded-3xl border shadow-sm mb-10"*/}
            {/*>*/}
            {/*  <div className="h-[380px] md:h-[460px]">*/}
            {/*    <img src={campusImg} alt="Think and Grow International campus" className="w-full h-full object-cover" />*/}
            {/*  </div>*/}
            {/*  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />*/}
            {/*  <div className="absolute bottom-8 left-8 right-8">*/}
            {/*    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-5 py-2 mb-3">*/}
            {/*      <Sparkles className="w-4 h-4" />*/}
            {/*      <span className="text-sm font-semibold tracking-wide">17-acre learning environment</span>*/}
            {/*    </div>*/}
            {/*    <div className="text-white text-2xl md:text-4xl font-display leading-tight max-w-3xl">*/}
            {/*      Space designed for innovation, collaboration, and excellence.*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</motion.div>*/}

            {/* Campus Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md group ${img.span || ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map(({ icon: Icon, title }) => {
                const isIndoorArena = title === "Pakistan’s First Indoor Riding Arena";
                return (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={[
                      'rounded-3xl border bg-white shadow-sm p-6 flex items-start gap-4',
                      isIndoorArena ? 'md:col-span-2 lg:col-span-2 border-primary/40 bg-accent/20' : '',
                    ].join(' ')}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-secondary" />
                    </div>
                    <div>
                      {isIndoorArena && (
                        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary mb-2">
                          Featured
                        </div>
                      )}
                      <div className="text-xl md:text-2xl font-display text-secondary">{title}</div>
                      {isIndoorArena && (
                        <p className="text-muted-foreground mt-2 leading-relaxed">
                          A landmark facility supporting skill, confidence, and discipline through year-round riding.
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-14 rounded-3xl border bg-warm-cream p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-secondary" />
                <h3 className="text-2xl md:text-3xl font-display text-secondary">Programmes at a glance</h3>
              </div>

              <div className="rounded-2xl bg-white/70 border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[240px]">Category</TableHead>
                      <TableHead>Highlights</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {programmesAtAGlance.map((row) => (
                      <TableRow key={row.category}>
                        <TableCell className="font-semibold text-secondary">{row.category}</TableCell>
                        <TableCell className="text-muted-foreground">
                          <ul className="space-y-1">
                            {row.items.map((item) => (
                              <li key={item} className="flex gap-3 items-start">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary/70 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8) Closing Statement Section */}
      <section className="section-standard bg-secondary text-white overflow-hidden relative">
        <div className="section-inner relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-primary-foreground/60 font-semibold tracking-wider uppercase mb-4 block">
                Our Story Continues
              </span>
              <h2 className="text-4xl md:text-5xl font-display mb-8">A School Where Excellence Is Thoughtfully Cultivated</h2>

              <div className="space-y-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-light">
                <p>
                  Our story is one of intention- an unwavering commitment to excellence in education, integrity in action,
                  and diligence in nurturing the next generation of global citizens.
                </p>
                <div className="text-white font-medium text-xl md:text-2xl border-l-4 border-primary pl-6 my-8 text-left max-w-3xl mx-auto">
                  Think and Grow International is more than a school. It is a place where minds are shaped with care,
                  values are lived daily, and excellence is thoughtfully cultivated.
                </div>
                <p>
                  We invite families to join a learning community where high standards, strong character, and future-ready
                  skills come together- every day, in every classroom.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Target className="w-4 h-4" />
                  <span>Diligence</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Integrity</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Award className="w-4 h-4" />
                  <span>Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

