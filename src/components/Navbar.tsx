import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <div className="w-1/4 h-30 flex justify-between p-6 max-sm:w-full max-sm:justify-around max-md:w-full max-md:justify-around max-lg:w-3/6 max-xl:w-3/6">
      <div className="flex flex-col justify-center max-lg:mx-2">
        <Link
          href="/"
          className="transition-transform transition-filter transform hover:scale-125"
        >
          <Image
            src="/img/homeDef.png"
            alt="icono home"
            width={50}
            height={50}
          />
          <h3 className="text-center fontStyle">Home</h3>
        </Link>
      </div>
      <div className="flex flex-col justify-center  max-lg:mx-2">
        <Link
          href="/about"
          className="transition-transform transition-filter transform hover:scale-125"
        >
          <Image
            src="/img/aboutDef2.png"
            alt="icono about"
            width={50}
            height={50}
          />
          <h3 className="text-center fontStyle">About</h3>
        </Link>
      </div>
      <div className="flex flex-col justify-center  max-lg:mx-2">
        <Link
          href="/proyects"
          className="transition-transform transition-filter transform hover:scale-125"
        >
          <Image
            src="/img/maletinDef.png"
            alt="icono proyectos"
            width={50}
            height={50}
          />
          <h3 className="text-center fontStyle">Works</h3>
        </Link>
      </div>
      <div className="flex flex-col justify-center  max-lg:mx-2">
        <Link
          href="/contact"
          className="transition-transform transition-filter transform hover:scale-125"
        >
          <Image
            src="/img/lupaDef.png"
            alt="icono contacto"
            width={50}
            height={50}
          />
          <h3 className="text-center fontStyle">Contact</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
