import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={container} className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
      <motion.div style={{ opacity, y }} className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/4 shrink-0 space-y-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#FF4E00] font-bold italic">
            02 // Philosophy
          </p>
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-40">
            The Approach
          </h2>
        </div>
        <div className="md:w-3/4 md:pr-12">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-[#F5F5F5] leading-tight tracking-tight">
            I believe that every photograph is a conversation between light, space, and time. My work focuses on capturing the quiet profoundness of the natural world, exploring the intersection of raw beauty and fleeting moments.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
