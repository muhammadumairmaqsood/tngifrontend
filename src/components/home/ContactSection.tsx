import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="section-standard bg-card">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8"
            >
              Get in Touch
            </motion.h2>

            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:03211115950" className="hover:text-primary transition-colors">0321-1115950</a> | <a href="tel:03211115940" className="hover:text-primary transition-colors">0321-1115940</a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@thinkandgrow.edu.pk" className="text-primary hover:underline">
                    info@thinkandgrow.edu.pk
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">Monday – Thursday: 8:30 AM – 1:30 PM</p>
                  <p className="text-muted-foreground">Friday: 8:30 AM – 12:30 PM</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
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
              </motion.div>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px] bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9051415557983!2d74.23279600000001!3d31.389179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901d1b3013b8f%3A0xc6ec9f0ecc2409a!2sThink%20and%20Grow%20Knowledge%20Park!5e0!3m2!1sen!2s!4v1768449421035!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Think and Grow Location Map"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
