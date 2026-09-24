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
            <span className="font-bold"> Crecí en la era digital, en contacto permanente con la tecnología y las herramientas informáticas. </span> Con el tiempo, ese vínculo natural con la tecnología se transformó en una vocación y en el interés por desarrollar soluciones digitales que puedan aportar valor a cada proyecto.
            <br/> El desarrollo web me permite combinar conocimientos técnicos, creatividad y resolución de problemas para transformar ideas en sitios web funcionales, modernos y pensados para las necesidades de cada persona, emprendimiento o empresa.
            <br/> Me interesa conocer cada proyecto, entender qué se quiere comunicar y encontrar la mejor manera de llevar esa idea a la computación. 
            <br/> Creo que una página no debe ser solamente atractiva: debe tener un propósito, ser clara, fácil de usar y representar la identidad de quien está detrás de ella.
            <br/> Cuento con formación profesional en desarrollo y diseño de páginas web y continúo ampliando mis conocimientos en tecnologías y desarrollo de software.
            Mi objetivo es seguir creciendo profesionalmente, con el compromiso de mantenerme siempre actualizado frente a los desafíos de un mundo tecnológico en constante evolución y de buscar nuevas ideas y soluciones para cada proyecto.
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