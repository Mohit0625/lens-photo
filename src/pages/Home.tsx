import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative z-10 w-full flex flex-col">
      <Hero />
      <Intro />
      <Gallery />
      <Footer />
    </div>
  );
}
