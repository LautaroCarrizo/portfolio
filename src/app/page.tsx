"use client";
import React from "react";
import { Cover } from "@/components/Cover/Cover";
import Titles from "@/components/Titles/Titles";
import Welcome from "@/components/Titles/WelcomeTitle";
import Icons from "@/components/Icons";
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
      <Cover />
      <div className="h-30 flex">
        <div className="pt-5 pl-5 w-3/6">
          <button
            onClick={handlerChangeTheme}
            className="bg-transparent text-white px-4 py-2 rounded transition-transform transition-filter transform hover:scale-125 hover:text-indigo-900"
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
        <div className="w-3/6 flex justify-end pr-10">
          <button
            className="bg-transparentpt-5 text-white rounded transition-transform transition-filter transform hover:scale-125 hover:text-indigo-900"
            onClick={handleToggleMusic}
          >
            {musicPlaying === false ? (
              <span>Music On. 🎧</span>
            ) : (
              <span>Music Off. 🎤</span>
            )}
          </button>
          <audio id="audio-element">
            <source src="/From Californebu to Nordnes.mp3" type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-1">
          <div className="flex-1 flex flex-col justify-center w-2/5">
            <Titles theme={theme} music={musicPlaying} />
          </div>
          <div className="w-1/5">
            <Welcome music={musicPlaying} />
          </div>
          <div className="flex justify-center pt-20 w-2/5">
            <Icons music={musicPlaying} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
