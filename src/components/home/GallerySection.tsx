import { motion } from 'framer-motion';
import galleryRiding from '@/assets/Sports/kid-riding-horse.jpeg';
import gallerySwimming from '@/assets/gallery-swimming.webp';
import galleryRobotics from '@/assets/gallery-robotics.jpg';
import galleryOutdoor from '@/assets/cambridge-page-images/play-area.webp';
import galleryTaekwondo from '@/assets/cambridge-page-images/taekwondo-optimized.jpeg';
import galleryMusic from '@/assets/gallery-music.jpg';

const galleryImages = [
  { src: galleryRiding, alt: 'Indoor horse riding arena', caption: 'Horse Riding Arena' },
  { src: gallerySwimming, alt: 'Swimming pool lessons', caption: 'Swimming' },
  { src: galleryRobotics, alt: 'Robotics and coding lab', caption: 'Robotics & Coding' },
  { src: galleryOutdoor, alt: 'Outdoor play areas', caption: 'Outdoor Learning' },
  { src: galleryTaekwondo, alt: 'Taekwondo martial arts', caption: 'Taekwondo' },
];

export const GallerySection = () => {
  return (
    <section className="section-standard bg-card">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-medium mb-4"
          >
            Experience Our Campus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            17 acres of discovery, adventure, and growth
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-lg">{image.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
