import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Skills from "@/components/sections/Skills";

import CursorGlow from "@/components/animations/CursorGlow";
import ParticlesBackground from "@/components/animations/ParticlesBackground";

import EquationSection from "@/components/sections/EquationSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import MinorProjects from "@/components/sections/MinorProjects";

import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import GithubStats from "@/components/sections/GithubStats";

import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import Loader from "@/components/sections/Loader";
import MusicToggle from "@/components/sections/MusicToggle";
import AIChatbot from "@/components/sections/AIChatbot";

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden relative">

      {/* Loader */}
      <Loader />

      {/* Background Effects */}
      <ParticlesBackground />
      <CursorGlow />

      {/* Main Sections */}
      <Navbar />

      <Hero />

      <Metrics />

      <Skills />

      <EquationSection />

      <FeaturedProjects />

      <MinorProjects />

      <Experience />

      <Certifications />

      <GithubStats />

      <Contact />

      <Footer />
      <Loader />
      <MusicToggle />
      <AIChatbot />

    </main>
  );
}