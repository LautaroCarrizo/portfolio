"use client";
import React from "react";
import { Cover } from "@/components/Cover/Cover";
import Titles from "@/components/Titles/Titles";
import Welcome from "@/components/Titles/WelcomeTitle";
import Icons from "@/components/Icons";
import Transition from "@/components/Transition";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Home() {
  const [theme, setTheme] = useState("light");
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handlerChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleToggleMusic = () => {
    const audioElement = document.getElementById(
      "audio-element"
    ) as HTMLAudioElement;
    if (audioElement) {
      if (musicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    }
    setMusicPlaying((prevMusic) => !prevMusic);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("#bg-app")?.classList.add("bg-dark");
    } else {
      document.querySelector("#bg-app")?.classList.remove("bg-dark");
    }
  }, [theme]);

  return (
    <div className="bg-light h-full" id="bg-app">
      <Transition />
      <Cover />
      <div className="h-30 flex">
        <div className="pt-5 pl-5 w-3/6">
          <button
            onClick={handlerChangeTheme}
            className="bg-transparent text-white px-4 py-2 rounded transition-transform transition-filter transform hover:scale-125 hover:text-indigo-900  "
          >
            {theme === "light" ? (
              <span className="max-sm:text-[10px]">
                Dark Mode. <br /> ⋆⁺₊⋆ ☾ ⋆⁺₊⋆
              </span>
            ) : (
              <span className="max-sm:text-[10px]">
                Light Mode. <br /> ⋆⁺₊⋆ ☀ ⋆⁺₊⋆
              </span>
            )}
          </button>
        </div>
        <div className="w-3/6 flex justify-end pr-10">
          <button
            className="bg-transparentpt-5 text-white rounded transition-transform transition-filter transform hover:scale-125 hover:text-indigo-900"
            onClick={handleToggleMusic}
          >
            {musicPlaying === false ? (
              <span className="max-sm:text-[10px]">Music On. 🎧</span>
            ) : (
              <span className="max-sm:text-[10px]">Music Off. 🎤</span>
            )}
          </button>
          <audio id="audio-element">
            <source src="/From Californebu to Nordnes.mp3" type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-auto  max-sm:pt-5">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <Welcome music={musicPlaying} />
        </motion.div>
      </div>
        <div className="flex flex-1 max-sm:flex-col">
          <div className="flex flex-col justify-center w-4/5 max-sm:w-full">
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            >
              <Titles theme={theme} music={musicPlaying} />
            </motion.div>
          </div>
          <div className="flex justify-center w-4/5 max-sm:mt-2  max-sm:w-full">
            <motion.div
              initial={{ x: 250 }}
              animate={{ x: 10 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            >
              <Icons music={musicPlaying} />
            </motion.div>
          </div>
        </div>
    </div>
  );
}

export default Home;
