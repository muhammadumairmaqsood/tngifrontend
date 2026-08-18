import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Briefcase, Mail, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';
import careersHero from '@/assets/careers.jpeg';

const Careers = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={careersHero}
                        alt="Careers at Think and Grow"
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
                        <h1 className="text-5xl md:text-7xl font-display mb-4">Careers</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Join our team of dedicated educators and professionals in shaping the future of global citizens.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-standard bg-warm-cream/30">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Why Join Us */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-display text-secondary mb-6">Work with Us</h2>
                                <p className="text-lg text-muted-foreground mb-10">
                                    At Think and Grow International School, we are always looking for passionate, innovative individuals who are committed to excellence in education.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">Growth</h4>
                                        <p className="text-sm text-muted-foreground">Professional development and career advancement opportunities.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">Support</h4>
                                        <p className="text-sm text-muted-foreground">A collaborative and supportive work environment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-border/50">
                                <h4 className="font-bold text-secondary mb-4">Application Process</h4>
                                <ol className="space-y-4 text-sm text-muted-foreground list-decimal pl-4">
                                    <li>Submit your application via the form on this page.</li>
                                    <li>Our HR team will review your qualifications and experience.</li>
                                    <li>Shortlisted candidates will be contacted for an initial interview.</li>
                                    <li>Final rounds include class demonstrations and principal interviews.</li>
                                </ol>
                            </div>
                        </motion.div>

                        {/* Form Embed */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-floating overflow-hidden border border-border/50"
                        >
                            <div className="p-1 min-h-[600px] w-full">
                                <iframe
                                    data-tally-src="https://tally.so/embed/EklMGL?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                    loading="lazy"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Careers Application"
                                    className="w-full border-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Careers;
