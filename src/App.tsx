/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SmoothScroller from "./components/SmoothScroller";

export default function App() {
  return (
    <SmoothScroller>
      <main className="bg-[#0A0A0A] min-h-screen text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A] relative flex flex-col font-sans">
        
        {/* Decorative UI Element: Grid Lines */}
        <div className="fixed inset-0 pointer-events-none flex justify-between px-6 md:px-12 z-0">
          <div className="w-px h-full bg-white/5"></div>
          <div className="w-px h-full bg-white/5"></div>
          <div className="w-px h-full bg-white/5"></div>
          <div className="w-px h-full bg-white/5"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col">
          <Hero />
          <Intro />
          <Gallery />
          <Footer />
        </div>
      </main>
    </SmoothScroller>
  );
}

