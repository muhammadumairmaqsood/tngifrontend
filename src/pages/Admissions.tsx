import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SEOMeta } from '@/components/SEOMeta';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink, FileText, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import admissionsHero from '@/assets/admissions-hero.jpg';
import { DOCUMENT_LINKS } from '@/config/siteContent';

const Admissions = () => {
    return (
   
        <Layout>
            {/*<meta></meta>*/}
            {/*<SEOMeta*/}
            {/*    title="Admissions | Think and Grow International School Lahore"*/}
            {/*    description="Think and Grow International offers globally recognised education through the Cambridge Primary Programme, providing a seamless learning journey leading to IGCSE/O Levels/A Levels."*/}
            {/*    keywords="TNG, Think and Grow Admissions" />*/}
                

            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={admissionsHero}
                        alt="Admissions at Think and Grow"
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
                        <span className="badge-outline mb-4">Join Our Community</span>
                        <h1 className="text-5xl md:text-7xl font-display mb-4">Admissions</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Join our community of lifelong learners and future global citizens.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-standard bg-warm-cream/30 min-h-screen">
                <div className="section-inner">
                    <Tabs defaultValue="CambridgeApply" className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="bg-muted p-1 rounded-xl h-14 md:h-16 shadow-soft border border-border/50">
                                <TabsTrigger
                                    value="Prospectus"
                                    className="px-8 md:px-12 rounded-lg text-base md:text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2"
                                >
                                    <FileText className="w-5 h-5" />
                                    School Prospectus
                                </TabsTrigger>
                                <TabsTrigger
                                    value="CambridgeApply"
                                    className="px-8 md:px-12 rounded-lg text-base md:text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2"
                                >
                                    <ClipboardList className="w-5 h-5" />
                                    Apply Online for Cambridge
                                </TabsTrigger>
                                {/*<TabsTrigger*/}
                                {/*    value="IBApply"*/}
                                {/*    className="px-8 md:px-12 rounded-lg text-base md:text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2"*/}
                                {/*>*/}
                                {/*    <ClipboardList className="w-5 h-5" />*/}
                                {/*    Apply Online for IB*/}
                                {/*</TabsTrigger>*/}

                                {/*<TabsTrigger*/}
                                {/*    value="SummerCampApply"*/}
                                {/*    className="px-8 md:px-12 rounded-lg text-base md:text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 gap-2"*/}
                                {/*>*/}
                                {/*    <ClipboardList className="w-5 h-5" />*/}
                                {/*    Think and Grow International Experience*/}
                                {/*</TabsTrigger>*/}

                            </TabsList>
                        </div>

                        <TabsContent value="Prospectus" className="mt-0 focus-visible:ring-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-card border border-border/50 rounded-3xl shadow-floating overflow-hidden"
                            >
                                {/* Header for Prospectus */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-bold text-sm">School Prospectus</h4>
                                        <div className="h-4 w-px bg-border/50" />
                                        <span className="text-xs text-muted-foreground italic">Think and Grow International</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                            <a href={DOCUMENT_LINKS.prospectus.originalUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </Button>
                                        <Button variant="secondary" size="sm" className="gap-2" asChild>
                                            <a href={DOCUMENT_LINKS.prospectus.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                <Download className="w-4 h-4" />
                                                <span className="hidden sm:inline">Download PDF</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Viewer */}
                                <div className="relative aspect-[1/1.4] md:aspect-auto md:h-[900px] w-full bg-muted/5">
                                    <iframe
                                        src={DOCUMENT_LINKS.prospectus.embedUrl}
                                        className="w-full h-full border-none"
                                        title="School Prospectus"
                                    />
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="CambridgeApply" className="mt-0 focus-visible:ring-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-card border border-border/50 rounded-3xl shadow-floating overflow-hidden"
                            >
                                <div className="px-6 py-4 border-b border-border/50 bg-muted/30">
                                    <h4 className="font-bold text-sm">Online Application Form</h4>
                                </div>
                                <div className="relative min-h-[800px] w-full bg-white">
                                    {/* Tally Form Embed */}
                                    <iframe
                                        src="https://tally.so/embed/xX2JXE?alignLeft=1&hideTitle=1&transparentBackground=1"
                                        loading="lazy"
                                        width="100%"
                                        height="800"
                                        frameBorder="0"
                                        marginHeight={0}
                                        marginWidth={0}
                                        title="Cambridge Admission Inquiry Form"
                                        className="w-full border-none"
                                    />
                                </div>
                            </motion.div>
                            <div className="mt-8 text-center text-muted-foreground">
                                <p className="text-sm">Having trouble with the form? <a href="https://tally.so/r/xX2JXE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Open original link</a></p>
                            </div>
                        </TabsContent>

                        <TabsContent value="IBApply" className="mt-0 focus-visible:ring-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-card border border-border/50 rounded-3xl shadow-floating overflow-hidden"
                            >
                                <div className="px-6 py-4 border-b border-border/50 bg-muted/30">
                                    <h4 className="font-bold text-sm">Online Application Form</h4>
                                </div>
                                <div className="relative min-h-[800px] w-full bg-white">
                                    {/* Tally Form Embed */}
                                    <iframe
                                        src="https://tally.so/embed/0QMVP0?alignLeft=1&hideTitle=1&transparentBackground=1"
                                        loading="lazy"
                                        width="100%"
                                        height="800"
                                        frameBorder="0"
                                        marginHeight={0}
                                        marginWidth={0}
                                        title="IB Admission Inquiry Form"
                                        className="w-full border-none"
                                    />
                                </div>
                            </motion.div>
                            <div className="mt-8 text-center text-muted-foreground">
                                <p className="text-sm">Having trouble with the form? <a href="https://tally.so/r/0QMVP0" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Open original link</a></p>
                            </div>
                        </TabsContent>

                        <TabsContent value="SummerCampApply" className="mt-0 focus-visible:ring-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-card border border-border/50 rounded-3xl shadow-floating overflow-hidden"
                            >
                                <div className="px-6 py-4 border-b border-border/50 bg-muted/30">
                                    <h4 className="font-bold text-sm">Online Summer Camp Registration Form</h4>
                                </div>
                                <div className="relative min-h-[800px] w-full bg-white">
                                    {/* Tally Form Embed */}
                                    <iframe
                                        src="https://tally.so/embed/dWQJ0N?alignLeft=1&hideTitle=1&transparentBackground=1"
                                        loading="lazy"
                                        width="100%"
                                        height="800"
                                        frameBorder="0"
                                        marginHeight={0}
                                        marginWidth={0}
                                        title="Summer Camp Inquiry Form"
                                        className="w-full border-none"
                                    />
                                </div>
                            </motion.div>
                            <div className="mt-8 text-center text-muted-foreground">
                                <p className="text-sm">Having trouble with the form? <a href="https://tally.so/r/dWQJ0N" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Open original link</a></p>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </section>
        </Layout >
       
    );
};

export default Admissions;
