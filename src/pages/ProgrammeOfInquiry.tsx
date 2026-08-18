import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Download, Share2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DOCUMENT_LINKS } from '@/config/siteContent';

const ProgrammeOfInquiry = () => {
    const pdfUrl = DOCUMENT_LINKS.programmeOfInquiry.embedUrl;

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
                            <div className="badge-crimson mb-4">Academic Framework</div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Programme of Inquiry (POI)
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Explore our comprehensive 2025-26 academic framework, outlining the units of inquiry
                                across all grade levels within the IB Primary Years Programme.
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

                            {/* Document Toolbar - purely decorative/functional looking */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-semibold text-sm hidden sm:block">TNG-POI-2025-26.pdf</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-9 w-9">
                                        <Printer className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="secondary" size="sm" className="ml-2 gap-2" asChild>
                                        <a href={DOCUMENT_LINKS.programmeOfInquiry.downloadUrl} target="_blank" rel="noopener noreferrer">
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
                                    title="Programme of Inquiry"
                                />
                            </div>

                            {/* Bottom Decoration */}
                            <div className="px-6 py-4 border-t border-border/50 bg-muted/30 text-center">
                                <p className="text-xs text-muted-foreground">
                                    Document provided by Think and Grow International School Academic Department
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProgrammeOfInquiry;
