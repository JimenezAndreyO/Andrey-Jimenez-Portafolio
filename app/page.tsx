import Navbar from "@/Componentes/Navbar";
import Hero from "@/Componentes/Hero";
import Projects from "@/Componentes/Projects";
//import Contact from "@/Componentes/Contact";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      
    </main>
  );
}