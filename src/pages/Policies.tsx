import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserPlus, BookOpen, PenTool, Scale, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DOCUMENT_LINKS } from '@/config/siteContent';

const policies = [
    {
        id: 'admission',
        title: 'Admission Policy',
        icon: UserPlus,
        url: DOCUMENT_LINKS.policyAdmission.embedUrl,
        originalUrl: DOCUMENT_LINKS.policyAdmission.originalUrl,
        downloadUrl: DOCUMENT_LINKS.policyAdmission.downloadUrl,
        description: 'Guidelines and procedures for prospective students and parents.'
    },
    {
        id: 'child-protection',
        title: 'Child Protection Policy',
        icon: ShieldCheck,
        url: DOCUMENT_LINKS.policyChildProtection.embedUrl,
        originalUrl: DOCUMENT_LINKS.policyChildProtection.originalUrl,
        downloadUrl: DOCUMENT_LINKS.policyChildProtection.downloadUrl,
        description: 'Our commitment to ensuring a safe and nurturing environment for all students.'
    },
    {
        id: 'assessment',
        title: 'Assessment Policy',
        icon: Scale,
        url: DOCUMENT_LINKS.policyAssessment.embedUrl,
        originalUrl: DOCUMENT_LINKS.policyAssessment.originalUrl,
        downloadUrl: DOCUMENT_LINKS.policyAssessment.downloadUrl,
        description: 'How we measure, document, and report student learning and growth.'
    },
    {
        id: 'language-arts',
        title: 'Language Arts Policy',
        icon: BookOpen,
        url: DOCUMENT_LINKS.policyLanguageArts.embedUrl,
        originalUrl: DOCUMENT_LINKS.policyLanguageArts.originalUrl,
        downloadUrl: DOCUMENT_LINKS.policyLanguageArts.downloadUrl,
        description: 'Our approach to language learning as a tool for inquiry and communication.'
    },
    {
        id: 'academic-integrity',
        title: 'Academic Integrity Policy',
        icon: PenTool,
        url: DOCUMENT_LINKS.policyAcademicIntegrity.embedUrl,
        originalUrl: DOCUMENT_LINKS.policyAcademicIntegrity.originalUrl,
        downloadUrl: DOCUMENT_LINKS.policyAcademicIntegrity.downloadUrl,
        description: 'Principles of honesty, trust, and responsibility in all academic pursuits.'
    }
];

const Policies = () => {
    const [activePolicy, setActivePolicy] = useState(policies[0]);

    return (
        <Layout>
            <section className="section-standard bg-gradient-to-br from-background via-muted to-background min-h-screen">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <div className="badge-crimson mb-4">Governance</div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            School Policies
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our policies reflect our commitment to excellence, transparency, and the
                            well-rounded development of every child in our care.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4 space-y-3">
                            {policies.map((policy) => (
                                <button
                                    key={policy.id}
                                    onClick={() => setActivePolicy(policy)}
                                    className={cn(
                                        "w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group border",
                                        activePolicy.id === policy.id
                                            ? "bg-card border-primary/20 shadow-md ring-1 ring-primary/10"
                                            : "bg-transparent border-transparent hover:bg-card/50 hover:border-border/50"
                                    )}
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                        activePolicy.id === policy.id ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                    )}>
                                        <policy.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={cn(
                                            "font-bold text-sm transition-colors",
                                            activePolicy.id === policy.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                        )}>
                                            {policy.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                            {policy.description}
                                        </p>
                                    </div>
                                    <ChevronRight className={cn(
                                        "w-4 h-4 transition-transform",
                                        activePolicy.id === policy.id ? "text-primary translate-x-1" : "text-muted-foreground opacity-0"
                                    )} />
                                </button>
                            ))}

                            {/* External Link Card */}
                            <div className="bg-primary/5 border border-primary/10 p-6 rounded-3xl mt-8">
                                <h4 className="font-bold text-sm text-primary mb-2">Need Help?</h4>
                                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                                    If you have questions regarding our policies or need a physical copy,
                                    please reach out to the administration office.
                                </p>
                                <Button variant="secondary" size="sm" className="w-full gap-2" asChild>
                                    <a href="/contact">Contact Administration</a>
                                </Button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePolicy.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full"
                                >
                                    {/* Viewer Header */}
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                                        <div className="flex items-center gap-3">
                                            <h4 className="font-bold text-sm">{activePolicy.title}</h4>
                                            <div className="h-4 w-px bg-border/50" />
                                            <span className="text-xs text-muted-foreground hidden sm:block italic">Official Documentation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8" asChild title="Open in new tab">
                                                <a href={activePolicy.originalUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </Button>
                                            <Button variant="secondary" size="sm" className="gap-2" asChild>
                                                <a href={activePolicy.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                    <Download className="w-4 h-4" />
                                                    <span className="hidden sm:inline">Download</span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Viewer Frame */}
                                    <div className="relative aspect-[1/1.3] lg:aspect-auto lg:h-[800px] w-full bg-muted/10">
                                        <iframe
                                            src={activePolicy.url}
                                            className="w-full h-full border-none"
                                            title={activePolicy.title}
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Policies;
