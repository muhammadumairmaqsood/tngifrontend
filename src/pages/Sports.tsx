import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Award, ShieldCheck, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Images — all from Sports assets folder
import heroImg from '@/assets/Sports/kids-running-with-olympic-ring.JPG';
import horseRiding from '@/assets/Sports/horse-riding.jpeg';
import kidRidingHorse from '@/assets/Sports/kid-riding-horse.jpeg';
import swimmingImg from '@/assets/gallery-swimming.webp';
import outdoorImg from '@/assets/gallery-outdoor.jpg';
import taekwondoImg from '@/assets/gallery-taekwondo.jpg';

import { Link } from 'react-router-dom';

const Sports = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Sports at Think and Grow"
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
                        <span className="badge-crimson mb-4">Athletics &amp; Beyond</span>
                        <h1 className="text-5xl md:text-7xl font-display mb-6">Sports &amp; Activities</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
                            Nurturing resilience, discipline, and excellence through world-class athletic programs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Riding School Section */}
            <section className="section-standard bg-white overflow-hidden">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-0.5 bg-primary" />
                                <span className="text-primary font-semibold tracking-widest uppercase text-sm">Equestrian Excellence</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display text-secondary mb-8">Riding School</h2>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Our program is designed to provide a safe and structured environment where students can develop essential riding skills, build confidence, and foster a deep appreciation for horses.
                                </p>
                                <p>
                                    Through a combination of hands-on lessons, theoretical instruction, and practical experience, students will learn the fundamentals of horse care, grooming, tacking, and riding techniques. Our experienced instructors prioritize safety and provide personalized guidance, ensuring that each student progresses at their own pace.
                                </p>
                            </div>

                        </motion.div>

                        {/* Two riding images stacked/overlapping */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-floating">
                                <img src={horseRiding} alt="Horse Riding at Think and Grow" className="w-full h-full object-cover" />
                            </div>
                            {/* Second riding image as floating card */}
                            <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-elevated border-4 border-white hidden md:block">
                                <img src={kidRidingHorse} alt="Kid riding horse" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-elevated hidden md:block max-w-[200px]">
                                <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold text-secondary mb-1 text-sm">Safety First</h4>
                                <p className="text-xs text-muted-foreground leading-snug">Pakistan's first indoor riding arena ensuring year-round training in a safe environment.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Swimming School Section Intro */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={outdoorImg}
                        alt="Swimming School"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative section-inner text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-primary" />
                            <span className="text-white font-semibold tracking-widest uppercase text-sm">Aquatic Leadership</span>
                            <div className="w-12 h-0.5 bg-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display mb-8 text-white">Swimming School</h2>
                        <p className="text-lg text-white/90 leading-relaxed italic">
                            "Rooted in the principles of the International Baccalaureate (IB) framework, our program is designed to provide students with more than just physical skills – it nurtures personal growth, teamwork, and a lifelong appreciation for water safety and well-being."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Swimming School Details Section */}
            <section className="section-standard bg-white">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-floating aspect-video relative w-full"
                        >
                            <img src={swimmingImg} alt="Swimming School" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-secondary/10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                        >
                            <p>
                                Our Swimming Program seamlessly integrates with the IB philosophy, fostering inquiry-based learning and encouraging students to explore water-related concepts through hands-on experiences.
                            </p>
                            <p>
                                By combining academic excellence with physical development, our program prepares students to be confident and competent swimmers while nurturing their intellectual curiosity and personal character.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-semibold text-secondary">National Standards</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Heart className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-semibold text-secondary">Character Building</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={taekwondoImg}
                        alt="Join our sports programs"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative section-inner text-white text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <Star className="w-12 h-12 mx-auto mb-6 text-white/50" />
                        <h2 className="text-4xl md:text-5xl font-display mb-8">Ready to Start the Journey?</h2>
                        <p className="text-xl mb-10 opacity-90">
                            Join our elite sports programs and discover the potential within your child.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="hero" size="lg" asChild>
                                <Link to="/contact">Register for Sports</Link>
                            </Button>
                            <Button variant="heroOutline" size="lg" asChild>
                                <a href="/contact">Enquire Today</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Sports;
