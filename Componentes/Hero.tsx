export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">

      <h1 className="text-5xl font-bold mb-4">
        <span className="text-yellow-300">
          Desarrollador Full Stack
        </span>
      </h1>

      <p className="text-gray-300 text-lg max-w-2xl">
        Especializado en Node.js, MySQL, Web desarrollando
        aplicaciones web administrativas, empresariales
        y plataformas dinámicas con tecnologías modernas.
      </p>


      <div className="flex gap-3 mt-8 flex-wrap justify-center">
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
          href="https://cuccr-my.sharepoint.com/:b:/g/personal/andrey_jimenez_ortiz_cuc_cr/IQAbv2u-G8-MSpPP6BRwL9AcAVsIKSz4RwPSjWYNO1cfjys?e=hQqHlK"
          target="_blank"
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition"
        >
          Descargar CV
        </a>

        
      </div>

        
          
       <h2 className="text-3xl font-bold text-white mt-20 mb-4">
          Sobre Mí
        </h2>

       
      <p className="text-gray-400 max-w-2xl mt-6 leading-7">
        Experiencia en desarrollo backend, bases de datos,
        autenticación, sistemas CRUD y diseño responsive.
        Interesado en desarrollo Full Stack y QA Automation
        con Cypress.
      </p>

    </section>
  );
}