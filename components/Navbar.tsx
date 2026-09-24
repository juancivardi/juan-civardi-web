"use client";
import Link from "next/link";
import { useState } from "react"
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Navbar() {

  return (
    <header>
    <nav className="text-white w-full flex border-b border-[var(--turquesa)] bg-black items-center">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <div className="items-center gap-8 flex text-m font-bold">
          <Link
            href="#proyectos"
            className="hover:text-[var(--turquesa)]"
          >
            Mis proyectos
          </Link>
          <Link
            href="#services"
            className="hover:text-[var(--turquesa)]"
          >
            Servicios
          </Link>

          <Link
            href="#about"
            className="hover:text-[var(--turquesa)]"
          >
            Sobre mí
          </Link>
        </div>

      </div>

    </nav>
    </header>
  );
}