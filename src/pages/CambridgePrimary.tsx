import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Globe,
  GraduationCap,
  MessageSquare,
  Puzzle,
  Rocket,
  Target,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import heroImage from '@/assets/cambridge-page-images/kids-studying-landscape.webp';
import introImage from '@/assets/cambridge-page-images/kids-scribbling.webp';
import classroomImage from '@/assets/cambridge-page-images/kids-studying.webp';
import ctaImage from '@/assets/cambridge-page-images/school-play-area.webp';
import poolImage from '@/assets/cambridge-page-images/swimming-pool.webp';
import playAreaImage from '@/assets/cambridge-page-images/play-area.webp';
import signImage from '@/assets/cambridge-page-images/school-sign-boards.webp';

const CambridgePrimary = () => {
  const keyBenefits = [
    { icon: BookOpen, title: 'Strong foundation in English, Mathematics, and Science' },
    { icon: ClipboardCheck, title: 'Clear learning objectives with measurable outcomes' },
    { icon: Puzzle, title: 'Focus on critical thinking, problem-solving, and communication' },
    { icon: Globe, title: 'Internationally benchmarked curriculum' },
    { icon: GraduationCap, title: 'Smooth progression to Cambridge IGCSE in later years' },
  ];

  const gradesOffered = [
    {
      level: 'Cambridge Primary',
      grade: 'Grade 1',
      description:
        'Starting with Grades 1 and 2, our Cambridge stream is thoughtfully designed to provide a strong academic foundation, skill-based learning, and international benchmarks-while staying rooted in our values.',
    },
    {
      level: 'Cambridge Primary',
      grade: 'Grade 2',
      description:
        'Starting with Grades 1 and 2, our Cambridge stream is thoughtfully designed to provide a strong academic foundation, skill-based learning, and international benchmarks-while staying rooted in our values.',
    },
  ];

  const teachingApproach = [
    { icon: Compass, title: 'Concept based learning' },
    { icon: Users, title: 'Skill based learning' },
    { icon: Target, title: 'Continuous assessments aligned with Cambridge standards' },
    { icon: Award, title: 'Integration of sports, arts, and life skills' },
    { icon: Rocket, title: 'Emphasis on confidence, independence, and curiosity' },
  ];

  const globalAims = [
    'Build strong academic fundamentals early',
    'Prepare students for international qualifications',
    'Offer flexibility and choice to families',
    'Maintain global standards with local understanding',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Cambridge Primary Programme" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative section-inner text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* <div className="badge-outline mb-6">Cambridge International Pathway: Primary to IGCSE</div> */}
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4">
              Cambridge Primary Programme
            </h1>
            {/*<p className="text-xl text-white/90 mb-8">*/}
            {/*  Think and Grow International also offers the Cambridge Curriculum, expanding our global education pathways and*/}
            {/*  offering families greater choice from the early years.*/}
            {/*</p>*/}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/admissions">View Admissions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-standard bg-card">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                Why Cambridge at Think and Grow International?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Starting with Kindergarten (Age 4.5), Grade 1 (Age 5.5+), our Cambridge stream is carefully designed to provide a strong academic foundation, promote skill-based learning, and align with international benchmarks — all while staying true to our core values of diligence, integrity, and excellence.
                </p>
                <p>
                  The Cambridge Curriculum is one of the world’s most respected international education systems, known for its
                  clarity, academic depth, and structured progression.
                </p>
                <p>
                  At Think and Grow International, we combine Cambridge’s academic strength with our nurturing environment, modern
                  campus, and focus on the whole child.
                </p>
                <p className="font-semibold text-foreground">Key benefits include:</p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3 rounded-2xl border border-border/60 bg-white p-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-foreground leading-snug">{benefit.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={introImage} alt="Cambridge learning at Think and Grow" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Junior School Section */}
      <section className="section-standard bg-warm-cream/30">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">Junior School – Cambridge Primary (Kindergarten - Grade 1)</h2>
            <p className="text-lg text-muted-foreground">Building strong foundations through Kindergarten - Stage 1</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="feature-card p-8 rounded-3xl bg-white"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                              <div>
                                  <div className="badge-crimson mb-3 inline-block">Cambridge Primary</div>
                                  <h3 className="font-display text-3xl text-secondary">Kindergarten (Age 4.5)</h3>
                              </div>
                              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <ArrowRight className="w-6 h-6 text-primary" />
                              </div>
                        </div>
                          <p className="text-muted-foreground text-lg font-medium mb-2">→ Early Years Foundation Year</p>
                          <p className="text-muted-foreground leading-relaxed">Strong focus on developing literacy and numeracy skills through play-based learning.</p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="feature-card p-8 rounded-3xl bg-white"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="badge-crimson mb-3 inline-block">Cambridge Primary</div>
                  <h3 className="font-display text-3xl text-secondary">Grade 1 (Age 5.5+)</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground text-lg font-medium mb-2">→ Cambridge Primary Stage 1</p>
              <p className="text-muted-foreground leading-relaxed">Focuses on structured English, Math & Science foundational skills.</p>
            </motion.div>

          {/*  <motion.div*/}
          {/*    initial={{ opacity: 0, y: 30 }}*/}
          {/*    whileInView={{ opacity: 1, y: 0 }}*/}
          {/*    viewport={{ once: true }}*/}
          {/*    transition={{ delay: 0.1 }}*/}
          {/*    className="feature-card p-8 rounded-3xl bg-white"*/}
          {/*  >*/}
          {/*    <div className="flex items-start justify-between gap-4 mb-4">*/}
          {/*      <div>*/}
          {/*        <div className="badge-crimson mb-3 inline-block">Cambridge Primary</div>*/}
          {/*        <h3 className="font-display text-3xl text-secondary">Grade 2 (Age 6.5+)</h3>*/}
          {/*      </div>*/}
          {/*      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">*/}
          {/*        <ArrowRight className="w-6 h-6 text-primary" />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <p className="text-muted-foreground text-lg font-medium mb-2">→ Cambridge Primary Stage 2</p>*/}
          {/*    <p className="text-muted-foreground leading-relaxed">Advancing core subject knowledge and promoting logical thinking.</p>*/}
          {/*  </motion.div>*/}
          </div>
        </div>
      </section>

      {/* Academic & Skills Focus */}
      <section className="section-standard bg-card">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1"
            >
              <img src={classroomImage} alt="Classroom learning environment" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">Academic & Skills Focus</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Structured English, Math & Science', description: 'Strong focus on core academic subjects.' },
                  { title: 'Reading fluency and writing skills', description: 'Developing essential communication abilities.' },
                  { title: 'Logical thinking and problem-solving', description: 'Encouraging analytical minds.' },
                  { title: 'Confidence and independence', description: 'Nurturing self-assured learners.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold leading-snug">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="font-display text-3xl font-medium text-foreground mb-4">Balanced Learning</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-lg">Engaging co-curricular activities</p>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-lg">Active participation in sports</p>
                </div>
              </div>
              <p className="mt-8 text-muted-foreground leading-relaxed italic">
                At Think and Grow International, we foster not only academic achievement but also physical, creative, and social growth — helping children become confident, capable, and well-rounded learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section-standard bg-muted">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">Our Teaching Approach</h2>
            <p className="text-lg text-muted-foreground">At Think and Grow International, Cambridge education goes beyond textbooks.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingApproach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-2xl border border-border/50 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-foreground font-semibold text-lg">{item.title}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our classrooms are designed to be engaging, safe, and supporting both academic and emotional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Future Focus */}
      <section className="section-standard bg-gradient-to-br from-background via-muted to-background">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              A Global Start, A Confident Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By introducing Cambridge at the primary level, we aim to:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalAims.map((aim, index) => (
              <motion.div
                key={aim}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card text-center rounded-3xl bg-white p-8"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {(index === 0 && <BookOpen className="w-7 h-7 text-primary" />) ||
                    (index === 1 && <GraduationCap className="w-7 h-7 text-primary" />) ||
                    (index === 2 && <Users className="w-7 h-7 text-primary" />) ||
                    (index === 3 && <Globe className="w-7 h-7 text-primary" />)}
                </div>
                <div className="text-foreground font-semibold leading-snug">{aim}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="section-standard bg-white">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">Campus Highlights</h2>
            <p className="text-lg text-muted-foreground">Modern facilities designed to support the Cambridge curriculum and student wellbeing.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: poolImage, title: 'Swimming Pool', desc: 'Promoting physical excellence and water safety.' },
              { img: playAreaImage, title: 'Active Play Zones', desc: 'Secure spaces for social growth and physical activity.' },
              { img: signImage, title: 'World-Class Environment', desc: 'A campus that reflects our commitment to excellence.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-soft"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <h4 className="font-display text-xl font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="Admissions at Think and Grow International" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative section-inner text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="badge-outline mb-6 inline-flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Admissions Open – Kindergarten - Grade 1
            </div>
                      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Admissions Open – Kindergarten - Grade 1</h2>
            <div className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
                          <p className="mb-6">Admissions are now open for Kindergarten (Age 4.5), and Grade 1 (Age 5.5+).</p>
              <p>
                Students enrolled in these grades will progress seamlessly through the Cambridge pathway, advancing to the next levels as they grow in age and learning, ultimately leading to the Cambridge IGCSE. Our programme ensures a smooth and continuous transition, maintaining academic excellence and well-rounded development at every stage.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/admissions">View Admissions Process</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default CambridgePrimary;

