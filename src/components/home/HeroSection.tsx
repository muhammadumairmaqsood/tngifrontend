import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin, Award, Building2, Users, Volume2, VolumeX, School } from 'lucide-react';
import heroCampus from '@/assets/hero-campus.jpeg';
import heroVideo from '@/assets/PYP Think and Grow International.mov';
import { useRef, useState } from 'react';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroCampus}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback Image if video fails */}
          <img
            src={heroCampus}
            alt="Think and Grow International School Campus"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative section-inner text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* IB Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="badge-outline mb-8"
          >
            IB World School
          </motion.div>
 */}
          {/* Headlines */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            Think and Grow International
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-xl"
          >
            A School Where Your Child Learns, Grows, and Belongs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/programmes">Explore Programmes</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Audio Control */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={toggleMute}
        className="absolute bottom-8 left-8 z-20 w-12 h-12 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all group"
        aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export const ValueStrip = () => {
  const values = [
    { icon: MapPin, label: '17-Acre Campus' },
    //{ icon: Award, label: 'IB Authorized' },
    { icon: School, label: 'Cambridge IGCSE' },
    { icon: Building2, label: "Pakistan's First Indoor Riding Arena" },
    { icon: Users, label: 'Ages 4.5+' },
  ];

  return (
    <section className="bg-background py-6 border-y border-border/30">
      <div className="section-inner">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="value-strip-item"
            >
              <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-semibold text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
