import AnimatedBeam from "@/components/animata/background/animated-beam";

export default function About() {
  return (
    <AnimatedBeam>
    <section id="about" className="px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mt-2 text-3xl text-[var(--turquesa)] tracking-tight">
          Sobre mí
        </p>

        <p className="mt-6 max-w-3xl">
          Soy estudiante de Analista en Tecnologías de la Información
          y la Comunicación. Hace varios años desarrollo de aplicaciones
          utilizando TypeScript Java, JavaScript, React y otras tecnologías.
        </p>
      </div>
    </section>
    </AnimatedBeam>
  );
}