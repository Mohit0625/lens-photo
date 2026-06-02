/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galleries from "./pages/Galleries";
import SmoothScroller from "./components/SmoothScroller";

export default function App() {
  return (
    <Router>
      <SmoothScroller>
        <main className="bg-[#0A0A0A] min-h-screen text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A] relative flex flex-col font-sans">
          
          {/* Decorative UI Element: Grid Lines */}
          <div className="fixed inset-0 pointer-events-none flex justify-between px-6 md:px-12 z-0">
            <div className="w-px h-full bg-white/5"></div>
            <div className="w-px h-full bg-white/5"></div>
            <div className="w-px h-full bg-white/5"></div>
            <div className="w-px h-full bg-white/5"></div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galleries" element={<Galleries />} />
          </Routes>
        </main>
      </SmoothScroller>
    </Router>
  );
}

