"use client";

import React from "react";
import { useState, useEffect } from "react";

function ProyectsComponent() {
  const [bgPort, setBgPort] = useState("bg-proyect-1-portfolio");
  const [bgPI, setBgPI] = useState("bg-proyect-1-PI");
  const bgPortfolio = ["bg-proyect-2-portfolio", "bg-proyect-3-portfolio"];
  const bgPIhenry = ["bg-proyect-2-PI", "bg-proyect-3-PI", "bg-proyect-4-PI"];

  const changeBackground = (
    bgList: string[],
    currentBg: string,
    setBg: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const currentIndex = bgList.indexOf(currentBg);
    const nextIndex = (currentIndex + 1) % bgList.length;
    setBg(bgList[nextIndex]);
  };

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      changeBackground(bgPortfolio, bgPort, setBgPort);
    }, 2000);
    const PIInterval = setInterval(() => {
      changeBackground(bgPIhenry, bgPI, setBgPI);
    }, 2000);
    return () => {
      clearInterval(portfolioInterval);
      clearInterval(PIInterval);
    };
  }, [bgPort, bgPI]);

  return (
    <div className="w-full flex h-4/5">
      <div className={`w-3/6 h-full ${bgPort} bg-no-repeat bg-cover bg-center`}>
        <a href="" target="_blank">
          <div></div>
        </a>
      </div>
      <div className={`w-3/6 h-full ${bgPI} bg-no-repeat bg-cover bg-center`}>
        <a href="" target="_blank">
          <div></div>
        </a>
      </div>
    </div>
  );
}

export default ProyectsComponent;
