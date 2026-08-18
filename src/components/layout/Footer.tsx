import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import logo from '@/assets/tng-logo.png';

const footerLinks = {
  explore: [
    { label: 'Programmes', href: '/programmes' },
    { label: 'About Us', href: '/about' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Careers', href: '/careers' },
  ],
  resources: [
    //{ label: 'Parent Handbook', href: '/resources/handbook' },
    //{ label: 'Programme of Inquiry', href: '/programmes/inquiry' },
    { label: 'FAQs', href: '/resources/faqs' },
    { label: 'Policies', href: '/about/policies' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://web.facebook.com/ThinkandGrowinternationalSchool', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/thinkandgrowinternational', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/think-and-grow-education-system/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCWfdmPsQfodT7r7ryiqyFPA', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Think and Grow" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {/*An authorized IB Primary Years Programme (PYP) World School in Lahore,*/}
                          {/*nurturing curious minds on our 17-acre campus.*/}
               A leading Cambridge Primary School in Lahore, nurturing curious minds and confident learners on our 17-acre campus.
            </p>

            {/* Motto */}
            <div className="mt-6">
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-primary-foreground/85">
                <span className="font-display">Discipline</span>
                <span className="text-primary-foreground/40" aria-hidden="true">•</span>
                <span className="font-display">Integrity</span>
                <span className="text-primary-foreground/40" aria-hidden="true">•</span>
                <span className="font-display">Excellence</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>                  </div>
                  <div>
                    <a href="tel:03211115950" className="hover:text-primary-foreground transition-colors">0321-1115950</a> | <a href="tel:03211115940" className="hover:text-primary-foreground transition-colors">0321-1115940</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@thinkandgrow.edu.pk" className="text-primary-foreground/80 hover:text-primary-foreground">
                  info@thinkandgrow.edu.pk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/E3wbLvuBVFeBJwJEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
Think and Grow Knowledge Park, Green Drive, 10km Raiwind Road, Lahore
</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Mon–Thu: 8:30 AM – 1:30 PM</div>
                  <div>Fri: 8:30 AM – 12:30 PM</div>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Think and Grow International School. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/about/policies" className="hover:text-primary-foreground">Privacy Policy</Link>
            <Link to="/about/policies" className="hover:text-primary-foreground">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
