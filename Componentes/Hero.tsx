export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-yellow-300">
          Software Developer
        </span>
      </h1>

      <p className="text-gray-400 max-w-xl">
        Desarrollador Full Stack enfocado en crear experiencias web modernas en diferentes tecnologías.
      </p>

      <div className="flex gap-3 mt-6">
        <a
          href="https://github.com/JimenezAndreyO"
          target="_blank"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/andrey-jim%C3%A9nez-ortiz-372195255/"
          target="_blank"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          LinkedIn
        </a>

        <a
          href="/Andrey CV Español.pdf"
          download
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          Descargar CV
        </a>
      </div>

    </section>
  );
}