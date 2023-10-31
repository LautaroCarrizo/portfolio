import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <div className="w-1/4 flex justify-between p-6 max-sm:w-full max-sm:justify-around max-md:w-full max-md:justify-around max-lg:w-3/6 max-xl:w-3/6">
      <div className="flex flex-col text-center max-lg:mx-2">
        <Link href="/">
          <Image src="/img/homeDef.png" alt="icono home" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center  max-lg:mx-2">
        <Link href="/about">
          <Image src="/img/aboutDef2.png" alt="icono about" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center  max-lg:mx-2">
        <Link href="/proyects">
          <Image src="/img/maletinDef.png" alt="icono proyectos"width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center  max-lg:mx-2">
        <Link href="/contact">
          <Image src="/img/lupaDef.png" alt="icono contacto" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
