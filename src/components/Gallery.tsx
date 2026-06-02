import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { galleryImages } from "../data";

function Column({ images, speed = 1, className, startIndex = 0 }: { images: typeof galleryImages; speed?: number; className?: string; startIndex: number; }) {
  const columnRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: columnRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", `-${15 * speed}%`]);

  return (
    <div ref={columnRef} className={`flex flex-col gap-16 md:gap-32 ${className}`}>
      {images.map((image, i) => {
        const itemIndex = startIndex + i * 2 + 1;
        const formattedIndex = itemIndex.toString().padStart(2, '0');

        return (
          <motion.div 
            key={image.id}
            style={speed !== 0 ? { y } : {}}
            className="relative w-full flex flex-col group"
          >
            {/* Number indicator */}
            <div className="absolute -left-4 -top-8 md:-left-8 md:-top-12 z-10 pointer-events-none">
              <span className="text-[60px] md:text-[100px] font-black tracking-tighter text-outline opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                {formattedIndex}
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
            
            <div className="mt-6 flex flex-col gap-2 px-1 relative z-10">
              <span className="text-[#FF4E00] text-[10px] font-bold uppercase tracking-[0.2em] italic">
                {image.category}
              </span>
              <h3 className="font-bold text-2xl md:text-3xl tracking-tight uppercase leading-none">
                {image.title}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);

  const col1Images = galleryImages.filter((_, i) => i % 2 === 0);
  const col2Images = galleryImages.filter((_, i) => i % 2 !== 0);

  return (
    <section ref={container} className="py-24 px-6 md:px-12 w-full relative z-20">
      
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-24">
         <p className="text-[10px] uppercase tracking-[0.3em] text-[#FF4E00] font-bold italic">
            03 // Archive
         </p>
         <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Selections</h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left Column */}
        <div className="w-full md:w-1/2 pt-0 md:pt-32">
          <Column images={col1Images} speed={1.2} startIndex={0} />
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <Column images={col2Images} speed={0.8} startIndex={1} />
        </div>
      </div>
    </section>
  );
}
