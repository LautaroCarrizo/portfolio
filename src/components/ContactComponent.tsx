"use client";

import { motion } from "framer-motion";
function ContactComponent() {
  return (
    <div className="h-full flex flex-col justify-between bg-light">
      <div className="w-full p-10 h-1/3 flex flex-col text-center titleLight justify-center">
        <motion.h1
          className="text-7xl fontStyle pt-5 tracking-widest font-bold pb-4"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        >
          Contacto
        </motion.h1>
        <motion.h3
          initial={{ y: -250 }}
          className="fontStyle tracking-wider font-semibold text-2xl"
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
      <div className="flex w-full justify-center">
        <a
          className={`w-[20rem] h-80 transition-transform transition-filter transform hover:scale-125`}
          href="mailto:laucarrizo332@gmail.com?subject=Contacto&body=Hola,%20¿en%20qué%20puedo%20ayudarte?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              src="/img/gmail.png"
              alt="GitHub"
              width={160}
              height={160}
            />
          </div>
        </a>
        <a
          className={`w-[20rem] h-80 transition-transform transition-filter transform hover:scale-125`}
          href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              src="/img/linkedin2.svg"
              alt="LinkedIn"
              width={160}
              height={160}
            />
          </div>
        </a>
        <a
          className={`w-[20rem] h-80 transition-transform transition-filter transform hover:scale-125`}
          href="https://wa.me/543516512087"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 250 }}
              animate={{ x: 10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              src="/img/whatsapp.png"
              alt="instagram"
              width={160}
              height={160}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactComponent;
