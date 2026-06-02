export default function Footer() {
  return (
    <footer className="relative z-20 px-6 md:px-12 pt-32 pb-10 flex flex-col gap-12 border-t border-white/5 mt-24 bg-[#0A0A0A]">
      
      {/* Huge Footer Text */}
       <div className="flex flex-col items-center justify-center py-24 mb-12 relative overflow-hidden group cursor-pointer">
          <div className="text-[12vw] font-black tracking-tighter leading-none uppercase mix-blend-difference z-10 transition-transform duration-700 group-hover:scale-105">
             Get In Touch
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <div className="text-[150px] font-black text-outline opacity-0 group-hover:opacity-20 transition-all duration-700 scale-150">HELLO</div>
          </div>
       </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex gap-4 md:gap-8 items-center flex-wrap">
          <div className="text-[10px] opacity-40 uppercase tracking-widest font-bold">© {new Date().getFullYear()} Lens & Light</div>
          <div className="hidden md:block w-12 md:w-24 h-px bg-white/20"></div>
          <div className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Oslo / Berlin / NY</div>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="text-xs font-bold font-sans">
              <span className="text-white">TOP</span>
           </div>
           <div className="flex gap-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                 <span className="text-[12px]">↑</span>
              </button>
           </div>
        </div>
      </div>
    </footer>
  );
}
