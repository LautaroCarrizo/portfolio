"use client";

import { motion } from "framer-motion";
function ContactComponent() {
  return (
    <div className="h-full flex flex-col justify-between bg-light">
      <div className="w-full p-10 h-1/3 flex flex-col text-center titleLight justify-center max-md:p-5 max-sm:p-2">
        <motion.h1
          className="text-7xl fontStyle pt-5 tracking-widest font-bold pb-4 max-lg:text-6xl max-md:text-5xl max-lg:pt-10 max-md:pb-2 max-sm:tracking-normal"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        >
          Contacto
        </motion.h1>
        <motion.h3
          initial={{ y: -250 }}
          className="fontStyle tracking-wider font-semibold text-2xl max-lg:text-[18px] max-md:text-[15px] max-sm:text-[12px] max-sm:tracking-normal"
          animate={{ y: -10 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <i>
            Estoy en constante búsqueda de nuevos desafíos que impulsen mi
            carrera y no temo explorar nuevos horizontes. Si crees que puedo
            contribuir con valor y conocimiento a tu proyecto, te invito a
            contactarme. <br />
            ¡¡Estoy esperando con entusiasmo tu mensaje!!
          </i>
        </motion.h3>
      </div>
      <div className="flex w-full justify-center max-md:flex-col max-md:items-center">
        <a
          className={`w-[20rem] h-80 transition-transform transition-filter transform hover:scale-125 max-lg:w-[20vw] max-lg:h-[40vh] max-md:w-[30vw] max-md:h-[20vh]`}
          href="mailto:laucarrizo332@gmail.com?subject=Contacto&body=Hola,%20¿en%20qué%20puedo%20ayudarte?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center max-sm:pl-4">
            <motion.img
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              className="w-[160px] h-[160px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-sm:h-[80px] max-sm:w-[80px]"
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              src="/img/gmail.png"
              alt="GitHub"
            />
          </div>
        </a>
        <a
          className={`w-[20rem] h-80 transition-transform transition-filter transform hover:scale-125 max-lg:w-[20vw] max-lg:h-[40vh] max-md:w-[30vw] max-md:h-[20vh]`}
          href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              className="w-[160px] h-[160px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-sm:h-[80px] max-sm:w-[80px]"
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              src="/img/linkedin2.svg"
              alt="LinkedIn"
            />
          </div>
        </a>
        <a
          className={`w-[20rem] h-80 transition-transform transition-filter transform hover:scale-125 max-lg:w-[20vw] max-lg:h-[40vh] max-md:w-[30vw] max-md:h-[20vh]`}
          href="https://wa.me/543516512087"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center max-sm:pr-4">
            <motion.img
              initial={{ x: 250 }}
              animate={{ x: 10 }}
               className="w-[160px] h-[160px] max-lg:w-[120px] max-lg:h-[120px] max-md:w-[100px] max-md:h-[100px] max-sm:h-[80px] max-sm:w-[80px]"
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              src="/img/whatsapp.png"
              alt="instagram"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactComponent;
