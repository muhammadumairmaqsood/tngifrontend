import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, HelpCircle, GraduationCap, School, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DOCUMENT_LINKS } from '@/config/siteContent';

const faqDocuments = [
    {
        id: 'pyp',
        title: 'PYP FAQs',
        icon: GraduationCap,
        url: DOCUMENT_LINKS.faqPyp.embedUrl,
        originalUrl: DOCUMENT_LINKS.faqPyp.originalUrl,
        downloadUrl: DOCUMENT_LINKS.faqPyp.downloadUrl,
        description: 'Frequently asked questions about the Primary Years Programme (Ages 4.5-11).'
    },
    {
        id: 'myp',
        title: 'MYP FAQs',
        icon: School,
        url: DOCUMENT_LINKS.faqMyp.embedUrl,
        originalUrl: DOCUMENT_LINKS.faqMyp.originalUrl,
        downloadUrl: DOCUMENT_LINKS.faqMyp.downloadUrl,
        description: 'Frequently asked questions about the Middle Years Programme (Ages 11-16).'
    },
    {
        id: 'dp',
        title: 'DP FAQs',
        icon: GraduationCap,
        url: DOCUMENT_LINKS.faqDp.embedUrl,
        originalUrl: DOCUMENT_LINKS.faqDp.originalUrl,
        downloadUrl: DOCUMENT_LINKS.faqDp.downloadUrl,
        description: 'Frequently asked questions about the Diploma Programme (Ages 16-19).'
    }
];

const FAQs = () => {
    const [activeDoc, setActiveDoc] = useState(faqDocuments[0]);

    return (
        <Layout>
            <section className="section-standard bg-gradient-to-br from-background via-muted to-background min-h-screen">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <div className="badge-crimson mb-4">Support</div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find answers to common questions about our IB programmes and school life.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4 space-y-3">
                            {faqDocuments.map((doc) => (
                                <button
                                    key={doc.id}
                                    onClick={() => setActiveDoc(doc)}
                                    className={cn(
                                        "w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group border",
                                        activeDoc.id === doc.id
                                            ? "bg-card border-primary/20 shadow-md ring-1 ring-primary/10"
                                            : "bg-transparent border-transparent hover:bg-card/50 hover:border-border/50"
                                    )}
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                        activeDoc.id === doc.id ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                    )}>
                                        <doc.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={cn(
                                            "font-bold text-sm transition-colors",
                                            activeDoc.id === doc.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                        )}>
                                            {doc.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                            {doc.description}
                                        </p>
                                    </div>
                                    <ChevronRight className={cn(
                                        "w-4 h-4 transition-transform",
                                        activeDoc.id === doc.id ? "text-primary translate-x-1" : "text-muted-foreground opacity-0"
                                    )} />
                                </button>
                            ))}

                            {/* Contact Card */}
                            <div className="bg-primary/5 border border-primary/10 p-6 rounded-3xl mt-8">
                                <h4 className="font-bold text-sm text-primary mb-2">Still have questions?</h4>
                                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                                    Our admissions team is here to help you understand how Think and Grow can support your child's journey.
                                </p>
                                <Button variant="secondary" size="sm" className="w-full gap-2" asChild>
                                    <a href="/contact">Inquire Now</a>
                                </Button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDoc.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full"
                                >
                                    {/* Viewer Header */}
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                                        <div className="flex items-center gap-3">
                                            <h4 className="font-bold text-sm">{activeDoc.title}</h4>
                                            <div className="h-4 w-px bg-border/50" />
                                            <span className="text-xs text-muted-foreground hidden sm:block italic">Official Guide</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8" asChild title="Open in new tab">
                                                <a href={activeDoc.originalUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </Button>
                                            <Button variant="secondary" size="sm" className="gap-2" asChild>
                                                <a href={activeDoc.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                    <Download className="w-4 h-4" />
                                                    <span className="hidden sm:inline">Download</span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Viewer Frame */}
                                    <div className="relative aspect-[1/1.3] lg:aspect-auto lg:h-[800px] w-full bg-muted/10">
                                        <iframe
                                            src={activeDoc.url}
                                            className="w-full h-full border-none"
                                            title={activeDoc.title}
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

export default FAQs;
