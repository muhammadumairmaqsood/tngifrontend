import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import {
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
    ArrowRight,
    Heart,
    Activity,
    Microscope,
    Lightbulb,
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

import earlyYearsImg from '@/assets/early-years/kids-on-a-table-studying-drawing.jpeg';
import primaryYearsImg from '@/assets/primary-years/kids-with-crayongs-close-up.webp';
import inquiryImg from '@/assets/primary-year/Primary Years Programmes Image.jpg';
import sportsImg from '@/assets/gallery-riding.jpg';
import cambridgeImg from '@/assets/cambridge-page-images/kids-studying-landscape.webp';

// Import circular logos
import tngEyLogo from '@/assets/cards/ib-circle.png';
import ibLogo from '@/assets/cards/ib-circle.png';
import igcseLogo from '@/assets/cards/igcse.png';

const programmes = [
    {
        title: 'Kindergarten',
        ageRange: 'Ages 4.5+',
        description: 'A play-based inquiry approach that nurtures wonder and discovery in our youngest learners.',
        image: earlyYearsImg,
        logo: igcseLogo,
        href: '/programmes/early-years',
        /*href: '/pages/Kindergarten',*/
        icon: Heart,
        color: 'bg-primary'
    },
    //{
    //    title: 'Early Years Programme',
    //    ageRange: 'Ages 4.5+',
    //    description: 'A play-based inquiry approach that nurtures wonder and discovery in our youngest learners.',
    //    image: earlyYearsImg,
    //    logo: tngEyLogo,
    //    href: '/programmes/early-years',
    //    /*href: '/pages/Kindergarten',*/
    //    icon: Heart,
    //    color: 'bg-primary'
    //},
    //{
    //    title: 'Primary Years Programme',
    //    ageRange: 'PYP 1 to PYP 4',
    //    description: 'An international framework focused on developing inquiring, knowledgeable, and caring young people.',
    //    image: primaryYearsImg,
    //    logo: ibLogo,
    //    href: '/programmes/primary-years',
    //    icon: GraduationCap,
    //    color: 'bg-secondary'
    //},
    {
        title: 'Cambridge Primary',
        ageRange: 'Kindergarten - Grade 1',
        description: 'A globally respected Cambridge pathway that builds strong academic foundations from the early years.',
        image: cambridgeImg,
        logo: igcseLogo,
        href: '/programmes/cambridge-primary',
        icon: Globe,
        color: 'bg-blue-600'
    },
    //{
    //    title: 'Programme of Inquiry',
    //    ageRange: 'IB Framework',
    //    description: 'Our transdisciplinary curriculum that enables students to learn across and beyond traditional subjects.',
    //    image: inquiryImg,
    //    href: '/programmes/inquiry',
    //    icon: Microscope,
    //    color: 'bg-[#8B0000]'
    //},
    {
        title: 'Sports & Activities',
        ageRange: 'Beyond the Classroom',
        description: 'A rich co-curricular programme including horse riding, swimming, taekwondo, and robotics.',
        image: sportsImg,
        href: '/programmes/sports',
        icon: Activity,
        color: 'bg-primary/90'
    }
];

const Programmes = () => {
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
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={primaryYearsImg}
                        alt="Programmes at Think and Grow"
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
                        <span className="badge-outline mb-4">Academic Excellence</span>
                        <h1 className="text-5xl md:text-7xl font-display mb-4">Our Programmes</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Global learning pathways designed to nurture inquiring minds and future leaders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programmes Grid */}
            <section className="section-standard bg-warm-cream/30">
                <div className="section-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {programmes.map((prog, index) => (
                            <motion.div
                                key={prog.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative pt-3 pr-3"
                            >
                                <Link to={prog.href} className="block">
                                    <Card className="overflow-hidden border-none shadow-card hover:shadow-elevated transition-all duration-500 rounded-3xl h-full flex flex-col">
                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={prog.image}
                                                alt={prog.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className={`absolute top-6 left-6 ${prog.color} text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2`}>
                                                <prog.icon className="w-4 h-4" />
                                                {prog.ageRange}
                                            </div>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <h3 className="text-3xl font-display text-secondary mb-4 group-hover:text-primary transition-colors">
                                                {prog.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg mb-8 flex-1">
                                                {prog.description}
                                            </p>
                                            <div className="inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-4 transition-all">
                                                Learn More <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                                {prog.logo && (
                                    <div className="absolute top-0 right-0 z-30 pointer-events-none">
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-1.5 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.22)] ring-4 ring-white/90 border border-primary/10 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                                            <img
                                                src={prog.logo}
                                                alt={`${prog.title} Logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programmes at a Glance */}
            <section className="py-20 bg-white">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-3xl border bg-warm-cream p-8 md:p-10 max-w-5xl mx-auto"
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
            </section>

            {/* Philosophy Callout */}
            <section className="py-24 bg-white border-y border-border/50">
                <div className="section-inner text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-display text-secondary mb-8 underline decoration-primary/30 underline-offset-8">Our Academic Philosophy</h2>
                        <p className="text-2xl font-light text-muted-foreground leading-relaxed italic">
                            "At Think and Grow it is not the learning of facts but training the mind to think."
                        </p>
                        <div className="mt-10 flex justify-center">
                            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                                Read about our story
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Programmes;
