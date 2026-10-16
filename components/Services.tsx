export default function Services() {
  return (
    <section id="services" className="px-6 py-20 text-white bg-black">
        <p className="mt-2 text-3xl text-[var(--turquesa)] tracking-tight">
          Servicios
        </p>

        <h2 className="mt-2 text-2xl tracking-tight mb-10">
          Mis servicios y mi metodologia de trabajo.
        </h2>
        <p>
          Mi enfoque se basa en lo que se denomina "metodologias agiles", basicamente es un estilo de desarrollo incremental que consiste en varias iteraciones sobre un mismo proyecto.
          <br/> 
          Mediante una serie de encuestas y reuniones logro encontrar el diseño perfecto para vos!
          <br/>
          Te cuento un poco más del paso a paso de mis proyectos y los proyectos que puedo realizar. Si tenes una idea con gusto la escucho y te ayudo a hacerla realidad.
        </p>
      <div className="mt-10 mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
        <div className="border p-10 mx-10 border-[var(--turquesa)]">
          <p className="text-[var(--turquesa)] tracking-tight">Mis trabajos</p>
            <p>
                <br/>• Diseño y desarrollo de páginas web.
                <br/>• Landing pages. (Página de aterrizaje - enfoque único)
                <br/>• Sitios institucionales.
                <br/>• Portfolios profesionales.
                <br/>• Tiendas web.
                <br/>• Programas de gestión o calculos.
                <br/>• Mantenimiento y actualización de sistemas funcionales-
                <br/>• Asistencia en programas en funcionamientos.
                <br/>• Digitalización de datos.
                <br/>• Ayuda en gestión de espacio en la nube u otras tecnologías.
                <br/>• Limpieza / reorden de software o sistemas operativos.
            </p>
        </div>
        <div className="border p-10 mx-10 border-[var(--turquesa)]">
            <p className="text-[var(--turquesa)] tracking-tight">Proceso</p>
            <p>
                En el desarrollo incremental e iterativo se repiten los pasos del proceso en todo momento. No se trata de un plan perfecto si no de una organización flexible con el objetivo de lograr el mejor resultado.
            </p>
            <p>
                <br/>1 - Me contas tu idea.
                <br/>2 - Reunión para planificar un diseño inicial.
                <br/>3 - Etapa de diseño, implementación y desarrollo, se puede ir siguiendo el progreso mediante un link.
                <br/>4 - Revisión y correción de detalles.
                <br/>5 - Publicación inicial.
                <br/>6 - Mantenimiento / actualizaciones.
            </p>
        </div>
      </div>
    </section>
  );
}