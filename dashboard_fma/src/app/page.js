"use client";

import NavBar from "@/components/navBar/navbar";
import { useRouter } from "next/navigation";
import React from "react";

function ContactUs() {

     const router = useRouter();
  
      const handleNavigation = (route) => {
          router.push (route);
        
      };

      
    return (
    <div>
      <NavBar />
      <div className="space-y-2">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

        <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="text-center px-6 md:px-12 lg:px-24">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">FMA SCALABLE</h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              En FMA SCALABLE, no solo creamos páginas web; arquitectamos experiencias digitales que cautivan, convierten y conquistan mercados. ¿Listo para escalar sin límites?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:shadow-xl transition"
              >
                Descubre Nuestros servicios
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
                onClick={() => handleNavigation('/contact')}
              >
                Inicia tu Revolución Digital
              </a>
            </div>
          </div>
        </section>
        <div id="services" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 py-5 transition">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Diseño Web que Enamora
            </h1>
            <p className="text-gray-700 text-center">
              Creamos páginas web que no solo funcionan, sino que cautivan. Desde la estética hasta la usabilidad, tu sitio será una obra de arte digital que convertirá visitantes en clientes leales.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Marketing que Conquista Mercados
            </h1>
            <p className="text-gray-700 text-center">
              Desarrollamos campañas de marketing digital que no solo se ven, sino que se sienten. Desde SEO hasta redes sociales, llevamos tu marca al siguiente nivel con estrategias que generan impacto real.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Soluciones a Medida para tu Negocio
            </h1>
            <p className="text-gray-700 text-center">
              ¿Tienes una idea única? La convertimos en realidad con sistemas adaptados a tus necesidades. Desde aplicaciones hasta plataformas complejas, creamos herramientas que impulsan tu éxito.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Visualiza tu Futuro Gratis
            </h1>
            <p className="text-gray-700 text-center">
              Te ofrecemos un prototipo 100% gratuito de tu idea. Así, puedes ver y sentir cómo será tu proyecto antes de comprometerte. ¡Tu visión, nuestra pasión!
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Lanzamiento Sin Costos Extra
            </h1>
            <p className="text-gray-700 text-center">
              Una vez que cerremos el trato, te regalamos de 2 a 4 años de alojamiento y dominio. Empieza a brillar en internet sin preocuparte por los detalles técnicos.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Tu Idea, Nuestra Misión
            </h1>
            <p className="text-gray-700 text-center">
              Amamos las ideas audaces. Por eso, te ofrecemos una consulta gratuita para escuchar tu visión y trazar el camino hacia su realización. Juntos, haremos que tu marca despegue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;