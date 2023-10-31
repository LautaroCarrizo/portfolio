"use client";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { useWidth } from "@/utils/hookWidth";
function InfoAbout() {
  const width = useWidth();
  return (
    <div className="h-full bg-black">
      <div className="flex w-full h-auto text-white">
        {!(width < 1024) && (
          <div className="w-1/4">
            <img src="/img/gifDef5.gif" alt="gif" className="w-full h-full" />
          </div>
        )}

        <div className="w-3/6 max-lg:w-full max-lg:p-5">
          <div className="flex justify-center flex-col h-full">
            <motion.div
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            >
              <h1 className="text-start text-7xl tracking-wider pt-5 tefontStyle max-xl:text-5xl">
                SOBRE Mí
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            >
              <div className="pt-5">
                <p className="fontStyle text-center leading-8 max-xl:leading-6 max-sm:text-[12px] max-sm:leading-6">
                  Soy desarrollador full stack y técnico en recursos humanos,
                  residiendo en Córdoba, Argentina.
                  <br />
                  Mi enfoque actual se centra en ingresar al mundo laboral de la
                  tecnología de la información (TI) y alcanzar tanto mis metas
                  personales como los objetivos de la organización en la que
                  trabajo. Me considero una persona comprometida y responsable
                  que no teme enfrentar nuevos desafíos, siempre avanzando para
                  cumplir con los objetivos establecidos.
                  <br />
                  Además, soy un apasionado del buen café, la buena música y el
                  entrenamiento; tres pilares que contribuyen a mantener la
                  cordura de cualquier persona. Me interesa profundamente
                  participar en proyectos tanto en el desarrollo front-end como
                  en el back-end.
                  <br />
                  Actualmente, me encuentro en búsqueda de oportunidades
                  laborales y evaluando las mejores opciones para impulsar mi
                  carrera.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {!(width < 1024) && (
          <div className="w-1/4">
            <img src="/img/gifDef2.gif" alt="gif" className="w-full h-full" />
          </div>
        )}
      </div>
      <div className="max-sm:flex max-sm:items-end max-sm:h-[30vh]">
        <Skills />
      </div>
    </div>
  );
}
export default InfoAbout;
