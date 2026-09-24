export default function Services() {
  return (
    <section id="services" className="px-6 py-20 text-white bg-black">
        <p className="mt-2 text-3xl text-[var(--turquesa)] tracking-tight">
          Servicios
        </p>

        <h2 className="mt-2 text-2xl tracking-tight">
          Mis servicios y mi metodologia de trabajo.
        </h2>
      <div className="mt-10 mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
        <div className="border p-10 mx-10 border-[var(--turquesa)]">
          <p className="text-[var(--turquesa)] tracking-tight">Servicios</p>
            <p>
                <br/>• Diseño y desarrollo de páginas web.
                <br/>• Landing pages.
                <br/>• Sitios institucionales.
                <br/>• Portfolios profesionales.
                <br/>• Tiendas/soluciones web.
                <br/>• Mantenimiento y actualización.
            </p>
        </div>
        <div className="border p-10 mx-10 border-[var(--turquesa)]">
            <p className="text-[var(--turquesa)] tracking-tight">Proceso</p>
            <p>
                <br/>1) Reunión inicial.
                <br/>2) Definición de objetivos.
                <br/>3) Diseño y desarrollo.
                <br/>4) Revisión.
                <br/>5) Publicación.
                <br/>6) Mantenimiento.
            </p>
        </div>
      </div>
    </section>
  );
}