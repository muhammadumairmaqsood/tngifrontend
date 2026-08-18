import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/tng-logo.png";
import tngEyLogo from "@/assets/cards/ib-circle.png";
import ibCircleLogo from "@/assets/cards/ib-circle.png";
import igcseLogo from "@/assets/cards/igcse.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      //{ label: 'Early Years Programme', description: 'EY', href: '/programmes/early-years' },
      //{ label: 'Primary Years Programme', description: 'PYP 1-4', href: '/programmes/primary-years' },
      {
        label: "Cambridge Primary",
        description: "Kindergarten - Grade 1",
        href: "/programmes/cambridge-primary",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Our Story",
        description: "Origin & values",
        href: "/about#our-story",
      },
      {
        label: "Campus & Facilities",
        description: "17-acre campus",
        href: "/about#campus-facilities",
      },
      {
        label: "Sports & Activities",
        description: "Horse riding, swimming & more",
        href: "/programmes/sports",
      },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Careers", href: "/careers" },
  //{
  //  label: 'Resources',
  //  href: '/resources',
  //  children: [
  //    { label: 'Parent Handbook', href: '/resources/handbook' },
  //    //{ label: 'Programme of Inquiry', description: 'IB Framework', href: '/programmes/inquiry' },
  //    { label: 'Policies', description: 'School policies', href: '/about/policies' },
  //  //  { label: 'FAQs', description: 'Programmes & IB', href: '/resources/faqs' },
  //  ],
  //},
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const programmeDropdownVisuals: Record<string, { logo?: string }> = {
  "/programmes/early-years": { logo: tngEyLogo },
  "/programmes/primary-years": { logo: ibCircleLogo },
  "/programmes/cambridge-primary": { logo: igcseLogo },
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-card/95 backdrop-blur-sm border-b border-border/50">
      <div className="section-inner">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Think and Grow International School"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="nav-link px-4 py-2 flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children &&
                    activeDropdown === item.label &&
                    (item.label === "Programmes" ? (
                      <div className="fixed left-0 right-0 top-20 mt-2 px-4 flex justify-center z-50">
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className={`${item.children.length === 3 ? "w-[680px]" : "w-[840px]"} max-w-[94vw] bg-card rounded-2xl shadow-lg border border-border/50 p-4`}
                        >
                          <div
                            className={`grid gap-3 ${item.children.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}
                          >
                            {item.children.map((child) => {
                              const visual =
                                programmeDropdownVisuals[child.href];
                              return (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="group rounded-xl border border-border/60 bg-background/80 hover:bg-accent/60 transition-all duration-300 p-3 text-center flex flex-col items-center justify-start min-h-[168px]"
                                >
                                  {visual?.logo ? (
                                    <div className="w-14 h-14 rounded-full bg-white p-1.5 ring-2 ring-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] border border-primary/10 mb-3">
                                      <img
                                        src={visual.logo}
                                        alt={`${child.label} logo`}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                                      <Trophy className="w-6 h-6" />
                                    </div>
                                  )}

                                  <div className="font-semibold text-foreground leading-snug mb-1">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-xs text-muted-foreground leading-snug">
                                      {child.description}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-card rounded-lg shadow-lg border border-border/50 p-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                          >
                            <div className="font-semibold text-foreground">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-sm text-muted-foreground">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="https://api.whatsapp.com/send/?phone=+923211115950"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border/50"
          >
            <div className="section-inner py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-muted-foreground hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
