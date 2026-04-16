export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 sticky top-0">
      <h1 className="text-xl font-bold">Portafolio Andrey Jiménez Ortiz</h1>

      <div className="space-x-4">
        <a href="#projects" className="hover:text-gray-400">
          Proyectos
        </a>
       
      </div>
    </nav>
  );
}