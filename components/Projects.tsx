import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-10 bg-black text-white">
      <div className="mx-auto max-w-7xl">

        <p className="mt-2 text-3xl text-[var(--turquesa)] tracking-tight">
          Proyectos
        </p>

        <h2 className="mt-2 text-2xl tracking-tight">
          Conocé mis últimos proyectos
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              href={project.urlSitio}
              key={project.titulo}
              target="_blank"
              className="group border border-white/30 bg-black p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--turquesa)]/50"
            >
              <div className="group mb-2 h-px w-20 bg-[var(--turquesa)]" />
              <h3 className="">
                {project.titulo}
              </h3>
              <div className="my-2 h-px w-20 bg-[var(--turquesa)]" />
              <div className="relative mx-auto w-full max-w-[300px]">
                <div className="relative aspect-square overflow-hidden rounded">
                <Image
                  src={project.imagen}
                  alt={project.titulo}
                  fill
                  loading="eager"
                  className="object-contain opacity-85 transition group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                </div>
                <p className="text-xs mb-3 text-center">
                {project.urlSitio} 
              </p>
              </div>

              <p className="text-sm">
                {project.descripcion}
              </p>
              <p className="mt-1 text-xs text-[var(--turquesa)]">
                {project.tecnologias}
              </p>
              <p className="mt-4 text-xs text-gray-500">
                {project.urlGit} 
              </p>

              <span className="mt-2 inline-block text-sm font-semibold text-[var(--turquesa)] transition-colors group-hover:text-white">
                Visitar →
              </span>
              
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}