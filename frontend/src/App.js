import { useState } from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import VisionMission from "@/components/VisionMission";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  const [prefill, setPrefill] = useState({ service: "", pkg: "", key: 0 });

  const handleEnquire = ({ service = "", pkg = "" }) => {
    setPrefill((p) => ({ service, pkg, key: p.key + 1 }));
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <div className="App" data-testid="app-root">
      <Navbar />
      <main>
        <Hero onEnquire={handleEnquire} />
        <About />
        <Services onEnquire={handleEnquire} />
        <Portfolio />
        <WhyUs />
        <VisionMission />
        <Process />
        <Packages onEnquire={handleEnquire} />
        <Contact prefill={prefill} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
