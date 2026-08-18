import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Download, Share2, Printer, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DOCUMENT_LINKS } from '@/config/siteContent';

const ParentHandbook = () => {
    const pdfUrl = DOCUMENT_LINKS.parentHandbook.embedUrl;

    return (
        <Layout>
            <section className="section-standard bg-gradient-to-br from-background via-muted to-background min-h-screen">
                <div className="section-inner">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12 text-center"
                        >
                            <div className="badge-crimson mb-4">Resources</div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                                IB PYP Parent Handbook
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                A comprehensive guide for parents to understand the IB Primary Years Programme
                                framework and how we implement it at Think and Grow.
                            </p>
                        </motion.div>

                        {/* Document Viewer Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative group lg:p-8 rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

                            {/* Document Toolbar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-semibold text-sm hidden sm:block">Parent-Handbook.pdf</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-9 w-9">
                                        <Printer className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="secondary" size="sm" className="ml-2 gap-2" asChild>
                                        <a href={DOCUMENT_LINKS.parentHandbook.downloadUrl} target="_blank" rel="noopener noreferrer">
                                            <Download className="w-4 h-4" />
                                            Download
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* PDF Embed */}
                            <div className="relative aspect-[1/1.4] w-full bg-muted/10">
                                <iframe
                                    src={pdfUrl}
                                    className="w-full h-full border-none"
                                    title="Parent Handbook"
                                />
                            </div>

                            {/* Handbook Info Footer */}
                            <div className="px-8 py-6 border-t border-border/50 bg-muted/30">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                        <Info className="w-3 h-3 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm mb-1">Important Note</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            This handbook is updated annually. Please ensure you are referring to the latest version.
                                            For any specific questions not covered here, please contact the school administration or
                                            the IB PYP Coordinator.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ParentHandbook;
