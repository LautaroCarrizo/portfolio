"use client";
import React from "react";
import { Cover } from "@/components/Cover/Cover";
import Titles from "@/components/Titles/Titles";
import Welcome from "@/components/Titles/WelcomeTitle";
import Icons from "@/components/Icons";
import NavBar from "@/components/Navbar";
import { useState, useEffect } from "react";
function Home() {
  const [theme, setTheme] = useState("light");

  const handlerChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("#bg-app")?.classList.add("bg-dark");
    } else {
      document.querySelector("#bg-app")?.classList.remove("bg-dark");
    }
  }, [theme]);

  return (
    <div className="h-screen w-full bg-light dark:bg-slate-900" id="bg-app">
      <Cover />
      <div className="w-full h-30">
        <div className="pt-5 pl-5">
          <button
            onClick={handlerChangeTheme}
            className="bg-transparent text-indigo-300 px-4 py-2 rounded transition-transform transition-filter transform hover:scale-125 hover:text-teal-500"
          >
            {theme === "light" ? (
              <span>
                Dark Mode. <br /> ⋆⁺₊⋆ ☾ ⋆⁺₊⋆
              </span>
            ) : (
              <span>
                Light Mode. <br /> ⋆⁺₊⋆ ☀ ⋆⁺₊⋆
              </span>
            )}
          </button>
        </div>
      </div>
      <div className=" flex flex-col h-[88%]">
        <div className="flex flex-1">
          <div className="flex-1 flex flex-col justify-center w-2/5">
            <Titles theme={theme} />
          </div>
          <div className="w-1/5">
            <Welcome />
          </div>
          <div className="flex justify-center items-end w-2/5">
            <Icons />
          </div>
        </div>
        <div className="w-full flex justify-center items-end h-30">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
