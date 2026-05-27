"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [


     {
    title: "Sistema Web de Catálogo de Videojuegos",
    description: "Aplicación web full stack desarrollada con Node.js, Express y MySQL para la gestión de un catálogo de videojuegos, incorporando autenticación, CRUD de productos, manejo de imágenes y diseño responsive..",
    image: "/PaginaIndex.png",
    github: "https://catalogo-de-video-juegos.onrender.com/",
    tech: ["NODE.JS", "MYSQL", "WEB", "PUG", "API"],
    },
   {
    title: "Plataforma inmobiliaria para la administración de propiedades, permitiendo gestionar inmuebles, imágenes y consultas mediante una interfaz web responsive.",
    description: "Aplicación web full stack desarrollada con Node.js, Express y MySQL para la gestión de propiedades inmobiliarias, incluyendo CRUD de inmuebles, autenticación de usuarios, manejo de imágenes y diseño responsive..",
    image: "/iniciovendedor.png",
    github: "https://github.com/JimenezAndreyO/BienesRaices.git",
    tech: ["NODE.JS", "MYSQL", "WEB", "PUG"],
  },
  {
    title: "Bolsa de activos",
    description: "Simulacion Compra, venta de bolsa de activos y billera de activos",
    image: "/inicio.png",
    github: "https://github.com/JimenezAndreyO/Programacion5-ProyectoFinal.git",
    tech: ["NODE.JS", "PUG", "MYSQL", "AJAX","API","PWA","WEB"],
  },
  {
    title: "Sistema Interno de Gestión Municipal",
    description: "Aplicación web orientada a procesos internos municipales, diseñada para la gestión de auditorías y almacenamiento de informes en PDF, facilitando el acceso, organización y administración documental.",
    image: "/inicio-seguimiento.png",
    github: "https://github.com/JimenezAndreyO/Seguimiento-de-trabajo.git",
    tech: ["C#", "SQL", "PDF"],
  },
  {
    title: "Sistema de Gestión Presupuestaria",
    description: "Sistema de gestión presupuestaria orientado a procesos internos empresariales, enfocado en el control y administración eficiente de presupuestos.",
    image: "/Iniciooo.png",
    github: "https://github.com/JimenezAndreyO/Manejo-de-presupuesto-web.git",
    tech: ["C#", "SQL", "WEB"],
  },

  
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            {/* Imagen */}
            <Image
              src={p.image}
              alt={p.title}
              width={500}
              height={300}
              onClick={() => setSelectedImage(p.image)}
              className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition duration-300"
            />

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {p.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            {/* Botón cerrar */}
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Preview"
              width={1000}
              height={700}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}