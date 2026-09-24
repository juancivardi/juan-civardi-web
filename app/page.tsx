import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import AnimatedBeam from "@/components/animata/background/animated-beam";

export default function Home() {
  return (
    <AnimatedBeam>
    <main>
      <Hero/>
      <Projects/>
      <Services/>
      <About/>
    </main>
    </AnimatedBeam>
  );
}