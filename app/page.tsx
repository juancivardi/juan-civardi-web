import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AnimatedBeam from "@/components/animata/background/animated-beam";

export default function Home() {
  return (
    <AnimatedBeam>
    <main>
      <Hero/>
      <Projects/>
      <About/>
    </main>
    </AnimatedBeam>
  );
}