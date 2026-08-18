import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';
import { useSiteContentBySlug } from '@/hooks/useSiteContent';

const Contact = () => {
    const { data: contactForm } = useSiteContentBySlug('contact-form');

    const FALLBACK_CONTACT_EMBED_URL =
        'https://tally.so/embed/b5evDe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
    const FALLBACK_CONTACT_ORIGINAL_URL = 'https://tally.so/r/b5evDe';

    const contactEmbedUrl = contactForm?.embed_url || FALLBACK_CONTACT_EMBED_URL;
    const contactOriginalUrl = contactForm?.original_url || FALLBACK_CONTACT_ORIGINAL_URL;

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
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-secondary">
                <div className="section-inner relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display mb-4">Contact Us</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            We're here to help. Reach out to us for any inquiries or to schedule a visit.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-standard bg-warm-cream/30">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-display text-secondary mb-6">Get in Touch</h2>
                                <p className="text-lg text-muted-foreground mb-10">
                                    Have a question about our admissions process? Our team is available to assist you.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">Phone</h4>
                                        <div className="text-sm text-muted-foreground">
                                            <p>0321-1115950</p>
                                            <p>0321-1115940</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">Email</h4>
                                        <p className="text-sm text-muted-foreground">info@thinkandgrow.edu.pk</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">Office Hours</h4>
                                        <div className="text-sm text-muted-foreground">
                                            <p>Mon–Thu: 8:30 AM – 1:30 PM</p>
                                            {/*<p>Fri: 8:30 AM – 12:30 PM</p>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">Location</h4>
                                        <p className="text-sm text-muted-foreground">
                                            <a
                                                href="https://maps.app.goo.gl/E3wbLvuBVFeBJwJEA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-primary transition-colors"
                                            >
Think and Grow Knowledge Park, Green Drive, 10km Raiwind Road, Lahore
                                            </a>
                                        </p>
                                    </div>
                                </div>
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
                                    data-tally-src={contactEmbedUrl}
                                    loading="lazy"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Contact Us"
                                    className="w-full border-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="mt-8 text-center text-muted-foreground">
                        <p className="text-sm">
                            Having trouble with the form?{' '}
                            <a
                                href={contactOriginalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold hover:underline"
                            >
                                Open original link
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[50vh] w-full bg-muted">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9051415557983!2d74.23279600000001!3d31.389179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901d1b3013b8f%3A0xc6ec9f0ecc2409a!2sThink%20and%20Grow%20Knowledge%20Park!5e0!3m2!1sen!2s!4v1768449421035!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="w-full bg-muted py-3 text-center text-xs text-muted-foreground">
                    Having trouble with the map?{' '}
                    <a
                        href="https://maps.google.com/?q=Think+and+Grow+Knowledge+Park"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
