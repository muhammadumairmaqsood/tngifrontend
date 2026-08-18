import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Lightbulb, Heart, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import pypHero from '@/assets/primary-years/kids-with-crayongs-close-up.webp';
import inquiryInfographic from '@/assets/inquiry.png';
import pypImage1 from '@/assets/primary-years/kids-with-crayons.webp';
import pypImage2 from '@/assets/primary-years/kid-crafting.webp';
import pypImage3 from '@/assets/primary-years/kids-taekwondo.jpeg';
import pypImage4 from '@/assets/primary-years/kids-brick-break.webp';
import pypImage5 from '@/assets/primary-years/kids-with-chart-papers.webp';
import ctaImage from '@/assets/primary-years/kids-running-with-olympic-rings-2.webp';
import missionImage from '@/assets/primary-years/kids-running-with-olympic-rings.webp';

const PrimaryYears = () => {

    const learnerProfile = [
        { icon: Lightbulb, title: 'Thinkers', description: 'Critical and creative problem solvers' },
        { icon: Users, title: 'Communicators', description: 'Express ideas confidently' },
        { icon: Heart, title: 'Caring', description: 'Show empathy and compassion' },
        { icon: Globe, title: 'Open-minded', description: 'Appreciate different perspectives' },
    ];

    const gradeLevels = [
        { level: 'PYP 1', age: 'Age 6–7', grade: 'Grade 1' },
        { level: 'PYP 2', age: 'Age 7–8', grade: 'Grade 2' },
        { level: 'PYP 3', age: 'Age 8–9', grade: 'Grade 3' },
        { level: 'PYP 4', age: 'Age 9–10', grade: 'Grade 4' },
    ];

    const advantages = [
        'International curriculum with local cultural values',
        'Strong academics in literacy, numeracy, and science',
        'Technology integration with coding, robotics, and digital literacy',
        'Arts, music, and sports for balanced growth',
        'A nurturing community where every child is valued',
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={pypHero}
                        alt="Primary Years Programme"
                        className="w-full h-full object-cover"
                    />
                    <div className="hero-overlay absolute inset-0" />
                </div>

                <div className="relative section-inner text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        {/* <div className="badge-crimson mb-6">IB PYP</div> */}
                        <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4">
                            Primary Years Programme
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Empowering young learners to become confident, independent thinkers and global citizens
                        </p>
                        <Button variant="hero" size="lg" asChild>
                            <Link to="/contact">Enroll Your Child</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Inquiry Based Learning */}
            <section className="section-standard bg-card">
                <div className="section-inner">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                                Inquiry Based Learning
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The inquiry-based learning approach encompasses several student-centered methodologies, including Problem-Based Learning (PBL), Project-Based Learning, and Design-Based Learning, all of which encourage critical thinking, creativity, and active exploration.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={inquiryInfographic}
                                alt="Inquiry Based Learning Infographic"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Primary Years Programme Philosophy */}
            <section className="section-standard bg-gradient-to-br from-background via-muted to-background">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                                Primary Years Programme
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    The Primary years' curriculum framework is based on the idea that students are agents of their
                                    own learning. The philosophy is to nurture and develop young students as caring, responsible and
                                    active participants in a lifelong learning journey.
                                </p>
                                <p>
                                    Inspired by the works of Goleman, Social Emotional Intelligence is at the core of our Philosophy.
                                    Think and Grow embodies the IB philosophy to foster student growth in all areas so they may become
                                    happy, well-adjusted individuals.
                                </p>
                                <p>
                                    With the preparation they receive in the early and PYP, we know that students
                                    are then ready to become the next architects of the emerging world.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={pypImage1}
                                alt="Primary Years Programme Students"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IB Mission */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={missionImage}
                        alt="IB Mission"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative section-inner text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
                            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
                                The IB Mission
                            </h2>
                            <p className="text-lg text-white/90 leading-relaxed">
                                The International Baccalaureate aims to develop inquiring, knowledgeable and caring young people
                                who help to create a better and more peaceful world through intercultural understanding and respect.
                            </p>
                            <p className="text-lg text-white/90 leading-relaxed mt-4">
                                To this end, the organization works with schools, governments and international organizations to
                                develop challenging programmes of international education and rigorous assessment. These programmes
                                encourage students across the world to become active, compassionate and lifelong learners who
                                understand that other people, with their differences, can also be right.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes PYP Unique */}
            <section className="section-standard bg-card">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                            What Makes the PYP Unique?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            The IB PYP is more than just academics – it is a student-centered, inquiry-based curriculum where
                            children learn by exploring real-world questions. Through this approach, students:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Develop problem-solving and research skills', icon: Lightbulb },
                            { title: 'Learn to be open-minded, caring, and globally aware', icon: Globe },
                            { title: 'Build confidence as independent learners', icon: Users },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="feature-card text-center"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <p className="text-foreground font-medium">{item.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grade Levels */}
            <section className="section-standard bg-muted">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
                            Grade Levels in the PYP
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {gradeLevels.map((level, index) => (
                            <motion.div
                                key={level.level}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-6 rounded-xl text-center shadow-lg"
                            >
                                <div className="text-3xl font-display font-bold text-primary mb-2">
                                    {level.level}
                                </div>
                                <div className="text-muted-foreground mb-1">{level.age}</div>
                                <div className="text-foreground font-semibold">{level.grade}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center text-muted-foreground mt-8 text-lg"
                    >
                        Our PYP provides a solid academic and emotional foundation for middle school and lifelong learning.
                    </motion.p>
                </div>
            </section>

            {/* How Children Learn */}
            <section className="section-standard bg-card">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
                            How Children Learn in the IB PYP?
                        </h2>
                        <a
                            href="https://www.ibo.org/programmes/primary-years-programme/how-the-pyp-works/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-2 font-medium"
                        >
                            Learn about the PYP framework <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <BookOpen className="w-12 h-12 text-primary mb-4" />
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                                Inquiry-Based Learning
                            </h3>
                            <p className="text-muted-foreground">
                                Students drive their learning through questions, exploration, and reflection.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="feature-card"
                        >
                            <Globe className="w-12 h-12 text-primary mb-4" />
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                                Transdisciplinary Themes
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Lessons connect across six IB themes: Who We Are, How the World Works, Where we are in Place and time, Sharing the Planet.
                            </p>
                            <a
                                href="https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/pyp-programme-brochure-en.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-2 text-sm font-semibold"
                            >
                                Learn More <ExternalLink className="w-3 h-3" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="feature-card"
                        >
                            <Users className="w-12 h-12 text-primary mb-4" />
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                                The IB Learner Profile
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                We develop students who are thinkers, communicators, risk-takers, and caring global citizens.
                            </p>
                            <a
                                href="https://www.ibo.org/benefits/learner-profile/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-2 text-sm font-semibold"
                            >
                                Learner Profile <ExternalLink className="w-3 h-3" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PYP Student Life Gallery */}
            <section className="section-standard bg-muted">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
                            Learning Beyond the Classroom
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Experience the vibrant learning environment where students explore, create, and grow together
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
                        >
                            <img
                                src={pypImage2}
                                alt="PYP Students Learning"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
                        >
                            <img
                                src={pypImage3}
                                alt="PYP Classroom Activities"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
                        >
                            <img
                                src={pypImage4}
                                alt="PYP Student Engagement"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
                        >
                            <img
                                src={pypImage5}
                                alt="PYP Learning Environment"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* YouTube Video Section */}
            <section className="section-standard bg-gradient-to-br from-background via-muted to-background">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
                            See the PYP in Action
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Watch how our students engage in inquiry-based learning
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/L4bDYhtI1VI"
                                title="Primary Years Programme at Think and Grow"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Think and Grow Advantage */}
            <section className="section-standard bg-card">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                            The Think and Grow Advantage
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 bg-accent p-6 rounded-xl"
                            >
                                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-foreground text-lg">{advantage}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-center text-muted-foreground mt-8 text-lg italic"
                    >
                        This TNGi approach ensures your child grows academically, socially, and emotionally.
                    </motion.p>
                </div>
            </section>

            {/* Why PYP CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={ctaImage}
                        alt="Why PYP"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative section-inner text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
                                Why the IB PYP is Right for Your Child?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                The IB Primary Years Programme empowers children to:
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                {[
                                    'Become confident, independent learners',
                                    'Build strong academic and social foundations',
                                    'Develop the skills needed to succeed in secondary school and beyond',
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                                    >
                                        <p className="text-white font-medium">{benefit}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <Button variant="heroOutline" size="lg" asChild>
                                <Link to="/contact">Schedule a Campus Visit</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrimaryYears;
