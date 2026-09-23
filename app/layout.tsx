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
  title: "Juan Civardi | Desarrollador de software",
  description:
    "Portfolio de Juan Civardi, desarrollador de software.",

  openGraph: {
    title: "Juan Civardi | Desarrollador de software",
    description:
      "Portfolio de Juan Civardi, desarrollador de software.",
    url: "https://juan-civardi.vercel.app",
    siteName: "Juan Civardi",
    images: [
      {
        url: "https://https://juan-civardi.vercel.app/images/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Juan Civardi - Desarrollador de software",
      },
    ],
    locale: "es_AR",
    type: "website",
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
