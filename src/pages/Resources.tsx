import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import {
    BookOpen,
    FileText,
    ShieldCheck,
    HelpCircle,
    ArrowRight,
    Download,
    ExternalLink,
    GraduationCap,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import heroImg from '@/assets/hero-campus.jpeg';

const resourceCategories = [
    {
        title: 'School Documentation',
        description: 'Essential guides and handbooks for students and parents.',
        resources: [
            {
                title: 'Parent Handbook',
                description: 'Complete guide to school life, expectations, and procedures.',
                type: 'PDF Guide',
                href: '/resources/handbook',
                icon: BookOpen,
                color: 'bg-primary'
            },
            {
                title: 'School Prospectus',
                description: 'An overview of our mission, vision, and academic programmes.',
                type: 'Digital Booklet',
                href: '/admissions',
                icon: FileText,
                color: 'bg-secondary'
            }
        ]
    },
    {
        title: 'Academy & Support',
        description: 'Information regarding our international curriculum and support systems.',
        resources: [
            {
                title: 'Frequently Asked Questions',
                description: 'Common queries about PYP, MYP, and DP programmes.',
                type: 'FAQs',
                href: '/resources/faqs',
                icon: HelpCircle,
                color: 'bg-[#B22222]'
            },
            {
                title: 'School Policies',
                description: 'Governance, safety, assessment, and integrity policies.',
                type: 'Official Policies',
                href: '/about/policies',
                icon: ShieldCheck,
                color: 'bg-primary/80'
            },
            {
                title: 'Careers',
                description: 'Join our team of educators and professionals.',
                type: 'Applications',
                href: '/careers',
                icon: Briefcase,
                color: 'bg-secondary/70'
            }
        ]
    }
];

const Resources = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="School Resources"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="section-inner relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-outline mb-4">Official Desk</span>
                        <h1 className="text-5xl md:text-7xl font-display mb-4">Resources</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Access all official school documentation, handbooks, and policies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Resources Feed */}
            <section className="section-standard bg-warm-cream/30 min-h-screen">
                <div className="section-inner">
                    <div className="space-y-20">
                        {resourceCategories.map((category, catIndex) => (
                            <div key={category.title}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-10"
                                >
                                    <h2 className="text-3xl md:text-4xl font-display text-secondary mb-2">{category.title}</h2>
                                    <p className="text-muted-foreground">{category.description}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {category.resources.map((res, resIndex) => (
                                        <motion.div
                                            key={res.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: resIndex * 0.1 }}
                                            className="group"
                                        >
                                            <Link to={res.href}>
                                                <Card className="p-8 h-full border-none shadow-card hover:shadow-elevated transition-all duration-500 rounded-3xl flex gap-6 items-start group-hover:bg-card">
                                                    <div className={`${res.color} w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                                        <res.icon className="w-8 h-8" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xs font-bold tracking-widest uppercase text-primary/60">{res.type}</span>
                                                        </div>
                                                        <h3 className="text-2xl font-display text-secondary mb-3 group-hover:text-primary transition-colors">
                                                            {res.title}
                                                        </h3>
                                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                                            {res.description}
                                                        </p>
                                                        <div className="inline-flex items-center gap-2 font-semibold text-secondary group-hover:text-primary group-hover:gap-4 transition-all">
                                                            View Resource <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="bg-secondary text-white py-20">
                <div className="section-inner">
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-display mb-4">Can't find what you're looking for?</h2>
                            <p className="text-xl text-primary-foreground/70">
                                Our administrative team is available to provide any additional documentation or support requested by parents.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-10">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-full px-10">
                                <a href="tel:04235321894">Call Office</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Resources;
