import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | Andrey Jimenez",
  description:
    "Desarrollador Full Stack especializado en Node.js y MySQL.",

  openGraph: {
    title: "Portafolio | Andrey Jimenez",
    description:
      "Desarrollador Full Stack especializado en aplicaciones web modernas.",
    url: "https://andrey-jimenez-portafolio.vercel.app",
    siteName: "Portafolio Andrey Jimenez",
    images: [
      {
        url: "/Imagenprincipal.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Andrey Jimenez",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};