"use client";
import Link from "next/link";
import { useState } from "react"
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Navbar() {

  return (
    <header>
    <nav className="text-white w-full flex border-b border-gray-300 bg-black items-center">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <div className="items-center gap-8 flex">
          <Link
            href="/"
            className="text-sm hover:text-[var(--turquesa)]"
          >
            Inicio
          </Link>
          <Link
            href="#proyectos"
            className="text-sm  hover:text-[var(--turquesa)]"
          >
            Mis proyectos
          </Link>

          <Link
            href="#about"
            className="text-sm hover:text-[var(--turquesa)]"
          >
            Sobre mí
          </Link>
        </div>

      </div>

    </nav>
    </header>
  );
}