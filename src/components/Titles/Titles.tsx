"use client";
import Image from "next/image";
//@ts-ignore
import Typed from "typed.js";
import React from "react";
import { theme, musicInterface } from "@/interfaces/interface";

function Titles({ theme, music }: musicInterface & theme) {
  const type = React.useRef(null);

  const titleColor = theme === "dark" ? "titleDark" : "titleLight";
  const fullstackColor = theme === "dark" ? "fullstackDark " : "fullstack";
  const colorSubtitle =
    theme === "dark" ? "colorSubTitleDark " : "colorSubTitle";
  const danceTitle = music && "dance";
  const titleText = "Saludos! soy Lautaro,";
  const titleLetters = titleText.split("");
  const letterDance = music && "letter-animation";
  React.useEffect(() => {
    const typed = new Typed(type.current, {
      strings: [
        `<i>Desarrollador Web <b class="${fullstackColor}">Fullstack</b></i>`,
      ],
      typeSpeed: 40,
      loop: true,
      backSpeed: 75,
    });

    return () => {
      typed.destroy();
    };
  }, [fullstackColor]);

  return (
    <div className="w-full relative text-center p-10 flex flex-col ">
      <h1
        className={`titleLight text-7xl fontStyle tracking-widest font-semibold mb-2 ${titleColor} ${danceTitle}`}
      >
        <i>
        {titleLetters.map((letter, index) => (
          <span key={index} className={`${letterDance}`}>
            {letter}
          </span>
        ))}
        </i>
      </h1>
      <p
        className={`text-3xl ${colorSubtitle} fontStyle tracking-widest font-semibold p-2`}
      >
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
