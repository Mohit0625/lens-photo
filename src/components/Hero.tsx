import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={container} 
      className="relative min-h-screen w-full flex flex-col px-6 md:px-12 overflow-hidden"
    >
      {/* Background Graphic: Massive Typography */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden z-0"
      >
        <h1 className="text-[20vw] md:text-[300px] font-black tracking-tighter leading-none italic whitespace-nowrap">
          ARCHIVE
        </h1>
      </motion.div>

      {/* Top Navigation */}
      <nav className="relative z-20 flex justify-between items-center py-10">
        <Link to="/" className="text-xs font-bold tracking-[0.3em] uppercase hover:text-[#FF4E00] transition-colors">Lens & Light</Link>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
          <Link to="/galleries" className="hover:opacity-100 transition-opacity">Galleries</Link>
          <a href="#" className="hover:opacity-100 transition-opacity">Editorial</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
          <a href="#" className="hover:opacity-100 transition-opacity underline underline-offset-8">Contact</a>
        </div>
      </nav>

      {/* Main Hero Content Area */}
      <div className="flex-1 relative z-10 flex items-center py-12 md:py-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          
          {/* Left: Massive Vertical Typography */}
          <div className="hidden md:block col-span-1">
            <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase opacity-40">
              Selected Works • 2026
            </div>
          </div>

          {/* Center: Featured Image with Bold Overlay */}
          <div className="col-span-1 md:col-span-7 relative group">
            <motion.div 
              style={{ y, opacity }}
              className="w-full h-[60vh] md:h-[500px] bg-neutral-800 rounded-sm overflow-hidden relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80" 
                alt="Hero Landscape"
                className="w-full h-full object-cover scale-105"
              />
            </motion.div>
            
            {/* The 'Parallax' Typography Layer */}
            <motion.div 
              className="absolute -bottom-10 -left-4 md:-bottom-12 md:-left-16 pointer-events-none"
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
            >
              <h2 className="text-[15vw] md:text-[140px] font-black leading-[0.8] tracking-tighter mix-blend-difference text-white">
                SILENCE<br/><span className="pl-12 md:pl-20 text-outline">PEAK</span>
              </h2>
            </motion.div>
          </div>

          {/* Right: Meta Data */}
          <div className="col-span-1 md:col-span-4 md:pl-12 mt-12 md:mt-0">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-[#FF4E00] font-bold italic">01 // Project Study</p>
                <h3 className="text-3xl md:text-4xl font-light leading-tight">Monoliths of the<br/>Hardanger Plateau</h3>
              </div>
              
              <p className="text-sm leading-relaxed opacity-50 max-w-[280px]">
                An exploration of geological permanence in a shifting climate. Shot on medium format film over forty-two days in the Norwegian highlands.
              </p>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-px bg-white group-hover:w-20 transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold">View Full Series</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
