export default function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-black text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mt-2 text-sm">
              Preparado para programar tus ideas.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="https://www.instagram.com/juancivardi/" target="_blank" className="hover:text-[var(--turquesa)]">
              Instagram
            </a>

            <a href="https://wa.me/542213037663" target="_blank" className="hover:text-[var(--turquesa)]">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--turquesa)] pt-6 text-center text-sm">
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}