import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data";
import Footer from "../components/Footer";

function GalleryItem({ 
  image, 
  index, 
}: { 
  image: typeof galleryImages[0]; 
  index: number; 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique parallax speed for each item to create full page scattered parallax
  const speeds = [1.2, 0.8, 1.5, 0.6, 1.8, 0.9, 1.3];
  const speed = speeds[index % speeds.length];
  
  const y = useTransform(scrollYProgress, [0, 1], ["10%", `-${20 * speed}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  // Alternate alignment
  const alignClass = index % 2 === 0 ? "items-start" : "items-end";
  // Random widths
  const widthClass = index % 3 === 0 ? "w-[80%] md:w-[60%]" : index % 3 === 1 ? "w-[100%] md:w-[75%]" : "w-[90%] md:w-[50%]";

  return (
    <div ref={containerRef} className={`w-full flex flex-col ${alignClass} py-12 md:py-24`}>
      <motion.div 
        style={{ y, opacity }}
        className={`relative flex flex-col group ${widthClass}`}
      >
        <div className="absolute -left-4 -top-8 md:-left-8 md:-top-16 z-10 pointer-events-none">
          <span className="text-[80px] md:text-[140px] font-black tracking-tighter text-outline opacity-20 group-hover:opacity-100 transition-opacity duration-500">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>

        <div 
          className="w-full relative overflow-hidden bg-neutral-900 rounded-sm z-0"
          style={{ paddingBottom: `${(1 / image.aspectRatio) * 100}%` }}
        >
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
            src={image.url}
            alt={image.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-lighten"
          />
        </div>
        
        <div className="mt-8 flex flex-col gap-2 px-1 relative z-10 mix-blend-difference">
          <span className="text-[#FF4E00] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] italic">
            {image.category}
          </span>
          <h3 className="font-bold text-3xl md:text-5xl tracking-tight uppercase leading-none">
            {image.title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}

export default function Galleries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative z-10 w-full flex flex-col min-h-screen">
      {/* Huge Background Typography Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0"
      >
        <h1 className="text-[20vw] md:text-[300px] font-black tracking-tighter leading-none italic whitespace-nowrap [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] rotate-180 md:rotate-0">
          GALLERIES
        </h1>
      </motion.div>

      {/* Basic Navigation */}
      <nav className="relative z-20 flex justify-between items-center py-10 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0A]/80 to-transparent sticky top-0 backdrop-blur-sm">
        <Link to="/" className="text-xs font-bold tracking-[0.3em] uppercase hover:text-[#FF4E00] transition-colors">
          Lens & Light
        </Link>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
          <Link to="/galleries" className="text-white opacity-100 underline underline-offset-8">Galleries</Link>
          <a href="#" className="hover:opacity-100 transition-opacity">Editorial</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 pb-40 relative z-10">
        <div className="mb-32">
           <p className="text-[10px] uppercase tracking-[0.3em] text-[#FF4E00] font-bold italic mb-4">
              Overview
           </p>
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Complete<br/>Archive
           </h2>
        </div>
        
        <div className="flex flex-col">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
