export interface Project {
  titulo: string;
  descripcion: string;
  tecnologias: string;
  urlGit: string;
  urlSitio: string;
  imagen: string;
}

export const projects: Project[] = [
  {
    titulo: "Tita Nails",
    descripcion: "",
    tecnologias: "TypeScript • HTML • CSS • Tailwind • Github • Vercel",
    urlGit: "https://github.com/juancivardi/tita-nails",
    urlSitio: "https://www.tita-nails.com.ar",
    imagen: "/images/web-tita.JPG",
  },
  {
    titulo: "Abogada Cintia Carreras",
    descripcion: "",
    tecnologias: "TypeScript • HTML • CSS • Tailwind • Github • Vercel",
    urlGit: "https://github.com/juancivardi/estudio-juridico-cintia-carreras",
    urlSitio: "https://www.abogada-cintia-carreras.com.ar",
    imagen: "/images/web-cintia.JPG",
  },
  {
    titulo: "Stock app",
    descripcion: "",
    tecnologias: "AppScripts • Google Sheets • Github",
    urlGit: "https://github.com/juancivardi/SistemaStock",
    urlSitio: "https://github.com/juancivardi/SistemaStock",
    imagen: "/images/app-stock.jpeg",
  },
  
];