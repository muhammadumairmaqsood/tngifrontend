import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Palette, Music, BookOpen, ArrowRight, Baby, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import earlyYearsHero from '@/assets/early-years/kids-on-a-table-studying-drawing.jpeg';
import introImage from '@/assets/early-years/kids-studying.webp';
import introImage2 from '@/assets/early-years/kids-playing-in-classroom.webp';
import ctaImage from '@/assets/early-years/kids-on-a-cart.jpeg';
import learnersImage from '@/assets/early-years/kids-n-teachers-discussion-circle.jpeg';

const EarlyYears = () => {

    const developmentalAreas = [
        { icon: Heart, title: 'Social-Emotional', description: 'Building confidence, empathy, and self-regulation' },
        { icon: Sparkles, title: 'Creative Expression', description: 'Art, music, and imaginative play' },
        { icon: Users, title: 'Communication', description: 'Language development and self-expression' },
        { icon: Globe, title: 'Cultural Awareness', description: 'Appreciating diversity and global perspectives' },
    ];

    const ageLevels = [
        { level: 'Early Years', age: 'Ages 4.5–6', description: 'EY' },
    ];

    const playBasedActivities = [
        'Sensory exploration and discovery',
        'Language development through stories, drama, and early literacy activities',
        'Music, movement, and creative arts',
        'Outdoor learning and nature exploration',
        'Building and construction play',
        'Strong foundations in Numeracy and Literacy',
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={earlyYearsHero}
                        alt="Early Years Programme"
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
                        {/* <div className="badge-crimson mb-6">Ages 4.5+</div> */}
                        <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4">
                            Kindergarten
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Where learning comes alive through engaging activities, discovery, and strong foundations in academic excellence
                        </p>
                        <Button variant="hero" size="lg" asChild>
                            <Link to="/contact">Schedule a Visit</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Play-Based Learning Philosophy */}
            <section className="section-standard bg-card">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                                Building Strong Foundations
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    {/*At Think and Grow, our Early Years Programme is built on the understanding that play*/}
                                    {/*is the most powerful vehicle for learning in young children. Through carefully designed*/}
                                    {/*play experiences, children develop critical thinking, problem-solving skills, and social*/}
                                    {/*competence.*/}
                                    Our Kindergarten programme provides a nurturing and engaging environment where activity-based learning builds strong foundations in literacy, numeracy, communication, and social development. By fostering curiosity, confidence, and a love of learning, we prepare children for a smooth transition into the Cambridge Primary Programme and future academic success.
                                </p>
                                {/*<p>*/}
                                {/*    We follow the IB Primary Years Programme framework, adapted for our youngest learners,*/}
                                {/*    where children are viewed as intelligent, resourceful, and creative individuals who learn*/}
                                {/*    and grow at their own pace.*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    Our educators act as partners and guides, creating joyful and meaningful learning*/}
                                {/*    environments that nurture the whole child- socially, emotionally, physically, and cognitively.*/}
                                {/*</p>*/}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={introImage}
                                alt="Early Years Learning"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Developmental Areas */}
            <section className="section-standard bg-gradient-to-br from-background via-muted to-background">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                            Well-Rounded Development
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We nurture every aspect of your child's growth, ensuring they develop into confident,
                            caring, and capable young learners
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {developmentalAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="feature-card text-center"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <area.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                    {area.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Early Years Special */}
            <section className="section-standard bg-card">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1"
                        >
                            <img
                                src={introImage2}
                                alt="Early Years Activities"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                                A Day at Kindergarten
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                                <p>
                                    Each day at Kindergarten is thoughtfully designed to balance structured
                                    learning with child-led exploration. Children engage in:
                                </p>
                                <ul className="space-y-3">
                                    {playBasedActivities.map((activity, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground">{activity}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cambridge Learner Profile for Young Children */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={learnersImage}
                        alt="IB Learners"
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
                            <Baby className="w-16 h-16 mx-auto mb-6 text-white" />
                            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
                                Cambridge Learner Attributes
                            </h2>
                            <p className="text-lg text-white/90 leading-relaxed">
                                {/*Even at this young age, we introduce the IB Learner Profile attributes in developmentally*/}
                                {/*appropriate ways. Through play and daily interactions, children begin to understand what it*/}
                                {/*means to be:*/}
                                Cambridge learner attributes encourage students to become confident, responsible, reflective, innovative and engaged -helping them to be ready for the world
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mt-8">
                                {['Confident', 'Responsible', 'Reflective', 'Innovative', 'Engaged'].map((trait, index) => (
                                    <motion.div
                                        key={trait}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                                    >
                                        <p className="text-white font-semibold">{trait}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
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
                            Why Choose Think and Grow?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                icon: Heart,
                                title: 'Nurturing Environment',
                                description: 'Safe, supportive spaces where every child feels valued and loved'
                            },
                            {
                                icon: Sparkles,
                                title: 'Experienced Educators',
                                description: 'Trained in child centered teaching practices aligned with the Cambridge Primary framework'
                            },
                            {
                                icon: Palette,
                                title: 'World-Class Facilities',
                                description: '17-acre campus with dedicated early years learning spaces'
                            },
                            {
                                icon: Users,
                                title: 'Purpose-Built Learning Environment',
                                description: 'Horseriding arenas, swimming pool, science and discovery rooms'
                            },
                            {
                                icon: Music,
                                title: 'Rich Co-Curricular',
                                description: 'Horseriding, Swimming, Piano, French'
                            },
                            {
                                icon: BookOpen,
                                title: 'Smooth Transition',
                                description: 'Seamless progression to our Cambridge Primary Programme'
                            },
                        ].map((advantage, index) => (
                            <motion.div
                                key={advantage.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 bg-accent p-6 rounded-xl"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <advantage.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-muted-foreground">{advantage.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={ctaImage}
                        alt="Join our community"
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
                                Give Your Child the Best Start
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Join us for a campus tour and see how  we create strong foundations for lifelong learning.
                                
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="heroOutline" size="lg" asChild>
                                    <Link to="/contact">Schedule a Campus Visit</Link>
                                </Button>
                                <Button variant="hero" size="lg" asChild>
                                    <Link to="/programmes/primary-years">Explore Cambridge Primary</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EarlyYears;
