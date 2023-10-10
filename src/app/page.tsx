import React from "react";
import { Cover } from "@/components/Cover/Cover";
import Titles from "@/components/Titles";
import Welcome from "@/components/WelcomeTitle";
import Icons from "@/components/Icons";
import NavBar from "@/components/Navbar";
function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex flex-1"> 
        <Cover />
        <div className="flex-1 flex flex-col justify-center w-2/5">
          <Titles />
        </div>
        <div className="w-1/5">
          <Welcome />
        </div>
        <div className="flex justify-center items-end w-2/5">
          <Icons />
        </div>
      </div>
      <div className="w-full flex justify-center items-end h-30 pb-10">
        <NavBar />
      </div>
    </div>
  );
}

export default Home;
