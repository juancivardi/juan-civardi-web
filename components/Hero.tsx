import Image from "next/image";
import AnimatedBeam from "@/components/animata/background/animated-beam";

export default function Hero() {
  return (
    <main>
      <AnimatedBeam>
      <section className="grid grid-cols-1 px-6 py-10 text-white md:grid-cols-2 md:px-20 md:items-center">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="mt-2 text-5xl">
            Juan Civardi
          </h1>

          <h2 className="mt-4 text-2xl">
            Desarrollador de <span className="text-[var(--turquesa)]"> software</span>
          </h2>

          <p className="mt-6 max-w-xl">
            Desarrollo aplicaciones web y soluciones de software.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                src="/images/logo.png"
                alt="Juan Civardi, programador"
                fill
                priority
                className="object-cover"
                sizes="280px"
                />
            </div>
        </div>
      </section>
      </AnimatedBeam>
    </main>
  );
}