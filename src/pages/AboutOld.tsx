import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import aboutImg from '@/assets/about/about-us.jpg';
import headerImg from '@/assets/about/header.jpg';
import valuesImg from '@/assets/about/values-ethos.png';

const About = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={headerImg}
                        alt="About Think and Grow"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="section-inner relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-outline mb-4">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-display mb-6">About Us</h1>
                    </motion.div>
                </div>
            </section>

            {/* Academic Philosophy Section */}
            <section className="bg-white pt-20">
                <div className="section-inner mb-20">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-semibold tracking-wider uppercase mb-4 block text-center">Academic Philosophy</span>
                            <h2 className="text-4xl md:text-6xl font-display mb-12 text-secondary text-center">Inquiry-Based Learning</h2>
                            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    At the heart of Think and Grow's academic philosophy is inquiry-based learning.
                                    We aspire to nurture inquiring young leaders and global citizens by providing a
                                    safe and supportive learning environment.
                                </p>
                                <div className="pull-quote py-6 my-10 bg-accent/20 px-8 rounded-r-lg border-l-8">
                                    "At Think and Grow it is not the learning of facts but training the mind to think."
                                </div>
                                <p>
                                    Our system focuses on cultivating life skills that will enable our students to deal
                                    effectively with the demands and challenges of life. Our curriculum offers a
                                    transdisciplinary, inquiry-based and student-centered education with responsible
                                    action at its core, enabling students to learn across and beyond traditional subject boundaries.
                                </p>
                                <p>
                                    In the Early Years and PYP, children are facilitated to become agents of their own
                                    learning in order to encourage understanding and foster a lifelong love of learning.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Full-Width Campus Map */}
                <motion.div
                    id="campus"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full relative group scroll-mt-20"
                >
                    <div className="w-full h-[70vh] overflow-hidden">
                        <img
                            src={aboutImg}
                            alt="Campus Map & Facilities"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-elevated border border-primary/20 max-w-xs hidden md:block">
                        <h3 className="font-display text-2xl text-secondary mb-2">Our Campus</h3>
                        <p className="text-muted-foreground">A 17-acre state-of-the-art facility designed for innovation and collaboration.</p>
                    </div>
                </motion.div>
            </section>

            {/* IB Learner Profile Highlight */}
            <section className="py-20 bg-accent/30">
                <div className="section-inner">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl md:text-2xl font-display text-secondary leading-relaxed italic">
                            "Through the programme of inquiry and by reflecting on their learning, our students will develop knowledge, conceptual understandings, skills and the attributes of a typical IB Learner profile with the emphasis on collaborative inquiry, to develop critical thinking, empathy, self-reflection and intellectual engagement."
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section-standard bg-secondary text-white overflow-hidden relative">
                <div className="section-inner relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <span className="text-primary-foreground/60 font-semibold tracking-wider uppercase mb-4 block">Our Vision</span>
                            <h2 className="text-4xl md:text-5xl font-display mb-8">A Social Enterprise with a Vision to Transform</h2>
                            <div className="space-y-6 text-xl text-primary-foreground/80 leading-relaxed font-light">
                                <p>
                                    Think and Grow is more than a school; it is an incubator of smart ideas,
                                    a place for innovation and collaboration.
                                </p>
                                <div className="text-white font-medium text-2xl border-l-4 border-primary pl-6 my-8">
                                    Education, Health and Society.
                                </div>
                                <p>
                                    A place to think and do, a place to work together.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-1"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 backdrop-blur-sm border border-white/10 text-center">
                                        <div>
                                            <div className="text-3xl font-display mb-2 text-primary">Think</div>
                                            <div className="text-sm uppercase tracking-widest opacity-60 font-semibold">Reflection</div>
                                        </div>
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 backdrop-blur-sm border border-white/10 text-center">
                                        <div>
                                            <div className="text-3xl font-display mb-2 text-primary">Grow</div>
                                            <div className="text-sm uppercase tracking-widest opacity-60 font-semibold">Development</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 backdrop-blur-sm border border-white/10 text-center">
                                        <div>
                                            <div className="text-3xl font-display mb-2 text-primary">Innnovate</div>
                                            <div className="text-sm uppercase tracking-widest opacity-60 font-semibold">Creativity</div>
                                        </div>
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 backdrop-blur-sm border border-white/10 text-center">
                                        <div>
                                            <div className="text-3xl font-display mb-2 text-primary">Collaborate</div>
                                            <div className="text-sm uppercase tracking-widest opacity-60 font-semibold">Partnership</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values & Ethos Section */}
            <section className="section-standard bg-warm-cream">
                <div className="section-inner text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Values and Ethos</span>
                        <h2 className="text-4xl md:text-5xl font-display mb-8 text-secondary">
                            Let's grow together with values that inspire.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our values represent who we are and who we aspire to be. They celebrate the
                            beliefs and perspectives that unite us as a school. These are a set of principles
                            that guide Think and Grow and the people who choose to work and study here.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-floating"
                    >
                        <img
                            src={valuesImg}
                            alt="Think and Grow Values"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
