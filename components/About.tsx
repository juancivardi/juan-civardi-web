import AnimatedBeam from "@/components/animata/background/animated-beam";
import Image from "next/image";

export default function About() {
  return (
    <AnimatedBeam>
    <section id="about" className="px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2 items-center">
        <div>
          <p className="mt-2 text-3xl text-[var(--turquesa)] tracking-tight">
            Sobre mí
          </p>
          <p className="mt-6 max-w-3xl">
            Soy estudiante avanzado de la carrera de Analista en Tecnologías de la Información
            y Comunicación en la Facultad Nacional de La Plata. Mi enfoque es el diseño visual y el diseño de paginas web.
            Con el tiempo, utilizando lo aprendido en la universidad y mediante cursos, me perfeccioné utilizando herramientas como TypeScript, Java, JavaScript, React y otras tecnologías.
          </p>
          <p className="mt-6 max-w-3xl">
            Escribime y desarrollamos juntos tu solución de software ideal.
          </p>
          
        </div>
        <div className="mt-5 relative mx-auto w-full max-w-[220px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-full">
                <Image
                src="/images/juan-foto.jpg"
                alt="Juan Civardi, programador"
                fill
                priority
                className="object-cover"
                sizes="280px"
                />
            </div>
        </div>
      </div>
    </section>
    </AnimatedBeam>
  );
}