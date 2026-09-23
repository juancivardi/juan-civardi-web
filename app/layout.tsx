import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { FaWhatsapp } from "react-icons/fa";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Juan Civardi",
  description: "Programador - Web designer",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className="bg-white">
        {/* Futura imagen de fondo */}
          <div
            className="absolute fixed inset-0 -z-10 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('')" }}
          />
               
        <Navbar />

        <main>{children}</main>
        
        <Footer />
        <WhatsappButton
          className="fixed bottom-10 right-7 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[var(--turquesa)] text-white shadow-md transition hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </WhatsappButton>
      </body>
    </html>
  );
}
