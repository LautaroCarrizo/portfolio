"use client";
import Image from "next/image";
//@ts-ignore
import Typed from "typed.js";
import React from "react";

function Titles() {
  const type = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(type.current, {
      strings: ['<i>Desarrollador Web <b class="fullstack">Fullstack</b></i>'],
      typeSpeed: 40,
      loop: true,
      backSpeed: 75
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full relative text-center p-10 flex flex-col ">
      <h1 className="colorTitle2 text-7xl fontStyle tracking-widest font-semibold mb-2">
        Saludos! soy Lautaro,
      </h1>
      <p className="colorSubTitle text-3xl fontStyle tracking-widest font-semibold p-2">
        <span ref={type}></span>
      </p>
      <div className="flex justify-center">
        <Image
          src="/img/ubilogo.png"
          alt="Logo de Ubicacion"
          width={30}
          height={30}
        />
        <p className="colorSubTitle text-2xl fontStyle tracking-widest font-semibold ml-2 mt-2">
          Cordóba Argentina
        </p>
      </div>
    </div>
  );
}

export default Titles;
