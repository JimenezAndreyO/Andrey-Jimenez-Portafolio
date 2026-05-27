import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrey-jimenez-portafolio.vercel.app"),

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}