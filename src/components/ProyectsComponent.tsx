"use client";
import React, { useState } from "react";
import Image from "next/image";

function ProyectsComponent() {
  const [isMouseOverPort, setIsMouseOverPort] = useState(false);
  const [isMouseOverPI, setIsMouseOverPI] = useState(false);

  const handleMouseEnterPort = () => {
    setIsMouseOverPort(true);
  };

  const handleMouseLeavePort = () => {
    setIsMouseOverPort(false);
  };

  const handleMouseEnterPI = () => {
    setIsMouseOverPI(true);
  };

  const handleMouseLeavePI = () => {
    setIsMouseOverPI(false);
  };

  return (
    <div className="w-full flex h-4/5">
      <div
        id="proyectPort"
        onMouseEnter={handleMouseEnterPort}
        onMouseLeave={handleMouseLeavePort}
        className={`w-3/6 h-full bg-no-repeat bg-cover bg-center transition-all duration-1000 ${
          isMouseOverPort ? "bg-proyect-2-portfolio" : "bg-proyect-1-portfolio"
        }`}
      >
        {isMouseOverPort && (
          <div className="w-full h-full flex justify-center items-center">
            <a className="transform transition-all duration-500 hover:scale-125" href="https://github.com/LautaroCarrizo" target="_blank">
              <Image
                src={"/img/githubProyects2.png"}
                alt="githubLogo"
                width={80}
                height={80}
              />
            </a>
          </div>
        )}
      </div>
      <div
        id="proyectPI"
        onMouseEnter={handleMouseEnterPI}
        onMouseLeave={handleMouseLeavePI}
        className={`w-3/6 h-full bg-no-repeat bg-cover bg-center transition-all duration-1000 ${
          isMouseOverPI ? "bg-proyect-2-PI" : "bg-proyect-1-PI"
        }`}
      >
        {isMouseOverPI && (
          <div className="w-full h-full flex justify-center items-center">
            <a className="transform transition-all duration-500 hover:scale-125" href="https://github.com/LautaroCarrizo" target="_blank">
              <Image
                src={"/img/githubProyects2.png"}
                alt="githubLogo"
                width={80}
                height={80}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProyectsComponent;
